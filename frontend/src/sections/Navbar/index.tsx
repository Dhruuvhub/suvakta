import { NavLinks } from "@/sections/Navbar/components/NavLinks";
import { MobileNav } from "@/sections/Navbar/components/MobileNav";
import { BrandLogo } from "@/components/BrandLogo";
import { LoginButton } from "@/components/LoginButton";

export const Navbar = () => {
  return (
    <nav className="pointer-events-none fixed inset-x-0 top-0 z-[300]">
      <div
        data-intro="nav"
        className="pointer-events-auto h-[71.1538px] w-full border-b border-suvakta-900 bg-suvakta-50 will-change-transform md:h-[65.7778px]"
      >
        <div className="section-container section-copy relative">
          <div className="relative flex h-[71.1538px] items-center md:h-[65.7778px]">
            <div className="relative z-10 flex items-center gap-2">
              <MobileNav />
              <NavLinks />
            </div>

            <BrandLogo />

            <div className="absolute right-3 top-1/2 z-10 -translate-y-1/2 md:right-6 lg:right-8">
              <LoginButton />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
