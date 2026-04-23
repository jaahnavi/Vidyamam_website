import { PageHero } from "@/components/site/PageHero";
import { Seo } from "@/components/site/Seo";
import { SiteLayout } from "@/components/site/SiteLayout";
import { TestimonialCard } from "@/components/site/TestimonialCard";
import { testimonials } from "@/components/site/site-data";

export default function Testimonials() {
  return (
    <SiteLayout>
      <Seo
        title="Testimonials"
        path="/testimonials"
        description="Read testimonials shared by clients of Dr Vidya's Holistic Healing Center in Pune."
      />

      <PageHero
        eyebrow="Testimonials"
        title="Words of trust and appreciation"
        description="A few heartfelt reflections from clients who experienced Dr Vidya's healing guidance."
      />

      <section className="section-shell pt-0">
        <div className="container">
          <div className="surface-card fade-in-section mb-10 p-8 text-center sm:p-12">
            <p className="mx-auto max-w-3xl text-2xl font-medium leading-10 text-foreground sm:text-3xl">
              “Vidya's energy is soothing, strong and healing in nature.”
            </p>
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">Saritha Nayak</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {testimonials.map(item => (
              <div key={item.author} className="fade-in-section">
                <TestimonialCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
