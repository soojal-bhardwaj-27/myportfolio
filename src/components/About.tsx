import React, { useEffect, useRef } from 'react';
import { BarChart3, BookOpen, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface TimelineItemProps {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  isLeft?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  subtitle,
  description,
  isLeft = false,
}) => (
  <div className={`flex ${isLeft ? 'md:justify-end' : 'md:justify-start'} relative mb-8`}>
    <div className="hidden md:block absolute top-0 left-1/2 w-px h-full bg-gray-300 dark:bg-gray-700 -translate-x-1/2 z-0"></div>

    <div className={`md:w-5/12 relative z-10 ${isLeft ? 'md:text-right' : ''}`}>
      <div className="p-5 rounded-lg shadow-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <span className="inline-block px-3 py-1 text-xs font-medium bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-100 rounded-full mb-2">
          {year}
        </span>
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <h4 className="text-gray-600 dark:text-gray-300 font-medium mb-2">{subtitle}</h4>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>

      <div className="hidden md:block absolute top-6 w-4 h-4 rounded-full bg-teal-500 z-20 transform -translate-y-1/2 border-2 border-white dark:border-gray-900 animate-pulse left-[99%]"></div>
    </div>
  </div>
);

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
    <div className="rounded-full bg-teal-100 dark:bg-teal-900/40 p-3 inline-flex mb-4">
      <Icon className="h-6 w-6 text-teal-600 dark:text-teal-300" />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400">{description}</p>
  </div>
);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="py-20 opacity-0 translate-y-10 transition-all duration-1000">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            I'm a creative and driven Full-Stack Developer and UI/UX Designer currently
            pursuing my final year of BCA at Raffles University. My passion lies in
            turning innovative ideas into exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <FeatureCard
            icon={BarChart3}
            title="Experience & Skills"
            description="With expertise in React, Node.js, and UI/UX design, I blend technical knowledge with a keen eye for aesthetics."
          />
          <FeatureCard
            icon={Sparkles}
            title="Creative Approach"
            description="I love solving complex problems and creating intuitive interfaces that make technology accessible and enjoyable."
          />
          <FeatureCard
            icon={BookOpen}
            title="Continuous Learning"
            description="Always exploring new technologies, especially in AI, game development, and educational tech."
          />
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-10">My Journey</h3>
          <div className="relative">
            <div className="md:hidden absolute top-0 left-4 bottom-0 w-px bg-gray-300 dark:bg-gray-700"></div>

            <div className="pl-10 md:pl-0 md:flex md:flex-col md:items-center">
              <TimelineItem
                year="2023 - Present"
                title="BCA Student"
                subtitle="Raffles University"
                description="Pursuing my Bachelor's in Computer Applications with a focus on modern development practices and design principles."
              />
              <TimelineItem
                year="2023"
                title="UI/UX Design Intern"
                subtitle="freelancer"
                description="Worked on real-world design and development projects, explored AI in UI/UX, and built complete UI designs for websites."
                isLeft={true}
              />
              <TimelineItem
                year="2022 - 2023"
                title="Freelance Developer"
                subtitle="Self-employed"
                description="Built custom web applications, games, and educational tools for various clients, focusing on clean code and intuitive UIs."
              />
              <TimelineItem
                year="2020 - 2021"
                title="Self-taught Developer"
                subtitle="Online Learning"
                description="Learned web development, UI/UX design, and programming fundamentals through courses, tutorials, and personal projects."
                isLeft={true}
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            Whether it's crafting smooth user interfaces, coding robust backend logic, or designing
            engaging user experiences, I bring a passion for building and improving with every
            project I take on.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
