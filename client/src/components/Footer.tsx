import { Github, Linkedin, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-background relative z-10">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold font-display mb-2">
              <span className="text-primary">{"<"}</span>Umar<span className="text-primary">{"/>"}</span>
            </h3>
            <p className="text-muted-foreground text-sm">
              Building digital experiences that matter.
            </p>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/umar942" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/5 transition-colors text-muted-foreground hover:text-primary">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/umar-ali-6501a2353" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/5 transition-colors text-muted-foreground hover:text-primary">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://wa.me/923101032419?text=Hi%20Umar,%20I'm%20interested%20in%20your%20MERN%20stack%20development%20services." target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/5 transition-colors text-muted-foreground hover:text-primary">
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/5 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Umar Ali. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
