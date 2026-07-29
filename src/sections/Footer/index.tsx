import { FooterSignup } from "@/sections/Footer/components/FooterSignup";
import { FooterBrand } from "@/sections/Footer/components/FooterBrand";

export const Footer = () => {
  return (
    <footer className="text-[15.3846px] bg-orange-100 box-border caret-transparent leading-5 outline-[3px] md:text-[14.2222px] md:leading-[18.4889px]">
      <div className="text-[15.3846px] box-border caret-transparent leading-5 max-w-[375px] outline-[3px] mx-auto px-[15.3846px] md:text-[14.2222px] md:leading-[18.4889px] md:max-w-screen-xl md:px-[56.8889px]">
        <FooterSignup />
      </div>
      <FooterBrand />
    </footer>
  );
};