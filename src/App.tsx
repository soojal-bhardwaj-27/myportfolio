import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import BottomInfo from './components/BottomInfo';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import CustomCursor from './components/ui/CustomCursor';

function App() {
  return (
    <div className="font-sans text-black min-h-screen bg-cream selection:bg-orange selection:text-black">
      <Header />
      <main>
        <Hero />
        <About />
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