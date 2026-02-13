import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  Server, 
  Layout, 
  Cloud, 
  Wrench 
} from "lucide-react";

const skillsData = [
  {
    category: "Frontend",
    icon: <Layout className="w-6 h-6 text-blue-400" />,
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Redux", "Chakra UI", "TailwindCSS"]
  },
  {
    category: "Backend",
    icon: <Server className="w-6 h-6 text-green-400" />,
    skills: ["NodeJS", "Express.js", "Next JS", "JWT", "Socket.io", "Bun", "Nodemon"]
  },
  {
    category: "Database",
    icon: <Database className="w-6 h-6 text-yellow-400" />,
    skills: ["MongoDB", "PostgreSQL", "MSSQL", "Firebase"]
  },
  {
    category: "DevOps & Hosting",
    icon: <Cloud className="w-6 h-6 text-orange-400" />,
    skills: ["AWS", "Vercel", "Render", "Netlify"]
  },
  {
    category: "Tools & Utilities",
    icon: <Wrench className="w-6 h-6 text-gray-400" />,
    skills: ["Git", "GitHub", "Postman", "NPM"]
  },
  {
    category: "Design",
    icon: <Code2 className="w-6 h-6 text-pink-400" />,
    skills: ["Figma", "UI/UX", "Responsive Design"]
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-secondary/20">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-display mb-4"
          >
            Technical <span className="text-primary">Arsenal</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            A comprehensive stack of modern technologies I use to build powerful applications.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillsData.map((category, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="bg-card/50 border border-white/5 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-background border border-white/10 group-hover:border-primary/20 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-secondary-foreground border border-white/5 hover:border-primary/20 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
