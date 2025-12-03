import React, { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { TranslationProvider } from './contexts/TranslationContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Education from './components/Education';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <TranslationProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden">
        {/* Background gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-gray-900/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5"></div>
        
        {/* Mouse-following light effect with animated glow */}
        <div 
          className="pointer-events-none fixed z-30 mouse-light-glow"
          style={{
            left: `${mousePosition.x - 30}px`,
            top: `${mousePosition.y - 30}px`,
            width: '60px',
            height: '60px',
            background: 'radial-gradient(circle, rgba(11, 187, 208, 0.6), rgba(6, 182, 212, 0.3) 50%, transparent 80%)',
            filter: 'blur(20px)',
            transition: 'left 0.3s ease-out, top 0.3s ease-out',
          }}
        />
        
        <Header />
        <main className="relative z-10">
          <Hero />
          <Projects />
          <Education />
          <About />
          <Contact />
        </main>
        <Footer />
        <Analytics />
      </div>
    </TranslationProvider>
  );
}

export default App;