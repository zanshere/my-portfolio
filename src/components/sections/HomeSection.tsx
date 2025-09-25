"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowDown } from "lucide-react";

export default function HomeSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          sectionRef.current!.querySelectorAll("h1, p, svg"),
          { 
            opacity: 0, 
            y: 60,
            scale: 0.9 
          },
          { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            duration: 1.2, 
            stagger: 0.3, 
            ease: "power3.out",
            delay: 0.5
          }
        );
      }, sectionRef);
      
      return () => ctx.revert();
    }
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="flex flex-col items-center justify-center min-h-screen text-center px-6 bg-gradient-to-br from-background via-background to-muted/20"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Hello There 👋, I'm {" "}
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Ryuzen
          </span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Passionate full-stack developer crafting digital experiences with modern technologies. 
          Scroll down to explore my journey 🚀
        </p>
      </div>
      <button
        onClick={scrollToNext}
        className="mt-12 group flex flex-col items-center"
        aria-label="Scroll to next section"
      >
        <ArrowDown className="w-8 h-8 text-primary animate-bounce group-hover:scale-110 transition-transform duration-300" />
        <span className="text-sm text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Explore More
        </span>
      </button>
    </section>
  );
}