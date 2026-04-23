import { MessageCircle } from "lucide-react";
import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { StickyMobileCTA } from "./StickyMobileCTA";
import { clinicDetails } from "./site-data";

interface SiteLayoutProps {
  children: ReactNode;
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-screen pb-24 md:pb-0">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <StickyMobileCTA />
      <a
        href={clinicDetails.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_36px_rgba(37,211,102,0.35)] transition-transform duration-300 hover:-translate-y-1"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
