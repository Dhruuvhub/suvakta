import { useState } from "react";
import { motion } from "motion/react";

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
];

const transition = {
  type: "tween",
  duration: 0.35,
  ease: [0.22, 1, 0.36, 1],
} as const;

export function ExpandableGallery() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="relative flex w-full flex-col items-center justify-start bg-transparent px-4 md:px-8">
      {/* ── Static Hero Photo Stack ── */}
      <div className="relative mx-auto flex h-[260px] w-full max-w-6xl items-center justify-center md:h-[310px]">
        {PHOTOS.map((photo, index) => {
          const isHovered = hoveredId === photo.id;

          return (
            <motion.div
              key={photo.id}
              initial={false}
              animate={{
                opacity: 1,
                scale: isHovered ? 1.08 : 1,
                rotate: photo.rotation ?? 0,
                x: photo.x ?? 0,
                y: photo.y ?? 0,
                zIndex: isHovered ? 50 : (photo.zIndex ?? index),
              }}
              transition={{
                ...transition,
                scale: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
                zIndex: { duration: 0 },
              }}
              onHoverStart={() => setHoveredId(photo.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="absolute h-44 w-44 cursor-pointer overflow-hidden rounded-[2.5rem] border-[6px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.18)] md:h-60 md:w-60 md:rounded-[3rem]"
              style={{ zIndex: isHovered ? 50 : photo.zIndex ?? index }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover"
                loading="eager"
                decoding="async"
                draggable={false}
              />
            </motion.div>
          );
        })}
      </div>

      {/* ── "Go to gallery" Button matching Navbar TicketButton website design ── */}
      <div className="relative z-10 mt-6 flex justify-center md:mt-8">
        <a
          href="/gallery"
          className="relative flex h-[42.3077px] max-w-full items-center justify-center rounded-[153.846px] border-2 border-suvakta-900 bg-suvakta-accent px-[19.2308px] pb-[1.53846px] text-[15.3846px] font-normal leading-[15.3846px] text-suvakta-900 shadow-[rgba(0,0,0,0.32)_0px_3.84615px_0px_0px] transition-all hover:shadow-[rgba(0,0,0,0.55)_0px_0px_0px_0px] md:h-[39.1111px] md:rounded-[142.222px] md:px-[17.7778px] md:pb-[1.42222px] md:text-[14.2222px] md:leading-[14.2222px] md:shadow-[rgba(0,0,0,0.32)_0px_3.55556px_0px_0px]"
        >
          <span className="mt-[0.961538px] block text-nowrap text-[15.3846px] font-bold leading-[15.3846px] tracking-[-0.153846px] md:mt-[0.888889px] md:text-[14.2222px] md:leading-[14.2222px] md:tracking-[-0.142222px]">
            Go to gallery
          </span>
        </a>
      </div>
    </section>
  );
}

export default ExpandableGallery;
