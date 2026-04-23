interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="section-shell overflow-hidden pt-28 sm:pt-32">
      <div className="container relative">
        <div className="soft-orb left-0 top-12 h-28 w-28 bg-[rgba(123,44,191,0.12)]" />
        <div className="soft-orb right-8 top-4 h-32 w-32 bg-[rgba(45,106,79,0.12)] [animation-delay:1.5s]" />
        <div className="surface-card fade-in-section relative overflow-hidden px-6 py-12 sm:px-10 sm:py-16 lg:px-14">
          <div className="grain-overlay absolute inset-0 opacity-20" />
          <div className="relative max-w-3xl space-y-5">
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="text-5xl font-semibold sm:text-6xl">{title}</h1>
            <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
