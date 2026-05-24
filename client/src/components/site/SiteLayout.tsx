import { Instagram, MessageCircle } from "lucide-react";
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
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
        <a
          href={clinicDetails.instagramHref}
          target="_blank"
          rel="noreferrer"
          aria-label="Follow on Instagram"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white shadow-[0_8px_24px_rgba(131,58,180,0.4)] transition-transform duration-300 hover:-translate-y-1"
        >
          <Instagram className="h-5 w-5" />
        </a>
        <a
          href={clinicDetails.whatsappHref}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.4)] transition-transform duration-300 hover:-translate-y-1"
        >
          <MessageCircle className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}
