import { useEffect, useRef } from "react";
import { animate, motion, useInView } from "framer-motion";
import {
  Bot,
  Blocks,
  Code2,
  Command,
  CreditCard,
  Layers,
  Monitor,
  Radio,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";
import { Link } from "wouter";
import { projects } from "@/lib/projects-data";
import { skillMeta, skillsData } from "@/components/Skills";
import { SpotlightCard } from "@/components/SpotlightCard";

const webCount = projects.filter((p) => p.category === "web").length;
const appCount = projects.filter((p) => p.category === "app").length;
const webShare = Math.round((webCount / projects.length) * 100);
// Round down to a clean "N+" -- the raw list has a few near-duplicates (e.g. "Next.js" / "Next JS").
const skillCount = Math.floor(new Set(skillsData.flatMap((c) => c.skills)).size / 5) * 5;
const categoryCount = skillsData.length;

const flow = [
  { skill: "MongoDB", label: "MongoDB", role: "Data" },
  { skill: "Express.js", label: "Express", role: "API" },
  { skill: "React", label: "React", role: "UI" },
  { skill: "NodeJS", label: "Node.js", role: "Runtime" },
];

const specialties = [
  { name: "AI", icon: Bot, tint: "text-emerald-700 dark:text-emerald-400 bg-emerald-400/10 border-emerald-400/20" },
  { name: "Web3", icon: Blocks, tint: "text-violet-700 dark:text-violet-400 bg-violet-400/10 border-violet-400/20" },
  { name: "Real-time", icon: Radio, tint: "text-sky-700 dark:text-sky-400 bg-sky-400/10 border-sky-400/20" },
  { name: "Payments", icon: CreditCard, tint: "text-amber-700 dark:text-amber-400 bg-amber-400/10 border-amber-400/20" },
];

const tile =
  "h-full rounded-3xl border border-foreground/10 bg-card/60 backdrop-blur-sm p-6 overflow-hidden transition-colors duration-300 hover:border-primary/40";

// Counts up from 0 the first time the number scrolls into view.
function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, to, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = `${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, to, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

function StackPipeline() {
  return (
    <div className="relative">
      {/* Connector track with a travelling pulse */}
      <div className="absolute left-7 right-7 top-7 h-px bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10 overflow-hidden">
        <span className="absolute inset-y-0 w-1/4 bg-gradient-to-r from-transparent via-primary to-transparent animate-pipeline" />
      </div>
      <div className="relative grid grid-cols-4 gap-2">
        {flow.map((node, i) => {
          const meta = skillMeta[node.skill];
          const Icon = meta?.icon ?? Code2;
          return (
            <motion.div
              key={node.skill}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.12 }}
              className="flex flex-col items-center text-center group/node"
            >
              <div className="w-14 h-14 rounded-2xl bg-background border border-foreground/10 flex items-center justify-center shadow-lg shadow-black/5 transition-all duration-300 group-hover/node:-translate-y-1 group-hover/node:border-primary/40 group-hover/node:shadow-primary/20">
                <Icon className="w-7 h-7" style={meta?.color ? { color: meta.color } : undefined} />
              </div>
              <span className="mt-3 text-sm font-semibold">{node.label}</span>
              <span className="text-[11px] uppercase tracking-wider text-muted-foreground">{node.role}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export function AtAGlance() {
  const reveal = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.5, delay },
  });

  return (
    <section id="overview" className="py-24 relative">
      <div className="absolute inset-x-0 top-1/3 h-72 bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="container relative px-6 mx-auto">
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="section-eyebrow">At a glance</p>
            <h2 className="text-3xl md:text-4xl font-bold font-display">
              Shipping products <span className="text-gradient">end to end</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm md:text-right">
            One developer across the whole stack, from data model to deployed interface.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[200px] gap-4">
          {/* MERN pipeline -- hero tile */}
          <motion.div {...reveal(0)} className="md:col-span-2 md:row-span-2">
            <SpotlightCard className={`${tile} bg-gradient-to-br from-primary/10 via-card/60 to-violet-500/10`}>
              <div className="flex h-full flex-col justify-between gap-10">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 mb-5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold">
                    <Layers className="w-3.5 h-3.5" />
                    MERN Stack
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">Full-stack, one language</h3>
                  <p className="text-muted-foreground max-w-md">
                    From database schema to pixel-perfect UI, I own the whole JavaScript stack, so features ship without hand-offs.
                  </p>
                </div>
                <StackPipeline />
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Featured products with logo stack */}
          <motion.div {...reveal(0.08)}>
            <Link href="/" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
              <SpotlightCard className={`${tile} cursor-pointer group`}>
                <div className="flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <Zap className="w-5 h-5 text-primary" />
                    <div className="flex -space-x-2">
                      {projects.slice(0, 5).map((p) => (
                        <div
                          key={p.slug}
                          title={p.name}
                          className={`w-8 h-8 rounded-full ring-2 ring-card overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 first:group-hover:translate-x-0 ${p.logoBgClass || "bg-secondary"}`}
                        >
                          <img src={p.logo} alt="" className={`w-full h-full object-contain p-1 ${p.logoImgClass || ""}`} />
                        </div>
                      ))}
                      <div className="w-8 h-8 rounded-full ring-2 ring-card bg-primary/15 text-primary text-[11px] font-bold flex items-center justify-center">
                        +{projects.length - 5}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-5xl font-display font-bold text-gradient">
                      <CountUp to={projects.length} />
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">featured products</p>
                  </div>
                </div>
              </SpotlightCard>
            </Link>
          </motion.div>

          {/* Technologies */}
          <motion.div {...reveal(0.16)}>
            <SpotlightCard className={tile}>
              <div className="flex h-full flex-col justify-between">
                <div className="flex items-center justify-between">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span className="text-[11px] uppercase tracking-wider text-muted-foreground">{categoryCount} domains</span>
                </div>
                <div>
                  <div className="text-5xl font-display font-bold text-gradient">
                    <CountUp to={skillCount} suffix="+" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">technologies in daily use</p>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Web & Mobile split */}
          <motion.div {...reveal(0.24)}>
            <SpotlightCard className={tile}>
              <div className="flex h-full flex-col justify-between">
                <div className="flex items-center gap-2 text-primary">
                  <Monitor className="w-5 h-5" />
                  <span className="text-muted-foreground">+</span>
                  <Smartphone className="w-5 h-5 text-violet-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-3">Web & Mobile</h3>
                  <div className="flex h-2 rounded-full overflow-hidden bg-secondary">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${webShare}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                      className="bg-primary"
                    />
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${100 - webShare}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                      className="bg-violet-500"
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    <span><span className="font-semibold text-foreground">{webCount}</span> web platforms</span>
                    <span><span className="font-semibold text-foreground">{appCount}</span> mobile apps</span>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Specialties */}
          <motion.div {...reveal(0.32)}>
            <SpotlightCard className={tile}>
              <div className="flex h-full flex-col justify-between gap-4">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Specialties</p>
                <div className="grid grid-cols-2 gap-2">
                  {specialties.map(({ name, icon: Icon, tint }) => (
                    <span
                      key={name}
                      className={`inline-flex items-center gap-1.5 px-2 py-2 rounded-xl text-xs lg:text-sm whitespace-nowrap font-medium border transition-transform duration-200 hover:-translate-y-0.5 ${tint}`}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Command palette hint -- wide tile */}
          <motion.div {...reveal(0.4)} className="md:col-span-4 md:h-[120px]">
            <SpotlightCard className={`${tile} flex items-center`}>
              <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                    <Command className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold">Navigate like a developer</h3>
                    <p className="text-sm text-muted-foreground">Jump to any section, project or contact option from the keyboard.</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => window.dispatchEvent(new Event("open-command-palette"))}
                  className="inline-flex items-center gap-2 self-start sm:self-auto px-4 py-2 rounded-full border border-foreground/10 hover:border-primary/40 hover:text-primary transition-colors text-sm"
                >
                  Press <kbd className="kbd">Ctrl</kbd><kbd className="kbd">K</kbd>
                </button>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
