import { NavLinks } from "@/sections/Navbar/components/NavLinks";
import { MobileNav } from "@/sections/Navbar/components/MobileNav";
import { BrandLogo } from "@/components/BrandLogo";
import { TicketButton } from "@/components/TicketButton";

export const Navbar = () => {
  return (
    <nav className="pointer-events-none fixed inset-x-0 top-0 z-[300]">
      <div
        data-intro="nav"
        className="pointer-events-auto h-[71.1538px] w-full border-b border-suvakta-900 bg-suvakta-50 will-change-transform md:h-[65.7778px]"
      >
        <div className="section-container section-copy">
          <div className="relative flex h-[71.1538px] items-center justify-between gap-3 md:h-[65.7778px]">
            <div className="flex min-w-0 flex-1 items-center gap-2 md:flex-none">
              <MobileNav />
              <NavLinks />
            </div>
            <BrandLogo />
            <div className="flex shrink-0 items-center">
              <TicketButton />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
