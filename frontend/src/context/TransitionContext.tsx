import {
  createContext,
  useContext,
  useCallback,
  ReactNode,
  useRef,
  useEffect,
  useMemo,
} from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";

if (typeof window !== "undefined") {
  gsap.registerPlugin(CustomEase);
}

type TransitionContextType = {
  startTransition: (callback: () => void) => void;
};

const TransitionContext = createContext<TransitionContextType | null>(null);

export function usePageTransition() {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error("usePageTransition must be used within a TransitionProvider");
  }
  return context;
}

// Failsafe: if the animation somehow never reaches its onComplete (e.g. a
// stray browser extension freezes rAF, or the tab was backgrounded mid-tween),
// force-unlock instead of leaving every future click a silent no-op.
const TRANSITION_FAILSAFE_MS = 2500;

export function TransitionProvider({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const callbackRef = useRef<(() => void) | null>(null);
  // Ref (not state) so the guard is always read synchronously and can never
  // be stale across renders/closures — a state-based guard here re-creates
  // startTransition on every change, and any consumer holding an older
  // reference to it would keep reading a stale "isAnimating" value.
  const isAnimatingRef = useRef(false);
  const failsafeRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    try {
      if (!gsap.parseEase("main")) {
        CustomEase.create("main", "0.65, 0.01, 0.05, 0.99");
      }
    } catch {
      // ignore — falls back to a built-in ease below
    }

    return () => {
      if (failsafeRef.current) clearTimeout(failsafeRef.current);
    };
  }, []);

  const unlock = useCallback((navWrap: Element | null) => {
    if (failsafeRef.current) {
      clearTimeout(failsafeRef.current);
      failsafeRef.current = null;
    }
    gsap.set(navWrap, { display: "none" });
    isAnimatingRef.current = false;
  }, []);

  const startTransition = useCallback((callback: () => void) => {
    if (isAnimatingRef.current) return;

    if (!containerRef.current) {
      // Portal hasn't mounted yet — still perform the navigation so a click
      // is never silently swallowed, just without the flourish.
      callback();
      return;
    }

    isAnimatingRef.current = true;
    callbackRef.current = callback;

    const navWrap = containerRef.current.querySelector(".nav-overlay-wrapper");
    const bgPanels = containerRef.current.querySelectorAll(".backdrop-layer");

    gsap.set(navWrap, { display: "block" });

    const ease = gsap.parseEase("main") ? "main" : "power2.out";

    failsafeRef.current = setTimeout(() => {
      if (callbackRef.current) {
        callbackRef.current();
        callbackRef.current = null;
      }
      unlock(navWrap);
    }, TRANSITION_FAILSAFE_MS);

    const tl = gsap.timeline({
      defaults: { ease, duration: 0.7 },
      onComplete: () => {
        if (callbackRef.current) {
          callbackRef.current();
          callbackRef.current = null;
        }

        // Sweep back to the left (mirrors the menu's closing animation)
        gsap.to(bgPanels, {
          xPercent: -101,
          stagger: { each: 0.12, from: "end" },
          duration: 0.575,
          ease,
          onComplete: () => unlock(navWrap),
        });
      },
    });

    tl.fromTo(
      bgPanels,
      { xPercent: -101 },
      { xPercent: 0, stagger: 0.12, duration: 0.575 },
    );
  }, [unlock]);

  const value = useMemo(() => ({ startTransition }), [startTransition]);

  return (
    <TransitionContext.Provider value={value}>
      {children}
      {typeof document !== "undefined" &&
        createPortal(
          <div ref={containerRef} className="sg-nav-transition">
            <div className="sg-nav nav-overlay-wrapper" style={{ display: "none", zIndex: 9999 }}>
              <div className="menu-bg">
                <div className="backdrop-layer first" />
                <div className="backdrop-layer second" />
                <div className="backdrop-layer" />
              </div>
            </div>
          </div>,
          document.body,
        )}
    </TransitionContext.Provider>
  );
}
