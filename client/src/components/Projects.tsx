import { motion } from "framer-motion";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";
import { useGithubRepos } from "@/hooks/use-github";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export function Projects() {
  const { data: repos, isLoading, error } = useGithubRepos("umar942");

  // Manual projects from user provided image
  const manualProjects = [
    {
      id: 101,
      name: "Syssel",
      description: "Syssel is a digital marketplace focused on structured listings and information hubs. It helps users discover, compare, and understand services through a clean and intuitive interface.",
      html_url: "https://www.sysselmarket.com/infohub",
      topics: ["Marketplace", "React", "Node.js"],
      stargazers_count: null,
      language: "TypeScript",
      logo: "/images/syssel.png"
    },
    {
      id: 102,
      name: "Taskbound",
      description: "TaskBound is a crypto reward platform where users complete campaigns and earn real crypto rewards like USDT. It connects wallets, tracks tasks, and handles complex reward distributions.",
      html_url: "https://taskbound.io/",
      topics: ["Crypto", "Web3", "Reward System"],
      stargazers_count: null,
      language: "JavaScript",
      logo: "/images/taskbound.png"
    },
    {
      id: 103,
      name: "247Seating",
      description: "247Seating is a lightweight restaurant booking widget that can be embedded into any website. It allows customers to reserve tables instantly while giving owners full control over their seating capacity.",
      html_url: "https://www.247seating.com",
      topics: ["Restaurant booking system", "Widget", "React"],
      stargazers_count: null,
      language: "TypeScript",
      logo: "/images/247logo.png"
    }
  ];

  const projectsToDisplay = manualProjects;

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

        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-64 rounded-2xl bg-card/50" />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsToDisplay.slice(0, 6).map((repo, idx) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => window.open(repo.html_url, '_blank')}
                className="group flex flex-col h-full bg-card rounded-2xl border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden cursor-pointer"
              >
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-secondary rounded-xl group-hover:bg-primary/10 group-hover:text-primary transition-colors overflow-hidden">
                      {repo.logo?.startsWith('/') ? (
                        <img src={repo.logo} alt={repo.name} className="w-full h-full object-cover" />
                      ) : (
                        <span className="font-bold text-lg">{repo.logo || <Github className="w-6 h-6" />}</span>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {repo.name.replace(/-/g, ' ')}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-3 flex-grow">
                    {repo.description || "No description available for this project."}
                  </p>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {repo.topics?.slice(0, 2).map(topic => (
                        <span key={topic} className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground border border-white/5">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
