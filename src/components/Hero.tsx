import React from 'react';
import { motion } from 'framer-motion';
import DecorativeStar from './ui/DecorativeStar';

interface HeroProps {
  showImage?: boolean;
}

const Hero: React.FC<HeroProps> = ({ showImage = true }) => {
  return (
    <div className="relative min-h-[90vh] bg-dark-green text-cream overflow-hidden px-6 md:px-12 flex flex-col justify-center items-center border-b-[20px] border-dark-green">
      {/* Decorative stars */}
      <DecorativeStar className="absolute top-[20%] left-[20%] w-8 h-8 opacity-70 text-coral" />
      <DecorativeStar className="absolute bottom-[30%] right-[30%] w-6 h-6 opacity-50 text-coral" />
      
      {/* Floating Image in Hero State */}
      {showImage && (
        <motion.div
          layoutId="profileImage"
          className="absolute z-30 shadow-2xl w-[180px] h-[225px] sm:w-[220px] sm:h-[275px] md:w-[280px] md:h-[350px]"
          style={{ top: '15%', right: '10%', rotate: 8 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <img src="/profile.png" alt="Soojal Bhardwaj" className="w-full h-full object-cover filter-retro" />
        </motion.div>
      )}
      
      {/* Huge Portfolio Title */}
      <h1 className="absolute top-10 left-1/2 -translate-x-1/2 z-10 font-display text-[clamp(70px,13vw,190px)] whitespace-nowrap opacity-95 pointer-events-none text-cream">
        PORTFOLIO
      </h1>

      <div className="relative z-10 flex flex-col justify-center items-center flex-grow text-center mt-20">
        
        {/* Main Title Group */}
        <motion.div 
          className="relative z-20 mix-blend-difference text-cream flex flex-col items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="font-display text-[50px] sm:text-[70px] md:text-[100px] leading-none mb-4 text-orange pointer-events-none">
            SOOJAL BHARDWAJ
          </div>
          <div className="font-serif text-lg sm:text-xl md:text-3xl tracking-[0.3em] font-light uppercase pointer-events-none">
            SOFTWARE • AI • DATA
          </div>
          
          <div className="mt-16 max-w-xl font-sans text-sm md:text-base leading-relaxed text-cream/80 pointer-events-none px-4">
            Building intelligent systems, production-ready web applications, business CRMs, and interactive user experiences. Based in India. Currently open for freelance projects and full-time roles.
          </div>
          
          {/* Social Links & Resume */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 font-sans text-sm z-30 pointer-events-auto">
            <a href="https://github.com/soojal-bhardwaj-27" target="_blank" className="hover:text-orange transition-colors">GH: /soojal-bhardwaj</a>
            <a href="#" className="hover:text-orange transition-colors">IG: @soojal.b</a>
            <a href="/Soojal_bhardwaj_resume.pdf" download className="text-orange hover:text-cream transition-colors flex items-center gap-1 font-bold">
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
               RESUME
            </a>
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