import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="relative font-sans text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300 selection:bg-teal-500 selection:text-white">
        
        {/* Modern Background Effects */}
        <div className="fixed inset-0 z-[-1] bg-gray-50 dark:bg-gray-950 transition-colors duration-500">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob dark:opacity-10 dark:bg-teal-800"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-accent-light rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000 dark:opacity-10 dark:bg-accent-dark"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000 dark:opacity-10 dark:bg-purple-900"></div>
        </div>

        <Navbar activeSection={activeSection} />
        <main className="relative z-10 pt-16">
          <section id="home" className="min-h-screen">
            <Hero />
          </section>
          <section id="about" className="min-h-screen">
            <About />
          </section>
          <section id="skills" className="min-h-screen">
            <Skills />
          </section>
          <section id="projects" className="min-h-screen pt-10">
            <Projects />
          </section>
          <section id="contact" className="min-h-screen">
            <Contact />
          </section>
        </main>
        <div className="relative z-10 border-t border-gray-200 dark:border-gray-800">
          <Footer />
        </div>
        <Chatbot />
      </div>
    </ThemeProvider>
  );
}

export default App;