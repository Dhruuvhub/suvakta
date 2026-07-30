import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

function setPathLengths(paths: SVGPathElement[], offset: "full" | "zero") {
  paths.forEach((path) => {
    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = offset === "full" ? `${length}` : "0";
  });
}

const EASE_HEAVY = "power3.inOut";
const EASE_POP = "back.out(1.35)";

const MSG_A = "hello guys";
const MSG_B = "welcome back";
const DATE_MSG = "9&10 October 2026 , Miranda House";

let introHasPlayed = false;

/** One-shot measure — never call inside rAF / onUpdate */
function measureBubbleWidth(
  bubble: HTMLElement,
  textEl: HTMLElement,
  text: string,
) {
  const prevText = textEl.textContent;
  const prevWidth = bubble.style.width;
  textEl.textContent = text;
  bubble.style.width = "auto";
  const width = Math.ceil(bubble.getBoundingClientRect().width);
  textEl.textContent = prevText ?? "";
  bubble.style.width = prevWidth;
  return Math.max(width, 40);
}

function typeTo(
  tl: gsap.core.Timeline,
  el: HTMLElement,
  text: string,
  position: gsap.Position,
  bubble: HTMLElement | null,
  fromW: number,
  toW: number,
  charDuration = 0.06,
) {
  const duration = Math.max(0.35, text.length * charDuration);
  const state = { i: 0 };
  let last = -1;

  tl.to(
    state,
    {
      i: text.length,
      duration,
      ease: "none",
      onUpdate: () => {
        const n = Math.round(state.i);
        if (n === last) return;
        last = n;
        el.textContent = text.slice(0, n);
      },
    },
    position,
  );

  if (bubble) {
    tl.fromTo(
      bubble,
      { width: fromW },
      { width: toW, duration, ease: "none", overwrite: "auto" },
      position,
    );
  }
}

function backspaceFrom(
  tl: gsap.core.Timeline,
  el: HTMLElement,
  text: string,
  position: gsap.Position,
  bubble: HTMLElement | null,
  fromW: number,
  toW: number,
  charDuration = 0.038,
) {
  const duration = Math.max(0.25, text.length * charDuration);
  const state = { i: text.length };
  let last = text.length + 1;

  tl.set(el, { textContent: text }, position);
  tl.to(
    state,
    {
      i: 0,
      duration,
      ease: "none",
      onUpdate: () => {
        const n = Math.round(state.i);
        if (n === last) return;
        last = n;
        el.textContent = text.slice(0, n);
      },
    },
    position,
  );

  if (bubble) {
    tl.fromTo(
      bubble,
      { width: fromW },
      { width: toW, duration, ease: "none", overwrite: "auto" },
      position,
    );
  }
}

/**
 * Intro sequence:
 * 1) Side strips — heavy staggered flow
 * 2) Sun loader — type "hello guys" → backspace → "welcome back" → backspace
 *    → type date while sliding up into the hero badge slot
 * 4) Heading settles
 * 5) Header slides down (no fade)
 */
