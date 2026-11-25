import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { TechMarquee } from "@/components/TechMarquee";
import { AtAGlance } from "@/components/AtAGlance";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20">
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <AtAGlance />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
