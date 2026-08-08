import {
  useRef,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

const UNSPLASH_IMAGES = [
  "https://images.unsplash.com/photo-1504198458649-3128b932f49e?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1550614000-4b95d4ed798a?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80",
];

type ImageCardProps = {
  src: string;
  onLoad?: () => void;
};

const ImageCard = ({ src, onLoad }: ImageCardProps) => {
  return (
    <div className="relative h-[200px] w-full flex-shrink-0 cursor-pointer bg-suvakta-950 transition-transform duration-300 will-change-transform backface-hidden [transform-style:preserve-3d] hover:scale-[1.02] sm:h-[300px] md:h-[400px]">
      <img
        src={src}
        alt="Gallery Asset"
        loading="lazy"
        onLoad={onLoad}
        className="h-full w-full object-cover opacity-80 transition-opacity duration-300 hover:opacity-100"
      />
    </div>
  );
};

export default function ParallaxUnfurlingGallery() {
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);
  const loadedCountRef = useRef(0);

  const handleItemLoad = useCallback(() => {
    loadedCountRef.current += 1;
    if (!isReady && loadedCountRef.current >= 1) setIsReady(true);
  }, [isReady]);

  useEffect(() => {
    const t = setTimeout(() => setIsReady(true), 1200);
    return () => clearTimeout(t);
  }, []);

  const colMedia = useMemo(() => {
    const col1Base = UNSPLASH_IMAGES.filter((_, i) => i % 4 === 0);
    const col2Base = UNSPLASH_IMAGES.filter((_, i) => i % 4 === 1);
    const col3Base = UNSPLASH_IMAGES.filter((_, i) => i % 4 === 2);
    const col4Base = UNSPLASH_IMAGES.filter((_, i) => i % 4 === 3);

    return {
      col1: [...col1Base, ...col1Base],
      col2: [...col2Base, ...col2Base],
      col3: [...col3Base, ...col3Base],
      col4: [...col4Base, ...col4Base],
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    container: scrollWrapperRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  });

  const bannerWidth = useTransform(smoothProgress, [0, 0.15], ["90vw", "100vw"]);
  const bannerHeight = useTransform(
    smoothProgress,
    [0, 0.15],
    ["80vh", "100vh"],
  );
  const bannerRadius = useTransform(smoothProgress, [0, 0.15], ["48px", "0px"]);
  const bannerBorderWidth = useTransform(
    smoothProgress,
    [0, 0.15],
    ["4px", "0px"],
  );

  const rotateY = useTransform(smoothProgress, [0.15, 1], [-45, -8]);
  const rotateX = useTransform(smoothProgress, [0.15, 1], [25, 4]);
  const rotateZ = useTransform(smoothProgress, [0.15, 1], [15, 2]);
  const translateZ = useTransform(smoothProgress, [0.15, 1], [-800, 0]);

  const yCol1 = useTransform(smoothProgress, [0.15, 1], ["0%", "-40%"]);
  const yCol2 = useTransform(smoothProgress, [0.15, 1], ["-40%", "10%"]);
  const yCol3 = useTransform(smoothProgress, [0.15, 1], ["0%", "-40%"]);
  const yCol4 = useTransform(smoothProgress, [0.15, 1], ["-30%", "20%"]);

  return (
    <div
      ref={scrollWrapperRef}
      data-lenis-prevent=""
      data-lenis-prevent-wheel=""
      className="h-full w-full overflow-x-hidden overflow-y-auto overscroll-contain bg-[#0A1A1C] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      data-ready={isReady ? "true" : "false"}
      style={{ touchAction: "pan-y" }}
    >
      <section
        ref={containerRef}
        className="relative h-[600vh] w-full bg-[#0A1A1C] font-sans text-white selection:bg-white selection:text-black"
      >
        <div className="sticky top-0 flex h-[min(92vh,920px)] w-full items-center justify-center overflow-hidden">
          <motion.div
            style={{
              width: bannerWidth,
              height: bannerHeight,
              borderRadius: bannerRadius,
              borderWidth: bannerBorderWidth,
              borderColor: "#1A3D42",
            }}
            className="relative mx-auto flex max-w-[1920px] items-center justify-center overflow-hidden bg-black will-change-transform backface-hidden [transform-style:preserve-3d]"
          >
            <div
              className="pointer-events-none absolute inset-0 flex items-center justify-center"
              style={{ perspective: "1000px" }}
            >
              <div className="pointer-events-none absolute inset-0 z-20 shadow-[inset_0_100px_150px_-50px_rgba(0,0,0,1),inset_0_-100px_150px_-50px_rgba(0,0,0,1)]" />
              <div className="pointer-events-none absolute inset-0 z-20 shadow-[inset_40px_0_80px_-20px_rgba(0,0,0,1),inset_-40px_0_80px_-20px_rgba(0,0,0,1)] md:shadow-[inset_150px_0_150px_-50px_rgba(0,0,0,1),inset_-150px_0_150px_-50px_rgba(0,0,0,1)]" />

              <motion.div
                style={{
                  rotateX,
                  rotateY,
                  rotateZ,
                  z: translateZ,
                  transformStyle: "preserve-3d",
                }}
                className="flex h-[150vh] w-[120vw] origin-center items-center justify-center gap-4 opacity-100 will-change-transform backface-hidden md:gap-6"
              >
                <motion.div
                  style={{ y: yCol1 }}
                  className="pointer-events-auto flex w-[22vw] min-w-[200px] flex-col gap-4 md:gap-6"
                >
                  {colMedia.col1.map((src, index) => (
                    <ImageCard
                      key={`col1-${index}`}
                      src={src}
                      onLoad={handleItemLoad}
                    />
                  ))}
                </motion.div>

                <motion.div
                  style={{ y: yCol2 }}
                  className="pointer-events-auto flex w-[22vw] min-w-[200px] flex-col gap-4 md:gap-6"
                >
                  {colMedia.col2.map((src, index) => (
                    <ImageCard
                      key={`col2-${index}`}
                      src={src}
                      onLoad={handleItemLoad}
                    />
                  ))}
                </motion.div>

                <motion.div
                  style={{ y: yCol3 }}
                  className="pointer-events-auto flex w-[22vw] min-w-[200px] flex-col gap-4 md:gap-6"
                >
                  {colMedia.col3.map((src, index) => (
                    <ImageCard
                      key={`col3-${index}`}
                      src={src}
                      onLoad={handleItemLoad}
                    />
                  ))}
                </motion.div>

                <motion.div
                  style={{ y: yCol4 }}
                  className="pointer-events-auto flex w-[22vw] min-w-[200px] flex-col gap-4 md:gap-6"
                >
                  {colMedia.col4.map((src, index) => (
                    <ImageCard
                      key={`col4-${index}`}
                      src={src}
                      onLoad={handleItemLoad}
                    />
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
