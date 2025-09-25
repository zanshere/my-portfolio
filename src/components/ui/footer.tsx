import React from 'react';
import { Github, Instagram, ExternalLink, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const socialLinks = [
    { 
      name: 'Instagram', 
      href: 'https://instagram.com/yourusername', 
      icon: Instagram,
      color: 'hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500'
    },
    { 
      name: 'GitHub', 
      href: 'https://github.com/yourusername', 
      icon: Github,
      color: 'hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-800'
    },
  ];

  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { name: 'About Me', href: '#about' },
        { name: 'My Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Get in Touch', href: '#contact' },
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Web Development', href: '#services' },
        { name: 'UI/UX Design', href: '#services' },
        { name: 'Mobile Apps', href: '#services' },
        { name: 'Consulting', href: '#services' },
      ]
    }
  ];

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-background via-background to-muted/50 border-t border-border">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Ryuzen
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Passionate full-stack developer creating amazing digital experiences with modern technologies. 
              Let's build something incredible together.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center transition-all duration-400 hover:scale-110 hover:shadow-lg ${social.color}`}
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold mb-4 text-foreground">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault();
                          handleLinkClick(link.href);
                        }
                      }}
                      target={link.href.startsWith('#') ? undefined : '_blank'}
                      rel={link.href.startsWith('#') ? undefined : 'noopener noreferrer'}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center group"
                    >
                      {link.name}
                      {!link.href.startsWith('#') && (
                        <ExternalLink size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-2 sm:mb-0 flex items-center">
              © 2024 Ryuzen. Made with <Heart size={14} className="mx-1 text-red-500" /> using Astro & React
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-40"
        aria-label="Scroll to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;