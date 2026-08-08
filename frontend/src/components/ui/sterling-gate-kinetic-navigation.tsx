import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { NAV_LINKS } from "@/sections/Navbar/navLinks";
import { LEADERBOARD_PATH, LOGIN_PATH, useAuth } from "@/context/AuthContext";
import { useAppNavigate } from "@/hooks/useAppNavigate";

if (typeof window !== "undefined") {
  gsap.registerPlugin(CustomEase);
}

function isHashOnlyHomeLink(to: string) {
  return to.startsWith("/#") || (to.startsWith("#") && !to.startsWith("/"));
}

type KineticMobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

/**
 * Sterling Gate kinetic navigation, adapted for Suvakta:
 * - controlled by the mobile hamburger (open/onClose)
 * - panel + backdrop layers slide in from the LEFT
 * - links run through the auth-aware app navigation
 */
export function KineticMobileMenu({ open, onClose }: KineticMobileMenuProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const appNavigate = useAppNavigate();
  const { isAuthenticated, signOut } = useAuth();

  const links = [
    ...NAV_LINKS.map((l) => ({ ...l, action: undefined as (() => void) | undefined })),
    isAuthenticated
      ? {
          label: "Logout",
          to: "/",
          action: () => {
            signOut();
            appNavigate("/");
          },
        }
      : { label: "Login", to: LOGIN_PATH, action: undefined },
  ];

  // Shape hover/tap effects
  useEffect(() => {
    if (!containerRef.current) return;

    try {
      if (!gsap.parseEase("main")) {
        CustomEase.create("main", "0.65, 0.01, 0.05, 0.99");
      }
    } catch {
      /* fall back to default eases */
    }

    const ctx = gsap.context(() => {
      const menuItems =
        containerRef.current!.querySelectorAll<HTMLElement>(
          ".menu-list-item[data-shape]",
        );
      const shapesContainer = containerRef.current!.querySelector(
        ".ambient-background-shapes",
      );

      menuItems.forEach((item) => {
        const shapeIndex = item.getAttribute("data-shape");
        const shape = shapesContainer?.querySelector(
          `.bg-shape-${shapeIndex}`,
        );
        const textEl = item.querySelector(".nav-link-text");

        if (!shape) return;

        const shapeEls = shape.querySelectorAll(".shape-element");

        const onEnter = () => {
          shapesContainer
            ?.querySelectorAll(".bg-shape")
            .forEach((s) => s.classList.remove("active"));
          shape.classList.add("active");
          gsap.fromTo(
            shapeEls,
            { scale: 0.5, opacity: 0, rotation: -10 },
            {
              scale: 1,
              opacity: 1,
              rotation: 0,
              duration: 0.6,
              stagger: 0.08,
              ease: "back.out(1.7)",
              overwrite: "auto",
            },
          );
        };

        const onLeave = () => {
          gsap.to(shapeEls, {
            scale: 0.8,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => shape.classList.remove("active"),
            overwrite: "auto",
          });
        };

        item.addEventListener("mouseenter", onEnter);
        item.addEventListener("mouseleave", onLeave);
        item.addEventListener("touchstart", onEnter, { passive: true });
        item.addEventListener("touchend", onLeave, { passive: true });
        item.addEventListener("touchcancel", onLeave, { passive: true });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Setup the open/close timeline once
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const navWrap = containerRef.current!.querySelector(".nav-overlay-wrapper");
      const menu = containerRef.current!.querySelector(".menu-content");
      const overlay = containerRef.current!.querySelector(".overlay");
      const bgPanels = containerRef.current!.querySelectorAll(".backdrop-layer");
      const menuLinks = containerRef.current!.querySelectorAll(".nav-link");

      gsap.set(navWrap, { display: "none" });
      gsap.set(menu, { xPercent: -120 });

      const ease = gsap.parseEase("main") ? "main" : "power2.out";
      const tl = gsap.timeline({ paused: true, defaults: { ease, duration: 0.7 } });

      tl.set(navWrap, { display: "block" })
        .set(menu, { xPercent: 0 })
        .fromTo(overlay, { autoAlpha: 0 }, { autoAlpha: 1 }, "<")
        .fromTo(
          bgPanels,
          { xPercent: -101 },
          { xPercent: 0, stagger: 0.12, duration: 0.575 },
          "<"
        )
        .fromTo(
          menuLinks,
          { yPercent: 140, rotate: -10 },
          { yPercent: 0, rotate: 0, stagger: 0.05 },
          "<+=0.35"
        );

      tlRef.current = tl;
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Play or reverse the timeline when `open` changes
  useEffect(() => {
    if (!tlRef.current) return;
    const navWrap = containerRef.current?.querySelector(".nav-overlay-wrapper");

    if (open) {
      navWrap?.setAttribute("data-nav", "open");
      tlRef.current.timeScale(1).play();
    } else {
      navWrap?.setAttribute("data-nav", "closed");
      tlRef.current.timeScale(1.5).reverse();
    }
  }, [open]);

  // Escape closes
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  // Portal to <body> so ancestor transforms/overflow (e.g. the navbar's
  // will-change-transform) can't trap the fixed fullscreen overlay.
  return createPortal(
    <div ref={containerRef}>
      <section className="fullscreen-menu-container">
        <div data-nav="closed" className="sg-nav nav-overlay-wrapper">
          <div className="overlay" onClick={onClose} />
          <nav className="menu-content">
            <div className="menu-bg">
              <div className="backdrop-layer first" />
              <div className="backdrop-layer second" />
              <div className="backdrop-layer" />

              <div className="ambient-background-shapes">
                {/* Shape 1: floating circles */}
                <svg className="bg-shape bg-shape-1" viewBox="0 0 400 400" fill="none">
                  <circle className="shape-element" cx="80" cy="120" r="40" fill="rgba(163,216,221,0.16)" />
                  <circle className="shape-element" cx="300" cy="80" r="60" fill="rgba(163,216,221,0.12)" />
                  <circle className="shape-element" cx="200" cy="300" r="80" fill="rgba(255,255,255,0.08)" />
                  <circle className="shape-element" cx="350" cy="280" r="30" fill="rgba(163,216,221,0.16)" />
                </svg>

                {/* Shape 2: wave pattern */}
                <svg className="bg-shape bg-shape-2" viewBox="0 0 400 400" fill="none">
                  <path
                    className="shape-element"
                    d="M0 200 Q100 100, 200 200 T 400 200"
                    stroke="rgba(163,216,221,0.2)"
                    strokeWidth="60"
                    fill="none"
                  />
                  <path
                    className="shape-element"
                    d="M0 280 Q100 180, 200 280 T 400 280"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="40"
                    fill="none"
                  />
                </svg>

                {/* Shape 3: grid dots */}
                <svg className="bg-shape bg-shape-3" viewBox="0 0 400 400" fill="none">
                  {[
                    [50, 50, 8], [150, 50, 8], [250, 50, 8], [350, 50, 8],
                    [100, 150, 12], [200, 150, 12], [300, 150, 12],
                    [50, 250, 10], [150, 250, 10], [250, 250, 10], [350, 250, 10],
                    [100, 350, 6], [200, 350, 6], [300, 350, 6],
                  ].map(([cx, cy, r], i) => (
                    <circle
                      key={i}
                      className="shape-element"
                      cx={cx}
                      cy={cy}
                      r={r}
                      fill={
                        i % 2 === 0
                          ? "rgba(163,216,221,0.3)"
                          : "rgba(255,255,255,0.18)"
                      }
                    />
                  ))}
                </svg>

                {/* Shape 4: organic blobs */}
                <svg className="bg-shape bg-shape-4" viewBox="0 0 400 400" fill="none">
                  <path
                    className="shape-element"
                    d="M100 100 Q150 50, 200 100 Q250 150, 200 200 Q150 250, 100 200 Q50 150, 100 100"
                    fill="rgba(163,216,221,0.14)"
                  />
                  <path
                    className="shape-element"
                    d="M250 200 Q300 150, 350 200 Q400 250, 350 300 Q300 350, 250 300 Q200 250, 250 200"
                    fill="rgba(255,255,255,0.08)"
                  />
                </svg>
              </div>
            </div>

            <div className="menu-content-wrapper">
              <ul className="menu-list">
                {links.map(({ label, to, action }, index) => {
                  const href =
                    to === LEADERBOARD_PATH && !isAuthenticated
                      ? LOGIN_PATH
                      : to;

                  return (
                    <li
                      key={label}
                      className="menu-list-item"
                      data-shape={(index % 4) + 1}
                    >
                      <Link
                        to={href}
                        className="nav-link"
                        onClick={(event) => {
                          onClose();
                          if (action) {
                            event.preventDefault();
                            action();
                            return;
                          }
                          if (isHashOnlyHomeLink(to)) return;
                          if (!to.startsWith("/")) return;

                          event.preventDefault();
                          appNavigate(to);
                        }}
                      >
                        <p className="nav-link-text font-sugar_peachy">
                          {label}
                        </p>
                        <div className="nav-link-hover-bg" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>
        </div>
      </section>
    </div>,
    document.body,
  );
}

/** Original export name kept for drop-in compatibility */
export { KineticMobileMenu as Component };
