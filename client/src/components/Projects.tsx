import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { projects } from "@/lib/projects-data";
import { TiltCard } from "@/components/TiltCard";

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Check out my latest open source contributions and personal projects.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 7).map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link href={`/projects/${project.slug}`}>
                <TiltCard maxTilt={7} scale={1.02} glare className="h-full cursor-pointer">
                  <div className="group flex flex-col h-full bg-card rounded-2xl border border-white/5 hover:border-primary/50 transition-colors duration-300 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden">
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-4">
                        <div className={`w-12 h-12 flex items-center justify-center ${project.logoBgClass || 'bg-secondary'} rounded-xl group-hover:bg-primary/10 group-hover:text-primary transition-colors overflow-hidden`}>
                          {project.logo?.startsWith('/') ? (
                            <img src={project.logo} alt={project.name} className={`w-full h-full object-contain p-0.5 ${project.logoImgClass || ""}`} />
                          ) : (
                            <span className="font-bold text-lg">{project.logo || <Github className="w-6 h-6" />}</span>
                          )}
                        </div>
                        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </div>

                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.name.replace(/-/g, ' ')}
                      </h3>

                      <p className="text-muted-foreground text-sm mb-6 line-clamp-3 flex-grow">
                        {project.description || "No description available for this project."}
                      </p>

                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {project.topics?.slice(0, 2).map(topic => (
                            <span key={topic} className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground border border-white/5">
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