export function usePageIntro(lenis?: Lenis | null) {
  useLayoutEffect(() => {
    // Always begin intro / first paint from the hero
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
    lenis?.scrollTo(0, { immediate: true });

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const veil = document.getElementById("page-intro-veil");
    const loader = document.getElementById("sun-loader");

    if (reduced || introHasPlayed) {
      veil?.remove();
      loader?.remove();
      window.dispatchEvent(new Event("page-intro-complete"));
      return;
    }

    const rightOutlines = gsap.utils.toArray<SVGPathElement>(
      ".rainbow-sides--right .rainbow-band--outline",
    );
    const rightColors = gsap.utils.toArray<SVGPathElement>(
      ".rainbow-sides--right .rainbow-band--color",
    );
    const leftOutlines = gsap.utils.toArray<SVGPathElement>(
      ".rainbow-sides--left .rainbow-band--outline",
    );
    const leftColors = gsap.utils.toArray<SVGPathElement>(
      ".rainbow-sides--left .rainbow-band--color",
    );

    const sidePaths = [
      ...rightOutlines,
      ...rightColors,
      ...leftOutlines,
      ...leftColors,
    ];
    if (sidePaths.length) setPathLengths(sidePaths, "full");

    const nav = document.querySelector<HTMLElement>('[data-intro="nav"]');
    const badge = document.querySelector<HTMLElement>('[data-intro="badge"]');
    const phrase = document.querySelector<HTMLElement>('[data-intro="phrase"]');
    const banner = document.querySelector<HTMLElement>('[data-intro="banner"]');
    const gallery = document.querySelector<HTMLElement>('[data-intro="gallery"]');

    const rays = loader?.querySelector<HTMLElement>("[data-sun-rays]");
    const textEl = document.querySelector<HTMLElement>("[data-sun-text]");
    const caret = document.querySelector<HTMLElement>("[data-sun-caret]");
    const bubble = document.querySelector<HTMLElement>("[data-sun-bubble]");

    if (nav) gsap.set(nav, { yPercent: -105, opacity: 1 });
    if (badge) gsap.set(badge, { autoAlpha: 0 });
    if (phrase) gsap.set(phrase, { opacity: 0, y: 40, scale: 0.86 });
    if (banner) gsap.set(banner, { opacity: 0, y: 36, scale: 0.86, rotate: -9 });
    if (gallery) gsap.set(gallery, { opacity: 0, y: 48 });
    if (veil) gsap.set(veil, { opacity: 1, pointerEvents: "auto" });
    if (loader) gsap.set(loader, { autoAlpha: 1, x: 0, y: 0, scale: 1 });
    if (textEl) textEl.textContent = "";

    lenis?.stop();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const bandCount = Math.max(
      rightOutlines.length,
      leftOutlines.length,
      rightColors.length,
      leftColors.length,
      0,
    );

    let spinTween: gsap.core.Tween | null = null;
    let caretTween: gsap.core.Tween | null = null;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          introHasPlayed = true;
          spinTween?.kill();
          caretTween?.kill();
          document.body.style.overflow = prevOverflow;
          lenis?.start();
          veil?.remove();
          loader?.remove();
          window.dispatchEvent(new Event("page-intro-complete"));
          ScrollTrigger.refresh();
        },
      });

      // Soft veil lift so strips / cream show behind the sun
      if (veil) {
        tl.to(veil, { opacity: 0, duration: 0.7, ease: "power2.out" }, 0);
      }

      // ——— Phase 1: strips ———
      if (bandCount > 0) {
        for (let i = 0; i < bandCount; i++) {
          const t = 0.15 + i * 0.28;
          const duration = 1.35;
          const rightPair = [rightOutlines[i], rightColors[i]].filter(
            Boolean,
          ) as SVGPathElement[];
          const leftPair = [leftOutlines[i], leftColors[i]].filter(
            Boolean,
          ) as SVGPathElement[];

          rightPair.forEach((path) => {
            tl.to(path, { strokeDashoffset: 0, duration, ease: EASE_HEAVY }, t);
          });
          leftPair.forEach((path) => {
            tl.to(path, { strokeDashoffset: 0, duration, ease: EASE_HEAVY }, t);
          });
        }
      }

      // ——— Phase 2: sun rotate + typewriter (overlaps late strip flow, like the ref) ———
      tl.addLabel("sun", bandCount > 0 ? 0.55 : 0.2);

      if (rays) {
        spinTween = gsap.to(rays, {
          rotation: 360,
          duration: 3.2,
          repeat: -1,
          ease: "none",
          transformOrigin: "50% 50%",
        });
      }

      if (caret) {
        caretTween = gsap.to(caret, {
          opacity: 0.15,
          duration: 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (loader) {
        tl.fromTo(
          loader,
          { autoAlpha: 0, scale: 0.92 },
          {
            autoAlpha: 1,
            scale: 1,
            duration: 0.55,
            ease: EASE_POP,
            force3D: true,
          },
          "sun",
        );
      }

      // Pre-measure bubble widths once (avoids layout thrash while typing)
      const wEmpty =
        bubble && textEl ? measureBubbleWidth(bubble, textEl, "") : 40;
      const wA =
        bubble && textEl ? measureBubbleWidth(bubble, textEl, MSG_A) : 120;
      const wB =
        bubble && textEl ? measureBubbleWidth(bubble, textEl, MSG_B) : 130;
      const wDate =
        bubble && textEl ? measureBubbleWidth(bubble, textEl, DATE_MSG) : 220;

      if (bubble) gsap.set(bubble, { width: wEmpty });

      if (textEl) {
        typeTo(tl, textEl, MSG_A, "sun+=0.45", bubble, wEmpty, wA);
        tl.to({}, { duration: 0.28 });
        backspaceFrom(tl, textEl, MSG_A, ">", bubble, wA, wEmpty);
        tl.to({}, { duration: 0.12 });
        typeTo(tl, textEl, MSG_B, ">", bubble, wEmpty, wB);
        tl.to({}, { duration: 0.32 });
        backspaceFrom(tl, textEl, MSG_B, ">", bubble, wB, wEmpty);
        tl.to({}, { duration: 0.08 });
      } else {
        tl.to({}, { duration: 2.5 }, "sun+=0.45");
      }

      // ——— Phase 3: slide up while typing the final date ———
      tl.addLabel("fly");

      const dateTypeDuration = Math.max(0.45, DATE_MSG.length * 0.048);
      const flyDuration = Math.max(1.75, dateTypeDuration + 0.2);

      tl.add(() => {
        if (!loader || !badge) return;

        const sunEl =
          loader.querySelector<HTMLElement>("[data-sun-anchor]") ?? loader;
        const badgeSun =
          badge.querySelector<HTMLElement>("[data-sun-anchor], .aspect-square") ??
          badge;

        const from = sunEl.getBoundingClientRect();
        const to = badgeSun.getBoundingClientRect();
        const dx =
          to.left + to.width / 2 - (from.left + from.width / 2);
        const dy =
          to.top + to.height / 2 - (from.top + from.height / 2);
        const scale = Math.min(0.78, (to.height / from.height) * 0.98);

        loader.dataset.flyX = String(dx);
        loader.dataset.flyY = String(dy);
        loader.dataset.flyScale = String(scale);
      }, "fly");

      if (loader) {
        tl.to(
          loader,
          {
            duration: flyDuration,
            ease: "power2.inOut",
            x: () => Number(loader.dataset.flyX || 0),
            y: () => Number(loader.dataset.flyY || 0),
            scale: () => Number(loader.dataset.flyScale || 0.75),
            force3D: true,
          },
          "fly",
        );
      }

      if (textEl) {
        typeTo(tl, textEl, DATE_MSG, "fly", bubble, wEmpty, wDate, 0.048);
      }

      if (caret) {
        tl.to(
          caret,
          { autoAlpha: 0, duration: 0.18 },
          `fly+=${dateTypeDuration + 0.05}`,
        );
      }

      if (badge) {
        tl.set(badge, { autoAlpha: 1 }, `fly+=${flyDuration}`);
      }
      if (loader) {
        tl.set(loader, { autoAlpha: 0 }, `fly+=${flyDuration}`);
      }

      tl.add(() => {
        spinTween?.kill();
        caretTween?.kill();
      }, `fly+=${flyDuration}`);

      // ——— Phase 4: heading ———
      tl.addLabel("heading", "+=0.12");

      if (phrase) {
        tl.to(
          phrase,
          { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: EASE_POP },
          "heading",
        );
      }

      if (banner) {
        tl.to(
          banner,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: -3.5,
            duration: 0.7,
            ease: EASE_POP,
          },
          "heading+=0.22",
        );
      }

      // ——— Phase 5: header slides down (no fade) ———
      if (nav) {
        tl.to(
          nav,
          { yPercent: 0, duration: 0.85, ease: "power3.out" },
          "heading+=0.95",
        );
      }

      if (gallery) {
        tl.to(
          gallery,
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
          "heading+=1.05",
        );
      }
    });

    return () => {
      spinTween?.kill();
      caretTween?.kill();
      ctx.revert();
      document.body.style.overflow = prevOverflow;
      lenis?.start();
    };
  }, [lenis]);
}
