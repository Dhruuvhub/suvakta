/** Exact Anima icon-5 / icon-6 geometry — one path per band for GSAP targeting */

type RainbowSidesProps = {
  className?: string;
  side: "right" | "left";
};

type Band =
  | { d: string; kind: "outline" }
  | { d: string; kind: "color"; color: string };

const BANDS: Band[] = [
  { kind: "outline", d: "M26 0V400C26 510.457 115.543 600 226 600H321" },
  { kind: "outline", d: "M76 0V400C76 482.843 143.157 550 226 550H321" },
  { kind: "outline", d: "M126 0V400C126 455.228 170.772 500 226 500H321" },
  { kind: "outline", d: "M176 0V400C176 427.614 198.386 450 226 450H321" },
  {
    kind: "color",
    d: "M26 0V400C26 510.457 115.543 600 226 600H321",
    color: "#F489A3",
  },
  {
    kind: "color",
    d: "M76 0V400C76 482.843 143.157 550 226 550H321",
    color: "#F0BB0D",
  },
  {
    kind: "color",
    d: "M126 0V400C126 455.228 170.772 500 226 500H321",
    color: "#F3A20F",
  },
  {
    kind: "color",
    d: "M176 0V400C176 427.614 198.386 450 226 450H321",
    color: "#F97028",
  },
];

export const RainbowSides = ({ className, side }: RainbowSidesProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 321 626"
      fill="none"
      className={`rainbow-sides rainbow-sides--${side} ${className ?? ""}`}
      data-rainbow-side={side}
      aria-hidden="true"
    >
      {BANDS.map((band, i) => (
        <path
          key={`${side}-${i}`}
          className={
            band.kind === "outline"
              ? "rainbow-band rainbow-band--outline"
              : "rainbow-band rainbow-band--color"
          }
          d={band.d}
          stroke={band.kind === "outline" ? "#121212" : band.color}
          strokeWidth={band.kind === "outline" ? 52 : 48}
          fill="none"
          strokeLinecap="butt"
        />
      ))}
    </svg>
  );
};
