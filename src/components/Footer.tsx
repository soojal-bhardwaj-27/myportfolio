import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Facebook, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-transparent py-12 overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <a 
              href="#home" 
              className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Soojal.dev
            </a>
            <div className="text-gray-600 dark:text-gray-400 mt-2 animate-fade-in-up">
              <p className="font-semibold text-teal-500 animate-bounce">BCA Graduate</p>
              <div className="mt-1">
                <span className="typing-animation">Full-Stack Developer | UI/UX Designer</span>
              </div>
              <div className="mt-1">
                <span className="typing-animation">Game Development Enthusiast</span>
              </div>
              <div className="mt-1">
                <span className="typing-animation">Proficient in React, TypeScript, TailwindCSS</span>
              </div>
              <div className="mt-1">
                <span className="typing-animation">Passionate about Creative Problem Solving</span>
              </div>
            </div>
          </div>

          <div className="flex space-x-6 mt-6 md:mt-0">
            {[
              { icon: <Github size={20} />, url: "https://github.com/soojal-bhardwaj-27", label: "GitHub" },
              { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/soojal-bhardwaj-086678322/", label: "LinkedIn" },
              { icon: <Twitter size={20} />, url: "https://twitter.com/soojal_bhardwaj", label: "Twitter" },
              { icon: <Instagram size={20} />, url: "https://instagram.com/soojal_bhardwaj", label: "Instagram" },
              { icon: <Facebook size={20} />, url: "https://facebook.com/soojal.bhardwaj", label: "Facebook" }
            ].map(({ icon, url, label }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300"
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center text-gray-600 dark:text-gray-400">
          <p className="flex items-center justify-center">
            Made with <Heart className="mx-1 text-red-500" size={16} /> by Soojal Bhardwaj
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
