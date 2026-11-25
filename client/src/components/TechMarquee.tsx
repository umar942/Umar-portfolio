import { Code2 } from "lucide-react";
import { skillMeta } from "@/components/Skills";

// Hand-picked subset of the stack -- the whole list makes the strip feel noisy.
const marqueeSkills = [
  "React", "Next.js", "TypeScript", "NodeJS", "Express.js", "MongoDB", "GraphQL",
  "Socket.io", "Redux", "Tailwind CSS", "AWS", "Firebase", "Vercel", "Figma",
];

function MarqueeRow() {
  return (
    <div className="flex shrink-0 items-center gap-10 pr-10 animate-marquee" aria-hidden>
      {marqueeSkills.map((skill) => {
        const meta = skillMeta[skill];
        const Icon = meta?.icon ?? Code2;
        return (
          <span key={skill} className="flex items-center gap-2.5 text-lg font-display font-semibold text-muted-foreground whitespace-nowrap">
            <Icon className="w-6 h-6" style={meta?.color ? { color: meta.color } : undefined} />
            {skill}
          </span>
        );
      })}
    </div>
  );
}

export function TechMarquee() {
  return (
    <section aria-label="Tech stack" className="relative py-8 border-y border-foreground/5 bg-secondary/20">
      <div className="flex overflow-hidden marquee-mask group">
        <MarqueeRow />
        <MarqueeRow />
      </div>
    </section>
  );
}
