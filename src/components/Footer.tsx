import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Facebook, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-dark-green text-cream py-16 overflow-hidden border-t-[10px] border-orange">
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <a 
              href="#home" 
              className="text-4xl font-display text-cream hover:text-orange transition-colors"
            >
              Soojal.dev
            </a>
            <div className="text-cream/80 mt-4 font-sans text-sm">
              <motion.div 
                className="font-bold text-orange mb-2 text-2xl tracking-widest"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                CODER
              </motion.div>
              <div className="mb-1">Building intelligent business systems</div>
              <div className="mb-1">LLMs | Python | Next.js | PostgreSQL</div>
            </div>
          </div>

          <div className="flex space-x-6 mt-10 md:mt-0">
            {[
              { icon: <Github size={24} />, url: "https://github.com/soojal-bhardwaj-27", label: "GitHub" },
              { icon: <Linkedin size={24} />, url: "https://www.linkedin.com/in/soojal-bhardwaj-086678322/", label: "LinkedIn" },
              { icon: <Twitter size={24} />, url: "https://twitter.com/soojal_bhardwaj", label: "Twitter" },
              { icon: <Instagram size={24} />, url: "https://instagram.com/soojal_bhardwaj", label: "Instagram" },
              { icon: <Facebook size={24} />, url: "https://facebook.com/soojal.bhardwaj", label: "Facebook" }
            ].map(({ icon, url, label }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/70 hover:text-orange hover:-translate-y-1 transition-all duration-300"
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 text-center text-cream/50 font-sans text-xs">
          <p className="flex items-center justify-center">
            Made with <Heart className="mx-1 text-coral" size={14} /> by Soojal Bhardwaj
          </p>
          <p className="mt-2">
            © {currentYear} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
