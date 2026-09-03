import  { useEffect, useRef } from 'react';

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
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-accent-light/20 dark:bg-accent-dark/10 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute -bottom-20 right-1/3 w-72 h-72 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-spin-slow"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 pt-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
            <h1 
              ref={nameRef}
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 transition-all duration-700 ease-out
                hover:scale-105 transform cursor-default tracking-tight"
            >
              Soojal Bhardwaj
            </h1>
            
            <h2 
              ref={roleRef}
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gradient-alt transition-all duration-700 ease-out hover:scale-105 transform origin-left"
            >
              Full-Stack Developer & UI/UX Designer
            </h2>
            
            <p 
              ref={descriptionRef}
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mb-10 
                transition-all duration-700 ease-out hover:scale-105 transform leading-relaxed origin-left"
            >
              Building exceptional digital experiences with a focus on innovation, 
              clean design, and cutting-edge technology.
            </p>
            
            <div 
              ref={ctaRef}
              className="flex flex-col sm:flex-row items-center gap-6 transition-all duration-700 ease-out"
            >
              <a 
                href="#projects" 
                className="px-8 py-3.5 bg-gradient-to-r from-teal-500 to-accent text-white font-bold rounded-full 
                  transition-all duration-300 transform hover:scale-105 hover:shadow-neon-accent
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
                className="px-8 py-3.5 border-2 border-accent text-accent dark:text-accent-light 
                  hover:bg-accent/10 font-bold rounded-full transition-all duration-300
                  transform hover:scale-105 hover:shadow-neon active:scale-95 glass"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get In Touch
              </a>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-md animate-fade-in" style={{ animationDelay: '1000ms', animationFillMode: 'both' }}>
            <div className="relative group perspective-1000">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500 to-purple-500 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto rounded-full p-2 bg-gradient-to-tr from-teal-400 via-accent to-purple-500 overflow-hidden shadow-2xl transition-transform duration-700 transform group-hover:rotate-y-12">
                <img 
                  src="/profile.png" 
                  alt="Soojal Bhardwaj" 
                  className="w-full h-full object-cover rounded-full border-4 border-white/20 dark:border-gray-900/50"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;