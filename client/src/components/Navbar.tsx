import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4 bg-background/80 backdrop-blur-md border-b border-white/5" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <div className="text-2xl font-bold font-display cursor-pointer group">
            <span className="text-primary group-hover:text-glow transition-all duration-300">{"<"}</span>
            <span className="text-foreground">Umar</span>
            <span className="text-primary group-hover:text-glow transition-all duration-300">{"/>"}</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              type="button"
              onClick={() => scrollToSection(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {link.name}
            </button>
          ))}
          <Button
            onClick={() => window.open(githubUrl, "_blank", "noopener,noreferrer")}
            variant="outline"
            className="border-primary/20 hover:bg-primary/10 hover:border-primary/50 text-primary"
          >
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-white/10 overflow-hidden"
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
              <div className="flex gap-4 pt-4 border-t border-white/10">
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
