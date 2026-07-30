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
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1],
} as const;

export function ExpandableGallery() {
  return (
    <section className="relative flex w-full flex-col items-center justify-start bg-transparent px-4 md:px-8">
      {/* ── Static Hero Photo Stack ── */}
      <div className="relative mx-auto flex h-[260px] w-full max-w-6xl items-center justify-center md:h-[310px]">
        {PHOTOS.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={false}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: photo.rotation ?? 0,
              x: photo.x ?? 0,
              y: photo.y ?? 0,
              zIndex: photo.zIndex ?? index,
            }}
            transition={transition}
            whileHover={{
              scale: 1.05,
              y: (photo.y ?? 0) - 12,
              rotate: (photo.rotation ?? 0) * 0.8,
              transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
            }}
            className="absolute h-44 w-44 overflow-hidden rounded-[2.5rem] border-[6px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.18)] md:h-60 md:w-60 md:rounded-[3rem]"
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
        ))}
      </div>

      {/* ── "Go to gallery" Button matching Navbar TicketButton website design ── */}
      <div className="relative z-10 mt-6 md:mt-8 flex justify-center">
        <a
          href="/gallery"
          className="relative text-[15.3846px] font-normal items-center bg-red-300 shadow-[rgba(0,0,0,0.15)_0px_3.84615px_0px_0px] box-border caret-transparent flex auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto_auto] h-[42.3077px] justify-center leading-[15.3846px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] border border-neutral-900 pb-[1.53846px] px-[19.2308px] rounded-[153.846px] border-solid text-neutral-900 md:text-[14.2222px] md:shadow-[rgba(0,0,0,0.15)_0px_3.55556px_0px_0px] md:h-[39.1111px] md:leading-[14.2222px] md:pb-[1.42222px] md:px-[17.7778px] md:rounded-[142.222px] hover:shadow-[rgba(0,0,0,0.5)_0px_0px_0px_0px] hover:outline-0 transition-all"
        >
          <span className="text-[15.3846px] font-bold box-border caret-transparent block tracking-[-0.153846px] leading-[15.3846px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap mt-[0.961538px] md:text-[14.2222px] md:tracking-[-0.142222px] md:leading-[14.2222px] md:mt-[0.888889px]">
            Go to gallery
          </span>
        </a>
      </div>
    </section>
  );
}

export default ExpandableGallery;
