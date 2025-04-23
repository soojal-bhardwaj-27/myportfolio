import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const nameElement = nameRef.current;
    const roleElement = roleRef.current;
    const descriptionElement = descriptionRef.current;
    const ctaElement = ctaRef.current;
    
    if (nameElement && roleElement && descriptionElement && ctaElement) {
      nameElement.style.opacity = '0';
      roleElement.style.opacity = '0';
      descriptionElement.style.opacity = '0';
      ctaElement.style.opacity = '0';
      
      nameElement.style.transform = 'translateY(20px)';
      roleElement.style.transform = 'translateY(20px)';
      descriptionElement.style.transform = 'translateY(20px)';
      ctaElement.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        nameElement.style.opacity = '1';
        nameElement.style.transform = 'translateY(0)';
      }, 300);
      
      setTimeout(() => {
        roleElement.style.opacity = '1';
        roleElement.style.transform = 'translateY(0)';
      }, 500);
      
      setTimeout(() => {
        descriptionElement.style.opacity = '1';
        descriptionElement.style.transform = 'translateY(0)';
      }, 700);
      
      setTimeout(() => {
        ctaElement.style.opacity = '1';
        ctaElement.style.transform = 'translateY(0)';
      }, 900);
    }
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-teal-500/20 dark:bg-teal-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute -bottom-20 right-1/3 w-72 h-72 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-spin-slow"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <h1 
            ref={nameRef}
            className="text-5xl md:text-7xl font-extrabold mb-4 transition-all duration-700 ease-out
              hover:scale-105 transform cursor-default"
          >
            Soojal Bhardwaj
          </h1>
          
          <h2 
            ref={roleRef}
            className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-teal-500 to-blue-500 
              bg-clip-text text-transparent transition-all duration-700 ease-out hover:scale-105 transform"
          >
            Full-Stack Developer & UI/UX Designer
          </h2>
          
          <p 
            ref={descriptionRef}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-10 
              transition-all duration-700 ease-out hover:scale-105 transform"
          >
            Building exceptional digital experiences with a focus on innovation, 
            clean design, and cutting-edge technology.
          </p>
          
          <div 
            ref={ctaRef}
            className="flex flex-col sm:flex-row items-center gap-4 transition-all duration-700 ease-out"
          >
            <a 
              href="#projects" 
              className="px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-full 
                transition-all duration-300 transform hover:scale-110 hover:shadow-neon
                active:scale-95"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View My Work
            </a>
            <a 
              href="#contact"
              className="px-8 py-3 border-2 border-teal-500 text-teal-500 dark:text-teal-400 
                hover:bg-teal-500/10 font-medium rounded-full transition-all duration-300
                transform hover:scale-110 hover:shadow-neon active:scale-95"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center
        animate-bounce opacity-75 hover:opacity-100 transition-opacity duration-300">
        <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll Down</span>
        <div className="w-5 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;