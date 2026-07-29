/** Exact Anima icon-27 geometry — one path per vertical band */

type RainbowVerticalProps = {
  className?: string;
  /** Distinguishes hero-under-image vs about-section rainbow for GSAP */
  variant?: "hero" | "about";
};

const XS = [426, 376, 326, 276, 226, 176, 126, 76, 26] as const;
const COLORS = [
  "#F97028",
  "#F489A3",
  "#F0BB0D",
  "#F3A20F",
  "#F97028",
  "#F489A3",
  "#F0BB0D",
  "#F3A20F",
  "#F97028",
] as const;

export const RainbowVertical = ({
  className,
  variant = "hero",
}: RainbowVerticalProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 452 600"
      fill="none"
      preserveAspectRatio="none"
      className={`rainbow-vertical rainbow-vertical--${variant} ${className ?? ""}`}
      data-rainbow-vertical={variant}
      aria-hidden="true"
    >
      {XS.map((x, i) => (
        <path
          key={`o-${i}`}
          className="rainbow-band rainbow-band--outline"
          d={`M${x} 0V600`}
          stroke="#000000"
          strokeWidth={52}
          fill="none"
        />
      ))}
      {XS.map((x, i) => (
        <path
          key={`c-${i}`}
          className="rainbow-band rainbow-band--color"
          d={`M${x} 0V600`}
          stroke={COLORS[i]}
          strokeWidth={48}
          fill="none"
        />
      ))}
    </svg>
  );
};
