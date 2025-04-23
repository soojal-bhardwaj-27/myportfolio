import React, { useEffect, useState, useRef } from 'react';

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  level: number; // 0-100
  color: string;
}

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend",
      skills: [
        { name: "React.js", level: 90, color: "from-blue-500 to-blue-600" },
        { name: "HTML/CSS", level: 95, color: "from-orange-500 to-orange-600" },
        { name: "JavaScript", level: 85, color: "from-yellow-500 to-yellow-600" },
        { name: "Tailwind CSS", level: 90, color: "from-teal-500 to-teal-600" },
        { name: "UI/UX Design", level: 85, color: "from-purple-500 to-purple-600" }
      ]
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", level: 80, color: "from-green-500 to-green-600" },
        { name: "MongoDB", level: 75, color: "from-green-600 to-green-700" },
        { name: "Express.js", level: 80, color: "from-gray-600 to-gray-700" },
        { name: "RESTful APIs", level: 85, color: "from-blue-600 to-blue-700" },
        { name: "Socket.io", level: 70, color: "from-gray-700 to-gray-800" }
      ]
    },
    {
      name: "Design",
      skills: [
        { name: "Figma", level: 90, color: "from-purple-500 to-purple-600" },
        { name: "Illustrator", level: 85, color: "from-orange-500 to-orange-600" },
        { name: "InDesign", level: 75, color: "from-pink-500 to-pink-600" },
        { name: "UI Prototyping", level: 85, color: "from-blue-500 to-blue-600" },
        { name: "DaVinci Resolve", level: 70, color: "from-gray-700 to-gray-800" }
      ]
    },
    {
      name: "Other",
      skills: [
        { name: "Git/GitHub", level: 80, color: "from-gray-700 to-gray-800" },
        { name: "TensorFlow", level: 65, color: "from-orange-500 to-orange-600" },
        { name: "Game Development", level: 75, color: "from-red-500 to-red-600" },
        { name: "Responsive Design", level: 90, color: "from-green-500 to-green-600" },
        { name: "AI Integration", level: 70, color: "from-purple-600 to-purple-700" }
      ]
    }
  ];
  
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

  return (
    <div 
      ref={sectionRef}
      className={`py-20 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            A comprehensive overview of my technical expertise and creative capabilities.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Skill Category Tabs */}
          <div className="flex flex-wrap justify-center mb-8 space-x-2">
            {skillCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 mb-2
                  ${activeTab === index 
                    ? 'bg-teal-500 text-white' 
                    : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Skill Bars */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-6">{skillCategories[activeTab].name} Skills</h3>
            
            <div className="space-y-6">
              {skillCategories[activeTab].skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Skills Grid Overview */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-6 text-center">Technologies & Tools</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              "JavaScript", "TypeScript", "React", "Node.js", 
              "MongoDB", "Express", "HTML5", "CSS3", 
              "Tailwind CSS", "Socket.io", "Git", "Figma",
              "Illustrator", "InDesign", "TensorFlow", "OpenCV"
            ].map((tech, index) => (
              <div 
                key={index}
                className={`py-3 px-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 
                  dark:border-gray-700 text-center shadow-sm hover:shadow-md transition-all duration-300
                  transform hover:-translate-y-1
                  ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                style={{ transitionDelay: `${index * 50}ms`, transitionDuration: "500ms" }}
              >
                <span className="font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;