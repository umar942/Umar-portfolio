import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#about");
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Highlight the nav link for whichever section is crossing the middle of the viewport.
  useEffect(() => {
    if (location !== "/") return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ["about", "skills", "projects", "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [location]);

  const githubUrl = "https://github.com/umar942";
  const linkedinUrl = "https://www.linkedin.com/in/umar-ali-6501a2353";
  const email = "umarali40451@gmail.com";

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (id: string) => {
    const scroll = () => {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    setIsOpen(false);

    if (location !== "/") {
      setLocation("/");
      window.setTimeout(scroll, 50);
      return;
    }

    scroll();
  };

  return (
    <nav
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "top-3" : "top-0 py-2"
      }`}
    >
      <div
        className={`mx-auto flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "max-w-5xl mx-3 md:mx-auto px-5 py-3 rounded-full bg-background/70 backdrop-blur-xl border border-foreground/10 shadow-lg shadow-black/5"
            : "container px-6 py-4"
        }`}
      >
        <Link href="/">
          <div className="text-2xl font-bold font-display cursor-pointer group">
            <span className="text-primary group-hover:text-glow transition-all duration-300">{"<"}</span>
            <span className="text-foreground">Umar</span>
            <span className="text-primary group-hover:text-glow transition-all duration-300">{"/>"}</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-1 p-1 rounded-full bg-secondary/50 border border-foreground/5">
            {navLinks.map((link) => {
              const isActive = location === "/" && activeSection === link.href;
              return (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => scrollToSection(link.href)}
                  className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 ${
                    isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{link.name}</span>
                </button>
              );
            })}
          </div>
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event("open-command-palette"))}
            className="hidden lg:inline-flex items-center gap-2 h-9 pl-3 pr-1.5 rounded-full border border-foreground/10 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
            aria-label="Open command palette"
          >
            <Search className="w-4 h-4" />
            Search
            <span className="flex gap-0.5"><kbd className="kbd">Ctrl</kbd><kbd className="kbd">K</kbd></span>
          </button>
          <Button
            onClick={() => window.open(githubUrl, "_blank", "noopener,noreferrer")}
            variant="outline"
            size="icon"
            aria-label="GitHub profile"
            className="rounded-full border-primary/20 hover:bg-primary/10 hover:border-primary/50 text-primary"
          >
            <Github className="w-4 h-4" />
          </Button>
          <ThemeToggle />
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-1">
          <ThemeToggle />
          <button
            className="text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mx-3 mt-2 rounded-2xl bg-background/95 backdrop-blur-xl border border-foreground/10 shadow-xl overflow-hidden"
          >
            <div className="container px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => scrollToSection(link.href)}
                  className="text-lg font-medium text-left text-muted-foreground hover:text-primary"
                >
                  {link.name}
                </button>
              ))}
              <div className="flex gap-4 pt-4 border-t border-foreground/10">
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-secondary text-primary hover:bg-primary hover:text-background transition-colors" aria-label="GitHub profile">
                  <Github className="w-5 h-5" />
                </a>
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-secondary text-primary hover:bg-primary hover:text-background transition-colors" aria-label="LinkedIn profile">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={`mailto:${email}`} className="p-2 rounded-full bg-secondary text-primary hover:bg-primary hover:text-background transition-colors" aria-label="Send email">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
