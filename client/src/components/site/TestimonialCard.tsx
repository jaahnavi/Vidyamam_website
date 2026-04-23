import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
}

export function TestimonialCard({ quote, author }: TestimonialCardProps) {
  return (
    <figure className="surface-card relative h-full p-7 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/20">
      <Quote className="mb-6 h-8 w-8 text-primary/40 transition-colors duration-300 group-hover:text-primary/60" />
      <blockquote className="text-lg leading-8 text-foreground transition-colors duration-300">"{quote}"</blockquote>
      <figcaption className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 hover:text-primary/70">
        {author}
      </figcaption>
    </figure>
  );
}
