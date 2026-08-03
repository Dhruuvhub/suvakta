import gsap from "gsap";
import type Lenis from "lenis";

export type TransitionDirection = "to-leaderboard" | "to-home";

type RunTransitionArgs = {
  navigate: (to: string) => void;
  to: string;
  direction?: TransitionDirection;
  lenis?: Lenis | null;
  onDone?: () => void;
};

let running = false;

/** Accordion-style iris wipe — shared by nav / back links */
export function runPageTransition({
  navigate,
  to,
  direction = to === "/leaderboard" ? "to-leaderboard" : "to-home",
  lenis,
  onDone,
}: RunTransitionArgs): Promise<void> {
  if (running) return Promise.resolve();
  if (typeof window === "undefined") {
    navigate(to);
    return Promise.resolve();
  }

  const wrap = document.getElementById("page-transition");
  if (!wrap) {
    navigate(to);
    return Promise.resolve();
  }

  running = true;
  document.documentElement.classList.add("is-page-transitioning");
  document.body.style.overflow = "hidden";
  lenis?.stop();

  const overlay = wrap.querySelector<HTMLElement>("[data-pt-overlay]");
  const inner = wrap.querySelector<HTMLElement>("[data-pt-inner]");
  const columns = gsap.utils.toArray<HTMLElement>(
    wrap.querySelectorAll("[data-pt-col]"),
  );
  const curveTop = wrap.querySelector<HTMLElement>("[data-pt-curve-top]");
  const curveBot = wrap.querySelector<HTMLElement>("[data-pt-curve-bot]");
  const mark = wrap.querySelector<HTMLElement>("[data-pt-mark]");
  const pluses = gsap.utils.toArray<HTMLElement>(
    wrap.querySelectorAll("[data-pt-plus]"),
  );

  const duration = 0.95;
  const ease = "power4.inOut";
  const shiftVw = direction === "to-leaderboard" ? -4 : 4;
  const isMobile = window.innerWidth < 768;

  return new Promise((resolve) => {
    const finish = () => {
      running = false;
      document.documentElement.classList.remove("is-page-transitioning");
      document.body.style.overflow = "";
      gsap.set(wrap, { display: "none", pointerEvents: "none" });
      gsap.set([inner, columns, curveTop, curveBot, mark, pluses, overlay], {
        clearProps: "all",
      });
      lenis?.start();
      lenis?.resize();
      onDone?.();
      resolve();
    };

    const tl = gsap.timeline({ defaults: { ease, duration } });

    gsap.set(wrap, { display: "flex", pointerEvents: "auto" });
    gsap.set(overlay, { autoAlpha: 1 });
    gsap.set(inner, {
      width: "100vw",
      height: "100vh",
      clipPath: "inset(0vh 0vw round 0px)",
    });
    gsap.set(columns, { width: "6vw", height: "100vh", x: "0vw", opacity: 1 });
    gsap.set(curveTop, { width: "250vh", y: "-125vh", opacity: 1 });
    gsap.set(curveBot, { width: "250vh", y: "125vh", opacity: 1 });
    gsap.set(mark, { yPercent: -200, opacity: 1 });
    gsap.set(pluses, { opacity: 1, xPercent: 0, rotate: 0 });

    // ——— Leave: iris closes ———
    tl.to(
      inner,
      { clipPath: "inset(22.5vh 48.5vw round 0px)", width: "60vw" },
      0,
    );
    tl.to(columns, { width: "3vw", height: "45vh" }, 0);
    tl.to(
      curveTop,
      {
        width: isMobile ? "100vh" : "175vh",
        y: isMobile ? "-10vh" : "-50vh",
        duration: duration + 0.08,
      },
      0,
    );
    tl.to(
      curveBot,
      {
        width: isMobile ? "100vh" : "175vh",
        y: isMobile ? "10vh" : "50vh",
        duration: duration + 0.08,
      },
      0,
    );
    tl.fromTo(
      mark,
      { yPercent: -200 },
      {
        yPercent: 0,
        yoyo: true,
        repeat: 1,
        repeatDelay: duration / 1.35,
        duration: duration / 1.35,
      },
      0.12,
    );
    tl.fromTo(
      pluses.filter((_, i) => i % 2 === 0),
      { xPercent: -180, rotate: -90 },
      {
        xPercent: 0,
        rotate: 0,
        yoyo: true,
        repeat: 1,
        repeatDelay: duration / 1.35,
        duration: duration / 1.35,
      },
      0.12,
    );
    tl.fromTo(
      pluses.filter((_, i) => i % 2 === 1),
      { xPercent: 180, rotate: 90 },
      {
        xPercent: 0,
        rotate: 0,
        yoyo: true,
        repeat: 1,
        repeatDelay: duration / 1.35,
        duration: duration / 1.35,
      },
      0.12,
    );
    tl.to(columns, { x: `${shiftVw}vw`, duration: duration / 1.25 }, duration * 0.5);

    // Swap route once sealed
    tl.add(() => {
      navigate(to);
      window.scrollTo(0, 0);
      lenis?.scrollTo(0, { immediate: true });
    });

    // Brief hold on the slit
    tl.to({}, { duration: 0.12 });

    // ——— Enter: iris opens ———
    tl.addLabel("open");
    tl.to(
      inner,
      {
        clipPath: "inset(0vh 0vw round 0px)",
        width: "100vw",
      },
      "open",
    );
    tl.to(
      columns,
      {
        width: "12vw",
        height: "100vh",
        x: "0vw",
      },
      "open",
    );
    tl.to(
      curveTop,
      { width: "250vh", y: "-125vh", duration: duration + 0.12 },
      "open",
    );
    tl.to(
      curveBot,
      { width: "250vh", y: "125vh", duration: duration + 0.12 },
      "open",
    );
    tl.to(overlay, { autoAlpha: 0, duration: duration * 0.55 }, "open+=0.2");
    tl.add(finish);
  });
}

export function isPageTransitionRunning() {
  return running;
}
