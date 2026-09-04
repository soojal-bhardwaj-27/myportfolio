import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import BottomInfo from './components/BottomInfo';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import CustomCursor from './components/ui/CustomCursor';
import { useState, useEffect } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState<'hero' | 'about'>('hero');

  useEffect(() => {
    const handleScroll = () => {
      // Trigger the transition when scrolled past 200px.
      // Once it transitions to 'about', it stays there permanently (no reverse animation).
      if (window.scrollY > 200) {
        setActiveSection('about');
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans text-black min-h-screen bg-cream selection:bg-orange selection:text-black">
      <Header />
      <main>
        <Hero showImage={activeSection === 'hero'} />
        <About showImage={activeSection === 'about'} />
        <Resume />
        <BottomInfo />
      </main>
      <Footer />
      <Chatbot />
      <CustomCursor />
    </div>
  );
}

export default App;