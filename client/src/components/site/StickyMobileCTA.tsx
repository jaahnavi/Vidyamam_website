import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const cinzel = { fontFamily: "'Marcellus', serif" } as const;

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
         <button
            onClick={() => {
              const el = document.getElementById("contact-form");
              if (el) el.scrollIntoView({ behavior: "smooth" });
              else window.location.href = "/contact";
            }}
            style={{ ...cinzel, fontSize: "14px", letterSpacing: "0.18em", fontWeight:800 }}
            className="rounded-[5px] bg-[#A58D66] px-6 py-4 w-full uppercase text-[#041F2B] shadow-[0_0_24px_rgba(165,141,102,0.28)] transition-all duration-250 hover:bg-[#C4A96E] hover:shadow-[0_0_36px_rgba(165,141,102,0.45)]"
          >
            Book Your Consultation
          </button>
      </div>
    </div>
  );
}
