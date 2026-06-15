import type { ComponentType } from "react";
import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Globe, CheckCircle2 } from "lucide-react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { InstagramIcon } from "@/components/icons/BrandIcons";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getProjectBySlug, type ProjectLink } from "@/lib/projects-data";

const linkIcons: Record<ProjectLink["icon"], ComponentType<{ className?: string }>> = {
  website: Globe,
  github: Github,
  playstore: FaGooglePlay,
  appstore: FaApple,
  instagram: InstagramIcon,
};

const linkStyles: Record<ProjectLink["icon"], string> = {
  website: "border-primary/20 hover:bg-primary/10 hover:border-primary/50 text-primary",
  github: "border-primary/20 hover:bg-primary/10 hover:border-primary/50 text-primary",
  playstore: "border-primary/20 hover:bg-primary/10 hover:border-primary/50 text-primary",
  appstore: "border-primary/20 hover:bg-primary/10 hover:border-primary/50 text-primary",
  instagram: "border-transparent bg-gradient-to-tr from-[#FFDC80] via-[#F77737] via-[#E1306C] to-[#833AB4] text-white hover:opacity-90",
};

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug ?? "");

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Navbar />
        <main className="flex-grow flex flex-col items-center justify-center text-center px-6 pt-32 pb-24">
          <h1 className="text-3xl font-bold font-display mb-4">Project not found</h1>
          <p className="text-muted-foreground mb-8">
            The project you're looking for doesn't exist or has been moved.
          </p>
          <Link href="/#projects">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container px-6 mx-auto max-w-4xl">
          <Link href="/#projects">
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10 cursor-pointer">
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
              <div className={`w-20 h-20 flex items-center justify-center ${project.logoBgClass || 'bg-secondary'} rounded-2xl border border-white/5 overflow-hidden shrink-0`}>
                {project.logo?.startsWith('/') ? (
                  <img src={project.logo} alt={project.name} className="w-full h-full object-contain p-2" />
                ) : (
                  <span className="font-bold text-2xl">{project.logo || <Github className="w-8 h-8" />}</span>
                )}
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold font-display mb-2">
                  {project.name.replace(/-/g, ' ')}
                </h1>
                {project.tagline && (
                  <p className="text-primary font-medium mb-3">{project.tagline}</p>
                )}
                <div className="flex flex-wrap gap-2">
                  {project.topics?.map((topic) => (
                    <span key={topic} className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground border border-white/5">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              {project.longDescription || project.description}
            </p>

            {project.highlights && project.highlights.length > 0 && (
              <div className="bg-card rounded-2xl border border-white/5 p-6 md:p-8 mb-10">
                <h2 className="text-xl font-bold font-display mb-4">Key Features</h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.techStack && project.techStack.length > 0 && (
              <div className="bg-card rounded-2xl border border-white/5 p-6 md:p-8 mb-10">
                <h2 className="text-xl font-bold font-display mb-4">Tech Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="text-sm px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-4">
              {project.links.map((link) => {
                const Icon = linkIcons[link.icon] ?? ExternalLink;
                return (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className={`gap-2 ${linkStyles[link.icon]}`}
                    >
                      <Icon className="w-5 h-5" />
                      {link.label}
                    </Button>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
