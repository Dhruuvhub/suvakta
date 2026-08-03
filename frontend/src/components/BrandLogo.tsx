import { Link, useLocation } from "react-router-dom";
import { useTransitionNavigate } from "@/hooks/useTransitionNavigate";

const logoClass =
  "inline w-full cursor-pointer object-contain outline-none select-none transition-[transform,filter] duration-150 ease-out " +
  "[filter:drop-shadow(0_4px_0_rgba(0,0,0,0.22))] " +
  "hover:translate-y-[2px] hover:[filter:drop-shadow(0_1px_0_rgba(0,0,0,0.45))] " +
  "active:translate-y-[3px] active:[filter:drop-shadow(0_0px_0_rgba(0,0,0,0.55))]";

export const BrandLogo = () => {
  const { pathname } = useLocation();
  const transitionTo = useTransitionNavigate();

  return (
    <div className="pointer-events-none relative flex h-auto w-auto min-w-0 items-center justify-center md:absolute md:left-0 md:top-0 md:h-full md:w-full">
      <Link
        to="/"
        aria-label="Suvakta home"
        className="pointer-events-auto flex w-[min(190px,42vw)] items-center justify-center md:w-[172px]"
        onClick={(event) => {
          if (pathname === "/") return;
          event.preventDefault();
          transitionTo("/");
        }}
      >
        <img
          src="/suvakta-wordmark.png"
          alt="Suvakta"
          className={logoClass}
          draggable={false}
        />
      </Link>
    </div>
  );
};
