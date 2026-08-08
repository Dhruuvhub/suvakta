import { Link } from "react-router-dom";

const logoClass =
  "inline w-full cursor-pointer object-contain outline-none select-none transition-[transform,filter] duration-150 ease-out " +
  "[filter:drop-shadow(0_4px_0_rgba(0,0,0,0.22))] " +
  "hover:translate-y-[2px] hover:[filter:drop-shadow(0_1px_0_rgba(0,0,0,0.45))] " +
  "active:translate-y-[3px] active:[filter:drop-shadow(0_0px_0_rgba(0,0,0,0.55))]";

export const BrandLogo = () => {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <Link
        to="/"
        aria-label="Suvakta home"
        className="pointer-events-auto flex w-[min(190px,42vw)] items-center justify-center md:w-[172px]"
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
