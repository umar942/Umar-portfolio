import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TiltCard } from "@/components/TiltCard";

const roles = [
  "Full-Stack MERN Developer",
  "React & Next.js Engineer",
  "Node.js API Builder",
  "Web3 & AI Integrator",
];

const codeStack: [string, string[]][] = [
  ["frontend", ["React.js", "Next.js", "React Native"]],
  ["backend", ["Node.js", "Express.js", "GraphQL"]],
  ["database", ["MongoDB", "Redis"]],
  ["cloud", ["AWS", "Docker"]],
  ["specialties", ["AI", "Web3", "Socket.io"]],
];

function RotatingRole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % roles.length), 2600);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className="relative inline-flex h-[1.4em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-foreground font-semibold whitespace-nowrap"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid" />
        {/* Lighter background on mobile for better performance */}
        <div className="hidden sm:block absolute -top-20 left-[5%] w-[28rem] h-[28rem] bg-primary/25 rounded-full blur-[110px] animate-aurora" />
        <div className="hidden sm:block absolute bottom-0 right-[5%] w-[32rem] h-[32rem] bg-violet-600/15 rounded-full blur-[120px] animate-aurora [animation-delay:-6s]" />
        <div className="hidden sm:block absolute top-1/3 left-1/2 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] animate-aurora [animation-delay:-12s]" />
      </div>

      <div className="container relative z-10 px-6 mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for hire
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 leading-tight">
            Hi, I'm <span className="text-gradient">Umar Ali</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-2 max-w-lg leading-relaxed">
            <RotatingRole />
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
            Crafting robust, scalable web & mobile products from database to interface.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg h-14 px-8 rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-1"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg h-14 px-8 rounded-full border-foreground/10 hover:bg-foreground/5 transition-all"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
          </div>

          <div className="flex flex-col items-start gap-4 mt-12 sm:flex-row sm:items-center sm:gap-6">
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/umar942"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/umar-ali-6501a2353"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="/UMAR-ALI-Resume.pdf"
                download="UMAR-ALI-Resume.pdf"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
           
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <TiltCard maxTilt={10} scale={1.03} glare className="z-10">
            <div className="bg-card/50 backdrop-blur-xl border border-foreground/10 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-2 mb-4 border-b border-foreground/10 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-xs text-muted-foreground font-mono">developer.tsx</span>
              </div>
              <div className="font-mono text-[13px] leading-relaxed">
                <div className="text-pink-400">const <span className="text-blue-400">developer</span> = <span className="text-yellow-400">{"{"}</span></div>
                <div className="pl-4 text-foreground">name: <span className="text-green-400">"Umar Ali"</span>,</div>
                <div className="pl-4 text-foreground">role: <span className="text-green-400">"Full-Stack Developer"</span>,</div>
                {/* Arrays render on one line; long ones wrap with a hanging indent */}
                {codeStack.map(([key, values]) => (
                  <div key={key} className="pl-8 -indent-4 text-foreground">
                    {key}: <span className="text-yellow-400">[</span>
                    <span className="text-green-400">{values.map((v) => `"${v}"`).join(", ")}</span>
                    <span className="text-yellow-400">]</span>,
                  </div>
                ))}
                <div className="text-yellow-400">
                  {"};"}
                  <span className="inline-block w-2 h-4 ml-1 align-middle bg-primary animate-pulse" />
                </div>
              </div>
            </div>
          </TiltCard>
          
          {/* Decorative code symbols floating behind */}
          <Terminal className="absolute -top-10 -right-10 w-24 h-24 text-primary/10 rotate-12" />
        </motion.div>
      </div>

      <motion.div 
        className="hidden sm:block absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
}
