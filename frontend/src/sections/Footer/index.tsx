import { FooterSignup } from "@/sections/Footer/components/FooterSignup";
import { FooterBrand } from "@/sections/Footer/components/FooterBrand";

export const Footer = () => {
  return (
    <footer className="section-copy bg-suvakta-50">
      <div className="section-container">
        <FooterSignup />
      </div>
      <FooterBrand />
    </footer>
  );
};
