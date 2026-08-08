import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { KineticMobileMenu } from "@/components/ui/sterling-gate-kinetic-navigation";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  // Lock page scroll while the menu is open
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <div className="flex items-center md:hidden">
      <button
        type="button"
        className="touch-target relative z-[410] rounded-full border border-suvakta-900 bg-suvakta-50 text-suvakta-900 shadow-[rgba(0,0,0,0.15)_0px_3px_0px_0px]"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
      </button>

      <KineticMobileMenu open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
