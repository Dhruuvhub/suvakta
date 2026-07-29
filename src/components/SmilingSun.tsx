import { useEffect, useRef } from "react";

type SmilingSunProps = {
  className?: string;
  /** How far the face can drift, as a fraction of the sun size */
  lookRange?: number;
};

const SUN_SRC = "https://c.animaapp.com/mrxuckkzwKTRkk/assets/icon-2.svg";

/**
 * Original FlowFest sun body + clear eyes/mouth that track the cursor.
 */
export function SmilingSun({ className, lookRange = 0.11 }: SmilingSunProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const faceRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const raf = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const root = rootRef.current;
      if (!root) return;

      const rect = root.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy) || 1;
      const strength = Math.min(dist / (rect.width * 1.15), 1);
      const max = rect.width * lookRange;

      target.current.x = (dx / dist) * strength * max;
      target.current.y = (dy / dist) * strength * max;
    };

    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * 0.18;
      current.current.y += (target.current.y - current.current.y) * 0.18;
      if (faceRef.current) {
        faceRef.current.style.transform = `translate(calc(-50% + ${current.current.x.toFixed(2)}px), calc(-50% + ${current.current.y.toFixed(2)}px))`;
      }
      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, [lookRange]);

  return (
    <div
      ref={rootRef}
      className={`relative aspect-square ${className ?? ""}`}
      aria-hidden="true"
    >
      <img
        data-sun-rays=""
        src={SUN_SRC}
        alt=""
        className="h-full w-full select-none"
        draggable={false}
      />

      <div
        ref={faceRef}
        data-sun-face=""
        className="pointer-events-none absolute left-1/2 top-[50%] w-[38%] -translate-x-1/2 -translate-y-1/2"
      >
        <svg viewBox="0 0 60 40" className="h-auto w-full overflow-visible">
          <circle cx="20" cy="15" r="3.8" fill="#121212" />
          <circle cx="40" cy="15" r="3.8" fill="#121212" />
          <path
            d="M22 25c3.5 5.5 12.5 5.5 16 0"
            stroke="#121212"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
}

export default SmilingSun;
