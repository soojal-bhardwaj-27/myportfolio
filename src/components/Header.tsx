import React from 'react';
import DecorativeStar from './ui/DecorativeStar';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 w-full px-6 py-4 md:px-10 md:py-6 flex justify-between items-center z-50 bg-dark-green/90 backdrop-blur-md text-cream">
      <div className="flex items-center gap-3">
        <DecorativeStar className="w-5 h-5 text-coral" />
        <span className="font-display text-2xl tracking-wide">Soojal Bhardwaj</span>
      </div>
      <nav className="hidden md:flex items-center gap-8 font-sans text-sm">
        <a href="#about" className="hover:opacity-60 transition-opacity">About me</a>
        <a href="#resume" className="hover:opacity-60 transition-opacity">Resume</a>
        <a href="#work" className="hover:opacity-60 transition-opacity">Work</a>
        <a href="#contact" className="bg-orange text-black px-5 py-2 rounded-full font-medium hover:-translate-y-0.5 transition-transform">Get in touch</a>
      </nav>
    </header>
  );
};
export default Header;
