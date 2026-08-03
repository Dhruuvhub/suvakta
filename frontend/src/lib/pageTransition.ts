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

/** Height scale: 1 at edges → ~0.38 at center (accordion bellows pinch) */
function pinchScale(index: number, count: number) {
  const mid = (count - 1) / 2;
  const t = Math.abs(index - mid) / mid; // 0 center → 1 edge
  // Smooth bowl curve (matches Accordion silhouette)
  return 0.38 + 0.62 * (t * t * (3 - 2 * t));
}

/** Clean black/white bellows wipe — Accordion mid-frame look */
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

  const bars = gsap.utils.toArray<HTMLElement>(
    wrap.querySelectorAll("[data-pt-bar]"),
  );
  const pluses = gsap.utils.toArray<HTMLElement>(
    wrap.querySelectorAll("[data-pt-plus]"),
  );
  const ticks = wrap.querySelector<HTMLElement>("[data-pt-ticks]");
  const bellows = wrap.querySelector<HTMLElement>("[data-pt-bellows]");

  const count = bars.length;
  const duration = 0.85;
  const ease = "power4.inOut";
  // Slight lateral slot shift by destination (Accordion namespace feel)
  const shiftX = direction === "to-leaderboard" ? "-3vw" : "3vw";

  return new Promise((resolve) => {
    const finish = () => {
      running = false;
      document.documentElement.classList.remove("is-page-transitioning");
      document.body.style.overflow = "";
      gsap.set(wrap, { display: "none", pointerEvents: "none" });
      gsap.set([bars, pluses, ticks, bellows], { clearProps: "all" });
      lenis?.start();
      lenis?.resize();
      onDone?.();
      resolve();
    };

    const tl = gsap.timeline({ defaults: { ease } });

    // Show shell
    gsap.set(wrap, {
      display: "flex",
      pointerEvents: "auto",
      autoAlpha: 1,
      backgroundColor: "#000",
    });
    gsap.set(pluses, { autoAlpha: 0, scale: 0.6 });
    gsap.set(ticks, { autoAlpha: 0, y: -8 });
    gsap.set(bellows, { x: "0vw", scaleX: 1 });

    // Bars start full-bleed (cover), then pinch
    bars.forEach((bar) => {
      gsap.set(bar, {
        scaleY: 1.05,
        transformOrigin: "50% 50%",
        autoAlpha: 1,
      });
    });

    // ——— Close: full bars → bellows pinch ———
    tl.to(
      pluses,
      { autoAlpha: 1, scale: 1, duration: 0.35, stagger: 0.04, ease: "power3.out" },
      0,
    );
    tl.to(ticks, { autoAlpha: 1, y: 0, duration: 0.35, ease: "power3.out" }, 0.05);

    bars.forEach((bar, i) => {
      tl.to(
        bar,
        {
          scaleY: pinchScale(i, count),
          duration,
        },
        0.08,
      );
    });

    tl.to(
      bellows,
      { scaleX: 0.92, x: shiftX, duration: duration * 0.9 },
      0.12,
    );

    // Route swap at sealed bellows
    tl.add(() => {
      navigate(to);
      window.scrollTo(0, 0);
      lenis?.scrollTo(0, { immediate: true });
    });

    tl.to({}, { duration: 0.14 });

    // ——— Open: pinch → full cover, then fade shell ———
    tl.addLabel("open");
    tl.to(
      bellows,
      { scaleX: 1.15, x: "0vw", duration: duration * 0.95 },
      "open",
    );
    bars.forEach((bar) => {
      tl.to(
        bar,
        {
          scaleY: 1.2,
          duration: duration * 0.95,
        },
        "open",
      );
    });
    tl.to(
      [pluses, ticks],
      { autoAlpha: 0, duration: 0.25, ease: "power2.in" },
      "open+=0.45",
    );
    tl.to(
      wrap,
      {
        autoAlpha: 0,
        duration: 0.35,
        ease: "power2.inOut",
      },
      "open+=0.55",
    );
    tl.add(finish);
  });
}

export function isPageTransitionRunning() {
  return running;
}
