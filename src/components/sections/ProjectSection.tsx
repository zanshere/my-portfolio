"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const projects = [
  {
    title: "Fajar World Fantasy",
    desc: "Website kebun binatang yang dibuat dengan Laravel 12",
    tech: ["Laravel", "MySQL", "TailwindCSS", "GSAP"],
    github: "https://github.com/zanshere/fwf-projects.git",
    live: "https://farmfresh.demo",
  },
  {
    title: "Jadoel Food",
    desc: "Website makanan yang dibuat dengan PHP Native, menawarkan aneka makanan yang dapat dipesan secara langsung melalui website dan menampilkan stok makanan secara real-time",
    tech: ["PHP", "MySQL", "TailwindCSS", "SweetAlert2"],
    github: "https://github.com/zanshere/jadoel-food.git",
    live: "https://yourportfolio.com",
  },
  {
    title: "WhatsApp Business Bot",
    desc: "Advanced WhatsApp Bot dengan TypeScript & Baileys library, featuring AI integration and multi-language support.",
    tech: ["TypeScript", "Node.js", "Baileys", "AI"],
    github: "https://github.com/zanshere/whatsapp-bot",
    live: "#",
  },
];

export default function ProjectSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          sectionRef.current!.querySelectorAll(".project-card"),
          { 
            opacity: 0, 
            y: 60,
            scale: 0.95
          },
          { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
            }
          }
        );
      }, sectionRef);
      
      return () => ctx.revert();
    }
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <Card 
              key={i} 
              className="project-card group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/20 hover:scale-105"
            >
              <CardHeader>
                <h3 className="font-bold text-xl group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}