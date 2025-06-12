import React from 'react';
import { Mail, Github, Linkedin, Instagram } from 'lucide-react';
import { useTranslation } from '../contexts/TranslationContext';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="min-h-screen pt-20 flex flex-col justify-center items-center text-center px-4 relative">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent"></div>
      
      <div className="relative z-10">
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-[#0bbbd0] mb-8 mx-auto relative shadow-2xl shadow-cyan-500/25">
          <img 
            src="/images/Profile.JPEG" 
            alt="Evandro Casanova" 
            className="w-full h-full object-cover"
            onContextMenu={(e) => e.preventDefault()}
            style={{
              transform: 'scale(3.0)',
              objectPosition: 'center -10%'
            }}
          />
        </div>
      </div>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent max-w-4xl">
        <span dangerouslySetInnerHTML={{
          __html: t('hero.title')
            .replace(/experiências digitais|digital experiences|experiencias digitales/gi, '<span class="bg-gradient-to-r from-[#0bbbd0] to-cyan-400 bg-clip-text text-transparent">$&</span>')
            .replace(/interfaces/gi, '<span class="bg-gradient-to-r from-[#0bbbd0] to-cyan-400 bg-clip-text text-transparent">$&</span>')
        }} />
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-12 leading-relaxed">
        {t('hero.subtitle')}
      </p>

      <div className="flex flex-wrap justify-center gap-6 mb-12">
        <a 
          href="mailto:evandrocasanovs@gmail.com" 
          className="flex items-center bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 transition-all duration-300 px-6 py-3 rounded-lg backdrop-blur-sm border border-white/10 shadow-lg"
        >
          <Mail size={18} className="mr-2" />
          {t('hero.contact')}
        </a>
        <div className="flex space-x-4">
          <a 
            href="https://github.com/Akejr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 transition-all duration-300 p-3 rounded-lg backdrop-blur-sm border border-white/10 shadow-lg"
          >
            <Github size={24} className="text-[#0bbbd0]" />
          </a>
          <a 
            href="https://www.linkedin.com/in/evandrocasanova" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 transition-all duration-300 p-3 rounded-lg backdrop-blur-sm border border-white/10 shadow-lg"
          >
            <Linkedin size={24} className="text-[#0bbbd0]" />
          </a>
          <a 
            href="https://instagram.com/ecasanovs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 transition-all duration-300 p-3 rounded-lg backdrop-blur-sm border border-white/10 shadow-lg"
          >
            <Instagram size={24} className="text-[#0bbbd0]" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;