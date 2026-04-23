import { BadgeCheck, Flower2, ScrollText } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SacredDivider } from "@/components/site/SacredDivider";
import { Seo } from "@/components/site/Seo";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CertificationBadge } from "@/components/site/CertificationBadge";
import { TrustSignal } from "@/components/site/TrustSignal";
import { certifications, trustSignals } from "@/components/site/site-data";

const aboutImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663585662648/ErWs2ocR65P7dstuQdjKqk/dr-vidya-about-iaGYw3775JGArbT7yMbqBc.webp";

export default function About() {
  return (
    <SiteLayout>
      <Seo
        title="About"
        path="/about"
        description="Learn about Dr Vidya, her healing philosophy, and the calm, professional approach at Dr Vidya's Holistic Healing Center in Pune."
      />

      <PageHero
        eyebrow="About Dr Vidya"
        title="Healing with presence, clarity, and compassion"
        description="Dr Vidya's approach is rooted in calm attention, holistic awareness, and the belief that emotional ease can grow through thoughtful healing support."
      />

      <section className="section-shell pt-0">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
          <div className="surface-card fade-in-section overflow-hidden p-3">
            <img
              src={aboutImage}
              alt="Portrait of Dr Vidya in a calm healing environment"
              className="h-full min-h-[420px] w-full rounded-[1.5rem] object-cover"
            />
          </div>
          <div className="fade-in-section space-y-6 [animation-delay:0.1s]">
            <span className="eyebrow">Bio Placeholder</span>
            <h2 className="section-title">A grounded and reassuring presence for people seeking balance</h2>
            <p className="text-lg text-muted-foreground">
              Dr Vidya offers a healing environment that feels both serene and professional. Her practice is centered on
              listening carefully, understanding emotional patterns with sensitivity, and guiding each person toward a more stable inner rhythm.
            </p>
            <p className="text-base text-muted-foreground">
              This biography section is intentionally kept flexible so her full professional story, healing journey, and client-centered values can be added later without changing the design structure.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <article className="surface-card p-5 transition-all duration-300 hover:shadow-md hover:border-primary/10">
                <Flower2 className="h-6 w-6 text-primary" />
                <h3 className="mt-4 text-2xl font-semibold">Calm Presence</h3>
                <p className="mt-2 text-sm text-muted-foreground">A soothing environment that supports ease and openness.</p>
              </article>
              <article className="surface-card p-5 transition-all duration-300 hover:shadow-md hover:border-primary/10">
                <BadgeCheck className="h-6 w-6 text-[var(--chakra-green)]" />
                <h3 className="mt-4 text-2xl font-semibold">Professional Care</h3>
                <p className="mt-2 text-sm text-muted-foreground">Support delivered with clarity, respect, and integrity.</p>
              </article>
              <article className="surface-card p-5 transition-all duration-300 hover:shadow-md hover:border-primary/10">
                <ScrollText className="h-6 w-6 text-[var(--chakra-yellow)]" />
                <h3 className="mt-4 text-2xl font-semibold">Holistic Guidance</h3>
                <p className="mt-2 text-sm text-muted-foreground">A steady approach that sees emotional wellbeing as interconnected.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <SacredDivider />

      <section className="section-shell pt-0">
        <div className="container grid gap-8 lg:grid-cols-2">
          <article className="surface-card fade-in-section p-8 sm:p-10">
            <span className="eyebrow">Certifications</span>
            <h2 className="mt-5 text-4xl font-semibold">Training and credentials</h2>
            <div className="mt-6 space-y-3">
              {certifications.map(item => (
                <CertificationBadge key={item.title} {...item} />
              ))}
            </div>
          </article>

          <article className="surface-card fade-in-section p-8 sm:p-10 [animation-delay:0.08s]">
            <span className="eyebrow">Healing Philosophy</span>
            <h2 className="mt-5 text-4xl font-semibold">A philosophy rooted in balance rather than pressure</h2>
            <p className="mt-6 text-muted-foreground">
              Healing is approached as a process of restoring steadiness, not forcing change. The clinic's philosophy is to create enough calm,
              trust, and supportive attention for the body and mind to reconnect with a more balanced state.
            </p>
            <p className="mt-4 text-muted-foreground">
              This approach values compassion, patience, and clarity. It avoids dramatic language and instead focuses on what is practical,
              reassuring, and helpful for people who simply want to feel more settled within themselves.
            </p>
          </article>
        </div>
      </section>

      <section className="section-shell bg-white/50">
        <div className="container">
          <h2 className="mb-12 text-center text-4xl font-semibold">Why clients trust Dr Vidya</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {trustSignals.map(signal => (
              <div key={signal.label} className="fade-in-section">
                <TrustSignal {...signal} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
