import { motion } from "framer-motion";
import { TiltCard } from "@/components/TiltCard";
import {
  Code2,
  Database,
  Server,
  Layout,
  Cloud,
  Wrench,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiSocketdotio,
  SiBun,
  SiNodemon,
  SiGraphql,
  SiMongodb,
  SiAmazondynamodb,
  SiFirebase,
  SiAmazonwebservices,
  SiAwslambda,
  SiAmazons3,
  SiVercel,
  SiRender,
  SiNetlify,
  SiGit,
  SiGithub,
  SiPostman,
  SiNpm,
  SiFigma,
} from "react-icons/si";
import type { IconType } from "react-icons";

type SkillIcon = IconType | LucideIcon;

const skillMeta: Record<string, { icon: SkillIcon; color: string }> = {
  "HTML5": { icon: SiHtml5, color: "#E34F26" },
  "CSS3": { icon: SiCss3, color: "#1572B6" },
  "JavaScript": { icon: SiJavascript, color: "#F7DF1E" },
  "TypeScript": { icon: SiTypescript, color: "#3178C6" },
  "React": { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#FFFFFF" },
  "Next JS": { icon: SiNextdotjs, color: "#FFFFFF" },
  "Redux": { icon: SiRedux, color: "#764ABC" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#38BDF8" },
  "NodeJS": { icon: SiNodedotjs, color: "#339933" },
  "Express.js": { icon: SiExpress, color: "#FFFFFF" },
  "JWT": { icon: SiJsonwebtokens, color: "#E8E8E8" },
  "Socket.io": { icon: SiSocketdotio, color: "#E8E8E8" },
  "Bun": { icon: SiBun, color: "#FBF0DF" },
  "Nodemon": { icon: SiNodemon, color: "#76D04B" },
  "GraphQL": { icon: SiGraphql, color: "#E10098" },
  "MongoDB": { icon: SiMongodb, color: "#47A248" },
  "DynamoDB": { icon: SiAmazondynamodb, color: "#4053D6" },
  "MSSQL": { icon: Database, color: "#A4373A" },
  "Firebase": { icon: SiFirebase, color: "#FFCA28" },
  "AWS": { icon: SiAmazonwebservices, color: "#FF9900" },
  "Lambda": { icon: SiAwslambda, color: "#FF9900" },
  "S3": { icon: SiAmazons3, color: "#569A31" },
  "API Gateway": { icon: Cloud, color: "#FF9900" },
  "Vercel": { icon: SiVercel, color: "#FFFFFF" },
  "Render": { icon: SiRender, color: "#46E3B7" },
  "Netlify": { icon: SiNetlify, color: "#00C7B7" },
  "Git": { icon: SiGit, color: "#F05032" },
  "GitHub": { icon: SiGithub, color: "#FFFFFF" },
  "Postman": { icon: SiPostman, color: "#FF6C37" },
  "NPM": { icon: SiNpm, color: "#CB3837" },
  "Figma": { icon: SiFigma, color: "#F24E1E" },
  "UI/UX": { icon: Layout, color: "#A78BFA" },
  "Responsive Design": { icon: Smartphone, color: "#22D3EE" },
};

const skillsData = [
 {
  category: "Frontend",
  icon: <Layout className="w-6 h-6 text-blue-400" />,
  skills: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Redux",
    "Tailwind CSS"
  ]
},

  {
    category: "Backend",
    icon: <Server className="w-6 h-6 text-green-400" />,
    skills: ["NodeJS", "Express.js", "Next JS", "JWT", "Socket.io", "Bun", "Nodemon","GraphQL"]
  },
 {
  category: "Database",
  icon: <Database className="w-6 h-6 text-yellow-400" />,
  skills: ["MongoDB", "DynamoDB", "MSSQL", "Firebase"]
},
{
  category: "Cloud & DevOps",
  icon: <Cloud className="w-6 h-6 text-blue-400" />,
  skills: ["AWS", "Lambda", "S3", "API Gateway"]
},
  {
    category: "Hosting",
    icon: <Cloud className="w-6 h-6 text-orange-400" />,
    skills: [ "Vercel", "Render", "Netlify"]
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
            <motion.div key={idx} variants={item}>
              <TiltCard maxTilt={5} scale={1.01} className="h-full">
                <div className="h-full bg-card/50 border border-white/5 rounded-2xl p-6 hover:border-primary/30 transition-colors duration-300 hover:shadow-lg hover:shadow-primary/5 group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-background border border-white/10 group-hover:border-primary/20 transition-colors">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold">{category.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => {
                      const meta = skillMeta[skill];
                      const Icon = meta?.icon ?? Code2;
                      return (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg bg-secondary text-secondary-foreground border border-white/5 hover:border-primary/20 hover:-translate-y-0.5 hover:shadow-md transition-all cursor-default"
                        >
                          <Icon
                            className="w-4 h-4 shrink-0"
                            style={{ color: meta?.color ?? "#94A3B8" }}
                          />
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
