import React, { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink, Code, Layout, TowerControl as GameController2, PenTool } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  links: {
    demo?: string;
    github?: string;
  };
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Multiplayer Web Game",
      description: "A real-time multiplayer game built with React, Node.js, and Socket.io that allows users to compete against each other in various challenges.",
      image: "https://images.pexels.com/photos/7915575/pexels-photo-7915575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["React", "Node.js", "Socket.io", "Game Development"],
      category: "game",
      links: {
        demo: "#",
      }
    },
    {
      id: 2,
      title: "AI Resume Builder",
      description: "Smart tool that uses AI to help users create professional resumes with content suggestions and formatting options.",
      image: "https://images.pexels.com/photos/6893333/pexels-photo-6893333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["React", "AI Integration", "Responsive Design"],
      category: "webapp",
      links: {
        demo: "https://rio-world-rust.vercel.app/",
        github: "https://github.com/soojal-bhardwaj-27/rio_world"
      }
    },
    {
      id: 3,
      title: "E-Learning Platform",
      description: "A comprehensive learning platform with interactive lessons, quizzes, and progress tracking for students.",
      image: "https://images.pexels.com/photos/5428003/pexels-photo-5428003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["React", "Node.js", "MongoDB", "Educational Tech"],
      category: "webapp",
      links: {
        demo: "#"
      }
    },
    {
      id: 4,
      title: "Brand Identity Design",
      description: "Complete brand identity design including logo, color palette, typography, and usage guidelines for a tech startup.",
      image: "https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Branding", "Logo Design", "Illustrator"],
      category: "design",
      links: {
        demo: "#"
      }
    },
    {
      id: 5,
      title: "Handwriting Detection System",
      description: "A machine learning system that detects and analyzes handwriting forgery using TensorFlow and OpenCV.",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["TensorFlow", "OpenCV", "Machine Learning"],
      category: "ai",
      links: {
        github: "#"
      }
    },
    {
      id: 6,
      title: "E-Commerce UI Design",
      description: "Modern and intuitive UI design for an e-commerce platform with focus on user experience and conversion optimization.",
      image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["UI/UX", "Figma", "E-Commerce"],
      category: "design",
      links: {
        demo: "#"
      }
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">My Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg animate-slide-up delay-100">
            A showcase of my work spanning web development, game design, AI integration, and creative UI/UX solutions.
          </p>
        </div>
        
        {/* Project Filters */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 
                transform hover:scale-110 hover:shadow-neon
                ${activeFilter === category 
                  ? 'bg-teal-500 text-white scale-105' 
                  : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="capitalize">{category}</span>
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl 
                transition-all duration-500 transform hover:-translate-y-2 hover:shadow-neon-lg
                ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-48 overflow-hidden relative group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 
                  transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm">
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-200 
                        transition-all duration-300 transform hover:scale-110 hover:shadow-neon"
                      aria-label="View GitHub Repository">
                      <Github size={20} />
                    </a>
                  )}
                  {project.links.demo && (
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-200 
                        transition-all duration-300 transform hover:scale-110 hover:shadow-neon"
                      aria-label="View Live Demo">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium 
                    bg-white bg-opacity-90 text-gray-800 transition-transform duration-300 hover:scale-110">
                    {getCategoryIcon(project.category)}
                    <span className="capitalize">{project.category}</span>
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 transition-colors duration-300 
                  group-hover:text-teal-500">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 
                        rounded text-xs font-medium transition-all duration-300 hover:scale-110 
                        hover:bg-teal-100 hover:text-teal-800 dark:hover:bg-teal-900 dark:hover:text-teal-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  {project.links.demo ? (
                    <a 
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-500 hover:text-teal-600 font-medium text-sm flex items-center gap-1
                        transition-all duration-300 transform hover:scale-110 hover:translate-x-2"
                    >
                      View Project <ExternalLink size={16} />
                    </a>
                  ) : (
                    <span className="text-gray-500 dark:text-gray-400 text-sm">Project Details Coming Soon</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Interested in seeing more of my work?
          </p>
          <a 
            href="#contact"
            className="inline-block px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-full 
              transition-all duration-300 transform hover:scale-110 hover:shadow-neon active:scale-95"
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
  );
};

export default Projects;