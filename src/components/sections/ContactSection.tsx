"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  useEffect(() => {
    if (sectionRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          sectionRef.current!.querySelectorAll("h2, .contact-card, .contact-info"),
          { 
            opacity: 0, 
            y: 40 
          },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            }
          }
        );
      }, sectionRef);
      
      return () => ctx.revert();
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section ref={sectionRef} id="contact" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Get In <span className="text-primary">Touch</span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="contact-card shadow-xl border-2">
            <CardHeader>
              <h3 className="font-semibold text-2xl flex items-center">
                <Send className="w-6 h-6 mr-2 text-primary" />
                Send me a Message 📩
              </h3>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input 
                  placeholder="Your Name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
                <Textarea 
                  placeholder="Your Message" 
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required 
                />
                <Button type="submit" className="w-full bg-gradient-to-r from-primary to-primary/80">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6 contact-info">
            <Card className="p-6 shadow-lg border-2">
              <CardContent className="p-0 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">your.email@domain.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-muted-foreground">+62 812-3456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-muted-foreground">Indonesia</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6 shadow-lg border-2">
              <CardContent className="p-0">
                <h4 className="font-semibold mb-4">Why work with me?</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✅ Clean, maintainable code</li>
                  <li>✅ Responsive design</li>
                  <li>✅ SEO optimized</li>
                  <li>✅ Fast delivery</li>
                  <li>✅ Ongoing support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}