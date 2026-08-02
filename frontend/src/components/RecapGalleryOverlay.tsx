import { useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { useLenis } from "lenis/react";
import { X } from "lucide-react";
import ParallaxUnfurlingGallery from "@/components/ui/3d-parallax-unfurling-gallery";

type RecapGalleryOverlayProps = {
  open: boolean;
  onClose: () => void;
};

export function RecapGalleryOverlay({ open, onClose }: RecapGalleryOverlayProps) {
  const lenis = useLenis();

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    lenis?.stop();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      lenis?.start();
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose, lenis]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          key="recap-overlay"
          className="fixed inset-0 z-[1000] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Blurred page backdrop */}
          <button
            type="button"
            aria-label="Close recap gallery"
            className="absolute inset-0 border-0 bg-suvakta-950/45 backdrop-blur-md"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="2024 Recap gallery"
            data-lenis-prevent=""
            data-lenis-prevent-wheel=""
            className="relative z-10 h-[min(92vh,920px)] w-[min(96vw,1400px)] overflow-hidden rounded-[28px] border border-white/15 bg-suvakta-950 shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-sm transition hover:bg-white hover:text-black"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <ParallaxUnfurlingGallery />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

export default RecapGalleryOverlay;
