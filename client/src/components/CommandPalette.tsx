import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { useTheme } from "next-themes";
import {
  ArrowRight,
  Copy,
  Download,
  FolderGit2,
  Github,
  Linkedin,
  MessageCircle,
  Moon,
  Sun,
} from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { projects } from "@/lib/projects-data";

const sections = [
  { name: "About", id: "about" },
  { name: "At a glance", id: "overview" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

const email = "umarali40451@gmail.com";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useLocation();
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-command-palette", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-command-palette", onOpen);
    };
  }, []);

  const run = (fn: () => void) => {
    setOpen(false);
    fn();
  };

  const goToSection = (id: string) => {
    const scroll = () => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    if (location !== "/") {
      setLocation("/");
      window.setTimeout(scroll, 50);
      return;
    }
    scroll();
  };

  const isDark = theme === "dark";

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <DialogTitle className="sr-only">Command palette</DialogTitle>
      <CommandInput placeholder="Type a command or search…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Navigate">
          {sections.map((s) => (
            <CommandItem key={s.id} onSelect={() => run(() => goToSection(s.id))}>
              <ArrowRight className="mr-2 h-4 w-4" />
              {s.name}
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Projects">
          {projects.map((p) => (
            <CommandItem key={p.slug} value={`${p.name} ${p.tagline}`} onSelect={() => run(() => setLocation(`/projects/${p.slug}`))}>
              <FolderGit2 className="mr-2 h-4 w-4" />
              {p.name}
              <span className="ml-2 text-xs text-muted-foreground truncate">{p.tagline}</span>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Actions">
          <CommandItem
            onSelect={() =>
              run(() => {
                navigator.clipboard?.writeText(email);
                toast({ title: "Email copied", description: email });
              })
            }
          >
            <Copy className="mr-2 h-4 w-4" />
            Copy email address
          </CommandItem>
          <CommandItem onSelect={() => run(() => window.open("/UMAR-ALI-Resume.pdf", "_blank"))}>
            <Download className="mr-2 h-4 w-4" />
            Open resume
          </CommandItem>
          <CommandItem onSelect={() => run(() => setTheme(isDark ? "light" : "dark"))}>
            {isDark ? <Sun className="mr-2 h-4 w-4" /> : <Moon className="mr-2 h-4 w-4" />}
            Switch to {isDark ? "light" : "dark"} mode
            <CommandShortcut>Theme</CommandShortcut>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Links">
          <CommandItem onSelect={() => run(() => window.open("https://github.com/umar942", "_blank", "noopener,noreferrer"))}>
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </CommandItem>
          <CommandItem onSelect={() => run(() => window.open("https://www.linkedin.com/in/umar-ali-6501a2353", "_blank", "noopener,noreferrer"))}>
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </CommandItem>
          <CommandItem onSelect={() => run(() => window.open("https://wa.me/923101032419", "_blank", "noopener,noreferrer"))}>
            <MessageCircle className="mr-2 h-4 w-4" />
            WhatsApp
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
