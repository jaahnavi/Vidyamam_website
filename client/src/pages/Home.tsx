import { Button } from "@/components/ui/button";
import { HeartHandshake, Leaf, Sparkles, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { ChakraCard } from "@/components/site/ChakraCard";
import { SacredDivider } from "@/components/site/SacredDivider";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Seo } from "@/components/site/Seo";
import { SiteLayout } from "@/components/site/SiteLayout";
import { TestimonialCard } from "@/components/site/TestimonialCard";
import { TrustSignal } from "@/components/site/TrustSignal";
import { chakras, testimonials, whyChooseUs, trustSignals } from "@/components/site/site-data";
import ChakraVisualization from '@/components/site/ChakraVisualization';

const heroImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663585662648/ErWs2ocR65P7dstuQdjKqk/dr-vidya-hero-48qiHYvgTfdpqamVWLszJr.webp";

const introPoints = [
  {
    icon: HeartHandshake,
    title: "Supportive care",
    copy: "Every session is approached with empathy, patience, and personal attention.",
  },
  {
    icon: Leaf,
    title: "Calm environment",
    copy: "Our space is designed to feel grounding, quiet, and easy to settle into.",
  },
  {
    icon: ShieldCheck,
    title: "Professional guidance",
    copy: "You receive clear, gentle explanations without overwhelming terminology.",
  },
];

export default function Home() {
  return (
    <SiteLayout>
      <Seo
        title="Home"
        path="/"
        description="Discover Vidya's Holistic Healing Center in  for Pranic Healing, chakra balancing, and gentle support for stress and anxiety."
      />

      <section className="section-shell overflow-hidden pt-28 sm:pt-32">
        <div className="container grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="fade-in-section relative space-y-8">
            <span className="eyebrow"> Wellness Clinic</span>
            <div className="space-y-5">
              <h1 className="max-w-3xl text-5xl font-semibold leading-[0.95] sm:text-6xl lg:text-7xl">
                Vidya&apos;s Holistic Healing
              </h1>
              <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
                Guiding you toward balance, healing, and inner peace through Pranic Healing.
              </p>
            </div>
            <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
              Holistic healing can offer a quiet, supportive path for people navigating emotional strain,
              anxious thoughts, fatigue, and the need to feel more centered in daily life.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                onClick={() => {
                  const contactForm = document.getElementById("contact-form");
                  if (contactForm) {
                    contactForm.scrollIntoView({ behavior: "smooth" });
                  } else {
                    window.location.href = "/contact";
                  }
                }}
                className="rounded-full bg-primary px-8 py-6 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
              >
                Book a Consultation
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-primary/20 bg-white/70 px-8 py-6 text-base font-semibold text-foreground transition-all duration-300 hover:border-primary/40 hover:bg-white hover:shadow-md">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 pt-4">
              {trustSignals.map(signal => (
                <div key={signal.label} className="fade-in-section">
                  <TrustSignal {...signal} />
                </div>
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-3 pt-8">
              {introPoints.map(point => (
                <article key={point.title} className="surface-card p-5 transition-all duration-300 hover:shadow-md hover:border-primary/10">
                  <point.icon className="h-6 w-6 text-primary" />
                  <h2 className="mt-4 text-2xl font-semibold">{point.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{point.copy}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="fade-in-section relative [animation-delay:0.12s]">
            {/* was: bg-[rgba(58,12,163,0.12)] */}
            <div className="soft-orb -left-8 top-16 h-28 w-28 bg-[rgba(64,126,140,0.12)]" />
            {/* was: bg-[rgba(244,162,97,0.14)] */}
            <div className="soft-orb -right-4 bottom-12 h-36 w-36 bg-[rgba(165,141,102,0.14)] [animation-delay:1.1s]" />
            <div className="surface-card relative overflow-hidden rounded-[2rem] p-3">
              <div className="grain-overlay absolute inset-0 opacity-20" />
              <img
                src={heroImage}
                alt="Calm consultation setting at Vidya's Holistic Healing Center"
                className="relative h-[520px] w-full rounded-[1.6rem] object-cover"
              />
              <div className="absolute inset-x-8 bottom-8 rounded-[1.5rem] border border-white/70 bg-white/78 p-5 shadow-lg backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="chakra-ring flex h-12 w-12 items-center justify-center rounded-full border border-primary/15">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">Personal Healing Support</p>
                    <p className="text-lg font-semibold text-foreground">A calm and professional space for balance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SacredDivider />

      <section className="section-shell pt-0">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div className="fade-in-section">
            <SectionHeading
              eyebrow="Gentle Introduction"
              title="What is Pranic Healing?"
              description="Pranic Healing is a gentle, energy-based healing approach that aims to support the body's natural ability to regain balance and calm. It is often experienced as a quiet complement to emotional wellness practices, especially when stress and anxiety feel overwhelming."
            />
          </div>
          <div className="fade-in-section grid gap-5 sm:grid-cols-2 [animation-delay:0.1s]">
            <article className="surface-card p-6">
              <h3 className="text-2xl font-semibold">Non-invasive support</h3>
              <p className="mt-3 text-muted-foreground">
                Sessions are designed to feel gentle and supportive, without physical strain or complicated processes.
              </p>
            </article>
            <article className="surface-card p-6">
              <h3 className="text-2xl font-semibold">Clarity for the mind</h3>
              <p className="mt-3 text-muted-foreground">
                Many people seek Pranic Healing when they want emotional steadiness, calm thinking, and inner quiet.
              </p>
            </article>
            <article className="surface-card p-6 sm:col-span-2">
              <h3 className="text-2xl font-semibold">A holistic approach to anxiety support</h3>
              <p className="mt-3 text-muted-foreground">
                The focus is not only on symptoms, but also on helping you feel grounded, emotionally supported,
                and more connected to your natural sense of balance.
              </p>
            </article>
          </div>
        </div>
      </section>


      <ChakraVisualization />

      <section className="section-shell">
        <div className="container grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <div className="fade-in-section">
            <SectionHeading
              eyebrow="Why Patients Choose Us"
              title="A space that feels calm, credible, and supportive"
              description="The clinic is designed to feel welcoming and centered, with care that respects both emotional wellbeing and the need for practical clarity."
            />
            <Button asChild className="rounded-full bg-primary px-7 text-primary-foreground hover:bg-primary/90">
              <Link href="/about">Meet Vidya</Link>
            </Button>
          </div>
          <div className="grid gap-4">
            {whyChooseUs.map(reason => (
              <article key={reason} className="surface-card fade-in-section flex items-start gap-4 p-5 transition-all duration-300 hover:shadow-md hover:border-primary/10">
                <div className="mt-1 h-3 w-3 rounded-full bg-primary flex-shrink-0" />
                <p className="text-base text-muted-foreground">{reason}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-white/55">
        <div className="container">
          <SectionHeading
            eyebrow="Client Words"
            title="Kind feedback from people we have supported"
            description="A few reflections from clients who experienced Vidya's healing guidance and presence."
            align="center"
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {testimonials.map(item => (
              <div key={item.author} className="fade-in-section">
                <TestimonialCard {...item} />
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Button asChild size="lg" className="rounded-full bg-primary px-8 py-6 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30">
              <Link href="/contact">Ready to Begin Your Healing Journey?</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
