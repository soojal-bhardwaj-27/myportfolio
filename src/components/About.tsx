import React from 'react';
import Pill from './ui/Pill';
import { motion } from 'framer-motion';

interface AboutProps {
  showImage?: boolean;
}

const About: React.FC<AboutProps> = ({ showImage = false }) => {
  return (
    <section id="about" className="relative min-h-[90vh] bg-cream text-black py-24 px-6 md:px-12 overflow-hidden">
      {/* Background Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(100px,25vw,350px)] font-display font-bold opacity-10 pointer-events-none flex flex-col leading-[0.8] text-stroke-orange text-transparent select-none">
        <span>RESUME</span>
        <span>RESUME</span>
        <span>RESUME</span>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-10">
        
        {/* Left Side: Intro */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-display text-[clamp(55px,8vw,120px)] leading-[0.85] mb-8">
            Hello,<br/>I'm Soojal!
          </h2>
          <p className="font-sans text-sm max-w-[380px] leading-[1.5] mb-8 text-black/80">
            I'm Soojal — an AI & Full-Stack Engineer focused on building intelligent systems and real-world digital products. My work spans AI engineering, LLMs, frontend development, and full-stack applications. I've built projects ranging from a personal Jarvis AI assistant and my own language-model experiments to production-oriented CRM platforms for education and healthcare businesses.
          </p>
          <a href="https://linkedin.com/in/soojal-bhardwaj" target="_blank" rel="noopener noreferrer" className="inline-block bg-coral text-white font-sans font-medium rounded-full px-6 py-3 hover:-translate-y-1 transition-transform shadow-lg">
            linkedin.com/in/soojal-bhardwaj
          </a>
        </motion.div>

        {/* Right Side: Profile & Contact */}
        <motion.div 
          className="relative mt-20 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          
          {/* Green BG Rectangle */}
          <div className="absolute top-0 right-0 w-[95%] h-[450px] lg:h-[550px] bg-dark-green -z-10"></div>
          
          {/* Portrait Image Placeholder (Image is rendered by HeroAboutTransition) */}
          <div className="relative w-full max-w-[400px] aspect-[4/5] mt-12 mx-auto lg:ml-auto lg:mr-10">
            {showImage && (
              <motion.div
                layoutId="profileImage"
                className="absolute inset-0 shadow-2xl z-20"
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <img src="/profile.png" alt="Soojal Bhardwaj" className="w-full h-full object-cover filter-retro hover:filter-none transition-all duration-500" />
                
                {/* Badges */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <Pill className="absolute top-[80px] -left-[30px] z-20 text-xs sm:text-sm whitespace-nowrap shadow-xl transform -rotate-2">
                    AI Engineer
                  </Pill>
                  <Pill className="absolute bottom-[60px] -right-[20px] z-20 text-xs sm:text-sm whitespace-nowrap shadow-xl transform rotate-3">
                    Full-Stack Dev
                  </Pill>
                </motion.div>
              </motion.div>
            )}
          </div>

          {/* Contact Card */}
          <div className="relative z-20 bg-black text-cream p-8 mt-16 w-[95%] md:w-[380px] shadow-2xl -ml-2 lg:-ml-12">
            <h3 className="font-display text-4xl mb-6">Contact</h3>
            <ul className="font-sans text-sm flex flex-col gap-5">
              <li className="flex items-center gap-4">
                <span className="text-orange text-xl">●</span>
                <span>Haryana, India</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="text-orange text-xl">✉</span>
                <a href="mailto:soojal@example.com" className="hover:text-orange transition-colors">soojal.bhardwaj@example.com</a>
              </li>
              <li className="flex items-center gap-4">
                <span className="text-orange text-xl">☎</span>
                <a href="tel:9306282549" className="hover:text-orange transition-colors">+91 9306282549</a>
              </li>
            </ul>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
export default About;
