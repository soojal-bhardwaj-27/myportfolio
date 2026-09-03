import React from 'react';
import { motion } from 'framer-motion';
import DecorativeStar from './ui/DecorativeStar';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] bg-dark-green text-cream overflow-hidden px-6 md:px-12 flex flex-col justify-center border-b-[20px] border-dark-green">
      {/* Decorative stars */}
      <DecorativeStar className="absolute top-[20%] left-[20%] w-8 h-8 opacity-70 text-coral" />
      <DecorativeStar className="absolute bottom-[30%] right-[30%] w-6 h-6 opacity-50 text-coral" />
      
      {/* Huge Portfolio Title */}
      <h1 className="absolute top-10 left-1/2 -translate-x-1/2 z-10 font-display text-[clamp(70px,13vw,190px)] whitespace-nowrap opacity-95 pointer-events-none text-cream">
        PORTFOLIO
      </h1>

      <div className="relative z-10 flex flex-col justify-center flex-grow">
        
        {/* Main Title Group */}
        <motion.div 
          className="relative z-20 mix-blend-difference text-cream pointer-events-none"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="font-serif text-xl md:text-2xl tracking-[0.2em] mb-2 font-light uppercase">
            AI & Full-Stack Engineer
          </div>
          <div className="relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-12 mt-32 items-center max-w-7xl mx-auto w-full">
            {/* Left: Image Box */}
            <div className="relative w-full max-w-[320px] mx-auto lg:mx-0">
              <div className="bg-burnt-orange w-full aspect-[3/4] p-5 relative z-10">
                <img 
                  src="/profile.png" 
                  alt="Soojal Bhardwaj" 
                  className="w-full h-full object-cover filter-retro hover:filter-none transition-all duration-500"
                />
              </div>
              <div className="absolute -bottom-8 -left-4 max-w-[200px] font-sans text-[10px] leading-[1.4] z-20 bg-dark-green p-3 text-cream shadow-xl">
                Building intelligent systems, production-ready web applications, business CRMs, and interactive user experiences.
              </div>
            </div>

            {/* Right: Typography and Socials */}
            <div className="relative flex flex-col items-start lg:items-end h-full justify-between py-10 min-h-[400px]">
              {/* Vertical Decorative Typography */}
              <div className="text-orange font-decorative font-light text-[60px] md:text-[90px] leading-[0.75] z-30 text-left lg:absolute lg:-left-20 lg:top-20 mix-blend-screen pointer-events-none">
                <span className="block">FROM MY</span>
                <span className="block">FROM MY</span>
                <span className="block">PORTFOLIO</span>
              </div>

              {/* Social Links */}
              <div className="flex flex-col gap-2 font-sans text-sm mt-auto z-20 lg:absolute lg:bottom-10 lg:right-10 text-cream">
                <a href="https://github.com/soojal-bhardwaj-27" target="_blank" className="hover:text-orange transition-colors">GH: /soojal-bhardwaj</a>
                <a href="#" className="hover:text-orange transition-colors">IG: @soojal.b</a>
                Based in India.<br/>Currently open for freelance projects and full-time roles.
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Button */}
      <a href="#about" className="absolute -bottom-[29px] left-1/2 -translate-x-1/2 w-[58px] h-[58px] rounded-full bg-orange flex items-center justify-center z-50 hover:scale-105 transition-transform text-black text-[9px] font-sans font-bold uppercase leading-[1.1] text-center shadow-lg">
        Scroll<br/>down
      </a>
    </div>
  );
};
export default Hero;