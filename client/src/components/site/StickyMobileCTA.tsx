import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface StickyMobileCTAProps {
  onClick?: () => void;
}

export function StickyMobileCTA({ onClick }: StickyMobileCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the sticky CTA after scrolling down 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    const contactSection = document.getElementById("contact-form");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    onClick?.();
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transition-all duration-300 md:hidden ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="border-t border-primary/10 bg-white/95 backdrop-blur-sm p-3 shadow-2xl shadow-black/10">
        <Button
          onClick={handleClick}
          className="w-full rounded-full bg-primary py-5 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90"
        >
          Book Your Consultation
        </Button>
      </div>
    </div>
  );
}
