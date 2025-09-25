"use client";

import { Progress } from "@/components/ui/progress";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function SkillSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [animated, setAnimated] = useState(false);

  const skills = [
    { name: "HTML / CSS", value: 90, color: "from-orange-500 to-red-500" },
    { name: "JavaScript / TypeScript", value: 85, color: "from-yellow-400 to-yellow-600" },
    { name: "React / Next.js / Astro", value: 88, color: "from-blue-500 to-cyan-500" },
    { name: "TailwindCSS / Shadcn", value: 92, color: "from-teal-400 to-blue-500" },
    { name: "Node.js / Backend", value: 78, color: "from-green-500 to-green-600" },
    { name: "UI/UX Design", value: 75, color: "from-purple-500 to-pink-500" },
  ];

  useEffect(() => {
    if (sectionRef.current && !animated) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          sectionRef.current!.querySelectorAll(".skill-item"),
          { 
            opacity: 0, 
            x: -50 
          },
          { 
            opacity: 1, 
            x: 0, 
            duration: 0.8,
            stagger: 0.15,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              onEnter: () => setAnimated(true)
            }
          }
        );
      }, sectionRef);
      
      return () => ctx.revert();
    }
  }, [animated]);

  return (
    <section ref={sectionRef} id="skills" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="space-y-8">
          {skills.map((skill, index) => (
            <div key={skill.name} className="skill-item">
              <div className="flex justify-between mb-3">
                <span className="font-medium text-foreground">{skill.name}</span>
                <span className="text-primary font-semibold">{skill.value}%</span>
              </div>
              <div className="relative">
                <Progress 
                  value={animated ? skill.value : 0} 
                  className={`h-3 bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}