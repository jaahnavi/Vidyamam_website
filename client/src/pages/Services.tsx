import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { SacredDivider } from "@/components/site/SacredDivider";
import { Seo } from "@/components/site/Seo";
import { SiteLayout } from "@/components/site/SiteLayout";

const servicesImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663585662648/ErWs2ocR65P7dstuQdjKqk/dr-vidya-services-HrEm9sV3fpnR2pj76YzsBC.webp";

const services = [
  {
    title: "Pranic Healing Sessions",
    copy: "A calm, guided healing session intended to help you feel more settled, balanced, and emotionally lighter. The process is explained in simple language so you always know what to expect.",
    accent: "#7B2CBF",
  },
  {
    title: "Chakra Balancing",
    copy: "Focused support for restoring harmony across the body's energy centers. This service is often chosen by people who feel mentally scattered, emotionally heavy, or out of rhythm in everyday life.",
    accent: "#2D6A4F",
  },
  {
    title: "Stress & Anxiety Healing",
    copy: "A gentle healing experience for people navigating tension, restlessness, worry, or emotional overload. Sessions aim to create a deeper sense of calm, steadiness, and inner quiet.",
    accent: "#E76F51",
  },
];

export default function Services() {
  return (
    <SiteLayout>
      <Seo
        title="Services"
        path="/services"
        description="Explore Pranic Healing sessions, chakra balancing, and stress and anxiety healing at Vidya's Holistic Healing."
      />

      <PageHero
        eyebrow="Services"
        title="Simple, supportive healing services"
        description="Each service is designed to feel clear, calming, and accessible, especially for people who want gentle support without technical language or complicated processes."
      />

      <section className="section-shell pt-0">
        <div className="container grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="fade-in-section grid gap-5">
            {services.map(service => (
              <article key={service.title} className="surface-card overflow-hidden p-7 sm:p-8">
                <div className="mb-5 h-1.5 w-20 rounded-full" style={{ backgroundColor: service.accent }} />
                <h2 className="text-3xl font-semibold">{service.title}</h2>
                <p className="mt-4 text-muted-foreground">{service.copy}</p>
              </article>
            ))}
          </div>
          <div className="fade-in-section [animation-delay:0.08s]">
            <div className="surface-card overflow-hidden p-4">
              <img
                src={servicesImage}
                alt="Abstract geometric wellness artwork representing chakra-inspired healing services"
                className="h-[520px] w-full rounded-[1.6rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <SacredDivider />

      <section className="section-shell pt-0">
        <div className="container">
          <article className="surface-card fade-in-section grid gap-8 p-8 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="eyebrow">Next Step</span>
              <h2 className="mt-5 text-4xl font-semibold">Not sure which service is right for you?</h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                A consultation can help you understand which healing approach may feel most supportive for your current concerns, whether that is emotional stress, anxiety, or a general need for balance.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <Button asChild className="rounded-full bg-primary px-7 text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">Book a Consultation</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-primary/20 bg-white/70 px-7 text-foreground hover:bg-white">
                <Link href="/about">Learn About Vidya</Link>
              </Button>
            </div>
          </article>
        </div>
      </section>
    </SiteLayout>
  );
}
