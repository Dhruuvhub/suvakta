import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLenis } from "lenis/react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/sections/Navbar/navLinks";

const linkClass =
  "relative font-bold tracking-[-0.153846px] leading-[23.0769px] md:tracking-[-0.142222px] md:leading-[21.3333px]";

function isHashOnlyHomeLink(to: string) {
  return to.startsWith("/#") || (to.startsWith("#") && !to.startsWith("/"));
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const lenis = useLenis();

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="flex items-center md:hidden">
      <button
        type="button"
        className="touch-target rounded-full border border-suvakta-900 bg-suvakta-50 text-suvakta-900 shadow-[rgba(0,0,0,0.15)_0px_3px_0px_0px]"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
      </button>

      {open && (
        <>
          <button
            type="button"
            aria-label="Close menu overlay"
            className="fixed inset-0 z-[280] bg-suvakta-900/20 backdrop-blur-[2px]"
            onClick={() => setOpen(false)}
          />
          <nav
            id="mobile-nav-panel"
            className="fixed left-4 right-4 top-[calc(71px+0.5rem)] z-[290] rounded-2xl border border-suvakta-900 bg-suvakta-50 p-4 shadow-[rgba(0,0,0,0.15)_0px_8px_0px_0px]"
          >
            <ul className="flex list-none flex-col gap-3 p-0">
              {NAV_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className={`${linkClass} block rounded-xl px-3 py-3 text-[15.3846px] hover:bg-suvakta-100/80`}
                    onClick={(event) => {
                      setOpen(false);
                      if (isHashOnlyHomeLink(to)) return;
                      if (!to.startsWith("/")) return;

                      event.preventDefault();
                      document.body.style.overflow = "";
                      lenis?.stop();
                      lenis?.scrollTo(0, { immediate: true });
                      window.scrollTo(0, 0);
                      navigate(to);
                      requestAnimationFrame(() => {
                        lenis?.resize();
                        lenis?.scrollTo(0, { immediate: true });
                        lenis?.start();
                      });
                    }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </div>
  );
}
