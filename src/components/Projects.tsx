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
      title: "Help In Offline",
      description: "A platform to help users find offline services.",
      image: "https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["React", "Web Development", "Service Platform"],
      category: "webapp",
      links: {
        demo: "https://helpinoffline.vercel.app/",
        github: "#"
      }
    },
    {
      id: 2,
      title: "Neeharika Mam",
      description: "A personal portfolio or professional website.",
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["React", "Portfolio", "Personal Website"],
      category: "webapp",
      links: {
        demo: "https://neeharikamam.vercel.app/",
        github: "#"
      }
    },
    {
      id: 3,
      title: "Rio World Rust",
      description: "A project related to the Rio World, possibly a game or simulation.",
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Rust", "Game Development", "Simulation"],
      category: "game",
      links: {
        demo: "https://rio-world-rust.vercel.app/",
        github: "#"
      }
    },
    {
      id: 4,
      title: "Bike Mechanic",
      description: "An application for bike mechanics or enthusiasts.",
      image: "https://images.pexels.com/photos/380782/pexels-photo-380782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Web Development", "Mechanic", "Automotive"],
      category: "webapp",
      links: {
        demo: "https://bike-mechanic.vercel.app/",
        github: "#"
      }
    },
    {
      id: 5,
      title: "Raf Dusky",
      description: "A creative or artistic project with a unique name.",
      image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Creative", "Design", "Art"],
      category: "design",
      links: {
        demo: "https://raf-dusky.vercel.app/",
        github: "#"
      }
    },
    {
      id: 6,
      title: "Hackethics138",
      description: "A project related to hacking ethics or cybersecurity.",
      image: "https://images.pexels.com/photos/5380650/pexels-photo-5380650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Cybersecurity", "Ethics", "Hacking"],
      category: "ai",
      links: {
        demo: "https://hackethics138.vercel.app/",
        github: "#"
      }
    },
    {
      id: 7,
      title: "Arun Eosin",
      description: "A project with a unique and intriguing name.",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Web Development", "Creative", "Unique"],
      category: "webapp",
      links: {
        demo: "https://arun-eosin.vercel.app/",
        github: "#"
      }
    },
    {
      id: 8,
      title: "Hospi Omega",
      description: "A hospital management or healthcare related application.",
      image: "https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Healthcare", "Management", "Web Application"],
      category: "webapp",
      links: {
        demo: "https://hospi-omega.vercel.app/",
        github: "#"
      }
    },
    {
      id: 9,
      title: "Harsh Edu",
      description: "An educational platform or e-learning solution.",
      image: "https://images.pexels.com/photos/4145353/pexels-photo-4145353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Education", "E-learning", "Platform"],
      category: "webapp",
      links: {
        demo: "https://harsh-edu.vercel.app/",
        github: "#"
      }
    },
    {
      id: 10,
      title: "Hotel Booking",
      description: "A hotel booking system or travel application.",
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Travel", "Booking", "Web Application"],
      category: "webapp",
      links: {
        demo: "https://hotelbooking-mu-nine.vercel.app/",
        github: "#"
      }
    },
    {
      id: 11,
      title: "Rio Deepfake",
      description: "A project exploring deepfake technology, possibly related to video or image manipulation.",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["AI", "Deepfake", "Machine Learning"],
      category: "ai",
      links: {
        demo: "https://riodeepfake.vercel.app/",
        github: "#"
      }
    },
    {
      id: 12,
      title: "Duofit",
      description: "A fitness or health-related application.",
      image: "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Fitness", "Health", "Mobile App"],
      category: "webapp",
      links: {
        demo: "https://duofit.vercel.app/",
        github: "#"
      }
    },
    {
      id: 13,
      title: "Jaspreethira",
      description: "A personal or creative project with a unique name.",
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Personal", "Creative", "Web Development"],
      category: "webapp",
      links: {
        demo: "https://jaspreethira.vercel.app/",
        github: "#"
      }
    },
    {
      id: 14,
      title: "Iwatch Opal",
      description: "A project related to smartwatches or wearable technology.",
      image: "https://images.pexels.com/photos/437038/pexels-photo-437038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Wearable Tech", "Smartwatch", "IoT"],
      category: "webapp",
      links: {
        demo: "https://iwatch-opal.vercel.app/",
        github: "#"
      }
    },
    {
      id: 15,
      title: "Gamics Theta",
      description: "A project combining gaming and comics.",
      image: "https://images.pexels.com/photos/163036/mario-bros-super-mario-nitendo-game-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Gaming", "Comics", "Entertainment"],
      category: "game",
      links: {
        demo: "https://gamics-theta.vercel.app/",
        github: "#"
      }
    },
    {
      id: 16,
      title: "Gaming Zone Henna",
      description: "A platform or community for gamers.",
      image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Gaming", "Community", "Platform"],
      category: "game",
      links: {
        demo: "https://gaming-zone-henna.vercel.app/",
        github: "#"
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