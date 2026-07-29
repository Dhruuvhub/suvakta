import { motion, AnimatePresence, LayoutGroup } from "motion/react";
import { useState, useId, useEffect } from "react";
import { useLenis } from "lenis/react";
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "@/lib/utils";

const PHOTOS = [
  {
    id: "photo-1",
    src: "./assets/gallery/gallery-1.webp",
    alt: "Participant holding a placard",
    rotation: -15,
    x: -90,
    y: 10,
    zIndex: 10,
  },
  {
    id: "photo-2",
    src: "./assets/gallery/gallery-2.webp",
    alt: "Speaker at Miranda House podium",
    rotation: -3,
    x: -10,
    y: -15,
    zIndex: 20,
  },
  {
    id: "photo-3",
    src: "./assets/gallery/gallery-3.webp",
    alt: "Guests with a welcome bouquet",
    rotation: 12,
    x: 75,
    y: 5,
    zIndex: 30,
  },
  {
    id: "photo-4",
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800",
    alt: "Networking event",
  },
  {
    id: "photo-5",
    src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800",
    alt: "Team meetup",
  },
  {
    id: "photo-6",
    src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800",
    alt: "Workshop table",
  },
];

const STACK_SRCS = PHOTOS.slice(0, 3).map((photo) => photo.src);

// Smooth shared-layout morph — tween avoids spring overshoot / jitter
const transition = {
  type: "tween",
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1],
} as const;

export function ExpandableGallery() {
  const [isExpanded, setIsExpanded] = useState(false);
  const layoutGroupId = useId();
  const lenis = useLenis();

  useEffect(() => {
    STACK_SRCS.forEach((href) => {
      const img = new Image();
      img.decoding = "async";
      img.src = href;
    });
  }, []);

  useEffect(() => {
    if (!isExpanded) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    lenis?.stop();

    return () => {
      document.body.style.overflow = previousOverflow;
      lenis?.start();
    };
  }, [isExpanded, lenis]);

  return (
    <section className="relative flex w-full flex-col items-center justify-start bg-transparent px-4 md:px-8">
      <LayoutGroup id={layoutGroupId}>
        <div className="relative mx-auto flex h-[280px] w-full max-w-6xl items-center justify-center md:h-[340px]">
          {!isExpanded &&
            PHOTOS.slice(0, 3).map((photo, index) => (
              <motion.div
                key={`card-${photo.id}`}
                layoutId={`card-container-${photo.id}`}
                // Skip enter fade on remount after collapse (avoids white empty cards)
                initial={false}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: photo.rotation || 0,
                  x: photo.x || 0,
                  y: photo.y || 0,
                  zIndex: photo.zIndex || index,
                }}
                transition={transition}
                whileHover={{
                  scale: 1.05,
                  y: (photo.y || 0) - 15,
                  rotate: (photo.rotation || 0) * 0.8,
                  zIndex: 50,
                  transition: {
                    type: "tween",
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
                className="absolute h-44 w-44 cursor-pointer overflow-hidden rounded-[2.5rem] border-[6px] border-white bg-transparent shadow-[0_20px_50px_rgba(0,0,0,0.15)] md:h-60 md:w-60 md:rounded-[3rem]"
                onClick={() => setIsExpanded(true)}
              >
                {/* Single layout target — nested image layoutIds caused edge gaps */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="pointer-events-none absolute inset-0 h-full w-full scale-[1.02] select-none object-cover"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  draggable={false}
                />
              </motion.div>
            ))}
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              key="gallery-overlay"
              className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden px-4 pb-6 pt-24 md:px-8 md:pb-10 md:pt-28"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                type="button"
                aria-label="Close gallery"
                className="absolute inset-0 border-0 bg-orange-100/45 backdrop-blur-md"
                onClick={() => setIsExpanded(false)}
              />

              <div className="relative z-10 flex w-full max-w-[640px] flex-col items-center md:max-w-[720px]">
                <motion.button
                  type="button"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setIsExpanded(false)}
                  className="group mb-3 flex w-fit self-start items-center gap-2 text-neutral-800 transition-all hover:text-neutral-950 md:mb-5"
                >
                  <div className="rounded-full bg-white/70 p-2 shadow-sm backdrop-blur-sm transition-colors group-hover:bg-white">
                    <HugeiconsIcon
                      icon={ArrowLeft01Icon}
                      width={20}
                      height={20}
                    />
                  </div>
                  <span className="font-medium">Go back</span>
                </motion.button>

                <div className="grid w-full grid-cols-2 justify-items-center gap-3 md:grid-cols-3 md:gap-5">
                  {PHOTOS.map((photo, index) => (
                    <motion.div
                      key={`overlay-${photo.id}`}
                      layoutId={
                        index < 3 ? `card-container-${photo.id}` : undefined
                      }
                      initial={
                        index >= 3 ? { opacity: 0, scale: 0.92 } : false
                      }
                      animate={{ opacity: 1, scale: 1, rotate: 0, x: 0, y: 0 }}
                      exit={
                        index >= 3
                          ? { opacity: 0, scale: 0.92 }
                          : undefined
                      }
                      transition={transition}
                      className={cn(
                        "relative aspect-square w-[min(38vw,132px)] overflow-hidden rounded-[1.25rem] border-[3px] border-white bg-transparent shadow-lg md:w-[min(20vw,168px)] md:rounded-[1.75rem] md:border-4",
                      )}
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="pointer-events-none absolute inset-0 h-full w-full scale-[1.02] select-none object-cover"
                        loading={index < 3 ? "eager" : "lazy"}
                        decoding="async"
                        fetchPriority={index < 3 ? "high" : "auto"}
                        draggable={false}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </section>
  );
}

export default ExpandableGallery;
