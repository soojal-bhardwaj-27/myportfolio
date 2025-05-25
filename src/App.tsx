import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
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
      <div className="relative font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
        {/* Test Element */}

        <Navbar activeSection={activeSection} />
        <main className="relative z-10">
          <section id="home" className="min-h-screen bg-opacity-50 bg-gray-100 dark:bg-opacity-50 dark:bg-gray-800">
            <Hero />
          </section>
          <section id="about" className="min-h-screen bg-white dark:bg-gray-900">
            <About />
          </section>
          <section id="skills" className="min-h-screen bg-opacity-50 bg-gray-100 dark:bg-opacity-50 dark:bg-gray-800">
            <Skills />
          </section>
          <section id="projects" className="min-h-screen bg-white dark:bg-gray-900">
            <Projects />
          </section>
          <section id="contact" className="min-h-screen bg-opacity-50 bg-gray-100 dark:bg-opacity-50 dark:bg-gray-800">
            <Contact />
          </section>
        </main>
        <div className="relative">
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;