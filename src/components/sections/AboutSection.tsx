"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          sectionRef.current!.querySelectorAll("h2, .about-card"),
          { 
            opacity: 0, 
            y: 40 
          },
          { 
            opacity: 1, 
            y: 0, 
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }, sectionRef);
      
      return () => ctx.revert();
    }
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="max-w-4xl mx-auto">
          <Card className="about-card border-2 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <p className="text-muted-foreground leading-relaxed text-lg">
                I'm a passionate full-stack developer who loves building modern, performant web 
                applications using cutting-edge technologies like <strong>Astro</strong>, <strong>React</strong>, 
                <strong> TypeScript</strong>, and <strong>TailwindCSS</strong>. With a keen eye for UX/UI design 
                and a commitment to clean code, I strive to create digital experiences that are both 
                beautiful and functional.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Web Development", "UI/UX Design", "Mobile Apps", "Consulting"].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}