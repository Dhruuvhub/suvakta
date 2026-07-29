import { NavLinks } from "@/sections/Navbar/components/NavLinks";
import { BrandLogo } from "@/components/BrandLogo";
import { TicketButton } from "@/components/TicketButton";

export const Navbar = () => {
  return (
    <nav className="fixed text-[15.3846px] box-border caret-transparent leading-5 outline-[3px] pointer-events-none z-[300] inset-0 md:text-[14.2222px] md:leading-[18.4889px]">
      <div
        data-intro="nav"
        className="absolute left-0 top-0 h-[71.1538px] w-full border-b border-neutral-900 bg-orange-100 text-[15.3846px] leading-5 outline-[3px] pointer-events-auto will-change-transform md:h-[65.7778px] md:text-[14.2222px] md:leading-[18.4889px]"
      >
        <div className="text-[15.3846px] box-border caret-transparent leading-5 max-w-[375px] outline-[3px] mx-auto px-[15.3846px] md:text-[14.2222px] md:leading-[18.4889px] md:max-w-screen-xl md:px-[56.8889px]">
          <div className="text-[15.3846px] items-center box-border caret-transparent flex h-[71.1538px] justify-between leading-5 outline-[3px] md:text-[14.2222px] md:h-[65.7778px] md:leading-[18.4889px]">
            <NavLinks />
            <BrandLogo />
            <TicketButton />
          </div>
        </div>
      </div>
    </nav>
  );
};