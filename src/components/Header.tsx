import React, { useState, useEffect } from 'react';
import { Brackets as CodeBrackets, Globe } from 'lucide-react';
import { useTranslation, Language } from '../contexts/TranslationContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showLanguages, setShowLanguages] = useState(false);
  const { language, setLanguage, t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detectar seção ativa
      const sections = ['home', 'projects', 'about'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setShowLanguages(false);
  };

  const getLanguageLabel = (lang: Language) => {
    switch (lang) {
      case 'pt': return 'PT';
      case 'en': return 'EN';
      case 'es': return 'ES';
      default: return 'PT';
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-5 px-4 sm:px-8 ${
        isScrolled ? 'bg-black/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <button 
          onClick={scrollToTop}
          className="flex items-center hover:scale-105 transition-transform duration-300"
        >
          <span className="text-2xl sm:text-3xl font-bold">
            <span className="text-white">{`{`}</span>
            <span className="text-[#0bbbd0]">E</span>
            <span className="text-white">{`}`}</span>
          </span>
        </button>
        
        <nav className="flex items-center space-x-2 sm:space-x-10">
          <ul className="flex space-x-3 sm:space-x-10">
            <li>
              <button 
                onClick={() => scrollToSection('home')}
                className={`hover:text-[#0bbbd0] transition-all duration-300 relative text-sm sm:text-lg ${
                  activeSection === 'home' 
                    ? 'text-[#0bbbd0] font-medium' 
                    : 'text-white'
                }`}
              >
                {t('nav.home')}
                {activeSection === 'home' && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#0bbbd0] rounded-full"></span>
                )}
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('projects')}
                className={`hover:text-[#0bbbd0] transition-all duration-300 relative text-sm sm:text-lg ${
                  activeSection === 'projects' 
                    ? 'text-[#0bbbd0] font-medium' 
                    : 'text-white'
                }`}
              >
                {t('nav.projects')}
                {activeSection === 'projects' && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#0bbbd0] rounded-full"></span>
                )}
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('about')}
                className={`hover:text-[#0bbbd0] transition-all duration-300 relative text-sm sm:text-lg ${
                  activeSection === 'about' 
                    ? 'text-[#0bbbd0] font-medium' 
                    : 'text-white'
                }`}
              >
                {t('nav.about')}
                {activeSection === 'about' && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#0bbbd0] rounded-full"></span>
                )}
              </button>
            </li>
          </ul>
          
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setShowLanguages(!showLanguages)}
              className="flex items-center space-x-1 sm:space-x-3 text-white hover:text-[#0bbbd0] transition-all duration-300 bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 px-2 sm:px-5 py-1.5 sm:py-3 rounded-lg border border-white/10 shadow-lg hover:shadow-cyan-500/25 backdrop-blur-sm group"
            >
              <Globe size={12} className="sm:w-5 sm:h-5 transition-transform duration-300 group-hover:rotate-12" />
              <span className="text-xs sm:text-base font-medium min-w-[20px] sm:min-w-[32px]">{getLanguageLabel(language)}</span>
              <svg 
                className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 ${showLanguages ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {showLanguages && (
              <div className="absolute top-full right-0 mt-2 bg-zinc-900/95 backdrop-blur-sm border border-white/10 rounded-lg shadow-xl py-2 min-w-[120px] sm:min-w-[140px] z-50 animate-in fade-in-0 zoom-in-95 duration-200">
                {(['pt', 'en', 'es'] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => handleLanguageChange(lang)}
                    className={`w-full text-left px-4 py-2.5 text-xs sm:text-sm hover:bg-white/10 transition-all duration-200 flex items-center space-x-2 ${
                      language === lang ? 'text-[#0bbbd0] font-medium bg-white/5' : 'text-white'
                    }`}
                  >
                    <span className="text-base">
                      {lang === 'pt' && '🇧🇷'}
                      {lang === 'en' && '🇺🇸'}
                      {lang === 'es' && '🇪🇸'}
                    </span>
                    <span className="hidden sm:inline">
                      {lang === 'pt' && 'Português'}
                      {lang === 'en' && 'English'}
                      {lang === 'es' && 'Español'}
                    </span>
                    <span className="sm:hidden">
                      {lang === 'pt' && 'PT'}
                      {lang === 'en' && 'EN'}
                      {lang === 'es' && 'ES'}
                    </span>
                    {language === lang && (
                      <svg className="w-3 h-3 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;