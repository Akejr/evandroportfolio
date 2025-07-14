import React from 'react';
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
  return (
    <TranslationProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden">
        {/* Background gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-gray-900/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5"></div>
        
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