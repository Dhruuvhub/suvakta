import { useLenis } from "lenis/react";
import { usePageIntro } from "@/hooks/usePageIntro";
import { SunLoader } from "@/components/SunLoader";

/** Mounts the page-load intro veil + centered sun loader. */
export function PageIntro() {
  const lenis = useLenis();
  usePageIntro(lenis);

  return (
    <>
      <div
        id="page-intro-veil"
        className="pointer-events-auto fixed inset-0 z-[900] bg-suvakta-50"
        aria-hidden="true"
      />
      <SunLoader />
    </>
  );
}
