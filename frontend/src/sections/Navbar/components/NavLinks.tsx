import { Link, useNavigate } from "react-router-dom";
import { useLenis } from "lenis/react";
import { NAV_LINKS } from "@/sections/Navbar/navLinks";

const linkClass =
  "relative font-bold tracking-[-0.153846px] leading-[23.0769px] before:absolute before:bottom-0 before:left-0 before:block before:h-[1.92308px] before:w-full before:rounded-[1.92308px] before:bg-suvakta-900 before:scale-x-0 md:tracking-[-0.142222px] md:leading-[21.3333px] md:before:h-[1.77778px] md:before:rounded-[1.77778px]";

function isHashOnlyHomeLink(to: string) {
  return to.startsWith("/#") || (to.startsWith("#") && !to.startsWith("/"));
}

export const NavLinks = () => {
  const navigate = useNavigate();
  const lenis = useLenis();

  return (
    <ul className="hidden list-none gap-x-[23.0769px] pl-0 md:flex md:gap-x-[24.8889px]">
      {NAV_LINKS.map(({ label, to }) => (
        <li key={to}>
          <Link
            to={to}
            className={`${linkClass} text-[15.3846px] md:text-[14.2222px]`}
            onClick={(event) => {
              // Full page routes: reset smooth-scroll BEFORE paint of next page
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
  );
};
