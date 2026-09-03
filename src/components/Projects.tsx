import  { useState, useEffect, useRef } from 'react';
import { Code, Layout, TowerControl as GameController2, PenTool } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Jarvis AI",
      description: "A virtual assistant built with Python to help users with daily tasks through voice and text.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
      tags: ["Python", "AI", "Virtual Assistant"],
      category: "ai"
    },
    {
      id: 2,
      title: "Moment",
      description: "A Locket clone built with TypeScript. Share live photos directly to your friends' home screens.",
      image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=1000",
      tags: ["TypeScript", "Clone", "Social"],
      category: "webapp"
    },
    {
      id: 3,
      title: "POOKIE",
      description: "A clone app for a Discord music player, allowing users to stream and manage audio effectively.",
      image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=1000",
      tags: ["TypeScript", "Discord", "Music"],
      category: "webapp"
    },
    {
      id: 4,
      title: "Hackethics138",
      description: "A platform dedicated to ethical hacking and cybersecurity learning for ethical users.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000",
      tags: ["Security", "Education", "CSS"],
      category: "security"
    },
    {
      id: 5,
      title: "Hotel Booking",
      description: "A comprehensive hotel booking website providing seamless reservations and property exploration.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000",
      tags: ["HTML", "Booking", "UI/UX"],
      category: "webapp"
    },
    {
      id: 6,
      title: "Offline Mode",
      description: "A security-focused offline application ensuring data integrity and safe operations without internet.",
      image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&q=80&w=1000",
      tags: ["TypeScript", "Security", "Offline"],
      category: "security"
    }
  ];
  
  const categories = ['all', ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'webapp':
        return <Layout size={16} />;
      case 'game':
        return <GameController2 size={16} />;
      case 'design':
        return <PenTool size={16} />;
      case 'ai':
        return <Code size={16} />;
      default:
        return <Code size={16} />;
    }
  };

  return (
    <div 
      ref={sectionRef}
      className={`py-20 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 animate-slide-up text-gradient">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg animate-slide-up delay-100">
            A showcase of my premium work spanning web development, game design, AI integration, and creative UI/UX solutions.
          </p>
        </div>
        
        {/* Project Filters */}
        <div className="flex flex-wrap justify-center mb-16 gap-3">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 
                transform hover:scale-105
                ${activeFilter === category 
                  ? 'bg-teal-500 text-white shadow-neon scale-105'  
                  : 'glass text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="capitalize">{category}</span>
            </button>
          ))}
        </div>
        
        {/* Projects Grid or Empty State */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className={`glass rounded-2xl overflow-hidden group
                  transition-all duration-500 transform hover:-translate-y-3 hover:shadow-neon-accent
                  ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80"></div>
                  
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold 
                      bg-black/50 backdrop-blur-md text-white border border-white/20 transition-transform duration-300 hover:scale-105">
                      {getCategoryIcon(project.category)}
                      <span className="capitalize">{project.category}</span>
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 transition-colors duration-300 
                    group-hover:text-teal-400 text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2.5 py-1 bg-gray-200/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-300 
                          rounded-md text-xs font-medium transition-all duration-300 hover:border-teal-500 hover:text-teal-500 dark:hover:text-teal-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center animate-fade-in glass rounded-2xl">
            <Layout size={48} className="text-teal-500 mb-4 opacity-50" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">New Projects Coming Soon</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              I am currently working on some exciting new projects. Check back soon to see them here!
            </p>
          </div>
        )}
        
        {/* Call to Action */}
        <div className="text-center mt-20 animate-fade-in">
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
            Interested in seeing more of my work or discussing a project?
          </p>
          <a 
            href="#contact"
            className="inline-block px-8 py-3.5 bg-gradient-to-r from-teal-500 to-accent text-white font-bold rounded-full 
              transition-all duration-300 transform hover:scale-105 hover:shadow-neon-accent active:scale-95"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;