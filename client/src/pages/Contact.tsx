import { Mail, MapPin, PhoneCall, TimerReset } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";
import { PageHero } from "@/components/site/PageHero";
import { Seo } from "@/components/site/Seo";
import { SiteLayout } from "@/components/site/SiteLayout";
import { clinicDetails } from "@/components/site/site-data";

const contactItems = [
  {
    icon: MapPin,
    label: "Address",
    value: clinicDetails.address,
  },
  {
    icon: PhoneCall,
    label: "Phone",
    value: clinicDetails.phone,
    href: clinicDetails.phoneHref,
  },
  {
    icon: TimerReset,
    label: "Hours",
    value: clinicDetails.hours,
  },
  {
    icon: Mail,
    label: "Message",
    value: "Use the form below and we will get back to you soon.",
  },
];

export default function Contact() {
  return (
    <SiteLayout>
      <Seo
        title="Contact"
        path="/contact"
        description="Contact Dr Vidya's Holistic Healing Center in Pune to book a consultation and view clinic location details."
      />

      <PageHero
        eyebrow="Contact"
        title="Book a consultation or ask a question"
        description="Reach out for a consultation, share what support you are looking for, or visit the clinic in Bibwewadi, Pune."
      />

      <section className="section-shell pt-0">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div className="fade-in-section space-y-5">
            {contactItems.map(item => (
              <article key={item.label} className="surface-card flex items-start gap-4 p-5 sm:p-6 transition-all duration-300 hover:shadow-md hover:border-primary/10">
                <div className="chakra-ring flex h-12 w-12 items-center justify-center rounded-full border border-primary/15 transition-colors duration-300">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="mt-1 block text-lg font-medium text-foreground transition-colors duration-300 hover:text-primary">
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-base text-muted-foreground">{item.value}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
          <div className="fade-in-section [animation-delay:0.08s]">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="container">
          <div className="surface-card overflow-hidden p-3 shadow-lg shadow-primary/5">
            <iframe
              title="Map for Dr Vidya's Holistic Healing Center"
              src={clinicDetails.mapEmbed}
              className="h-[420px] w-full rounded-[1.6rem] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="mt-12 rounded-xl border border-primary/10 bg-gradient-to-r from-primary/5 to-primary/0 p-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Quick Response</p>
            <h3 className="mt-3 text-2xl font-semibold">We typically respond within 24 hours</h3>
            <p className="mt-2 text-muted-foreground">Your inquiry is important to us. If you prefer immediate assistance, please call or message on WhatsApp.</p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
