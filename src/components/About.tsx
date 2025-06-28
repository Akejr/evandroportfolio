import React from 'react';
import { User } from 'lucide-react';
import { useTranslation } from '../contexts/TranslationContext';

const About: React.FC = () => {
  const { t } = useTranslation();

  const createHighlightedText = (text: string) => {
    return text
      .replace(/Evandro Casanova/gi, `<span class="text-[#0bbbd0] font-semibold">${t('highlight.evandro')}</span>`)
      .replace(/Desenvolvedor Web|Web Developer|Desarrollador Web/gi, `<span class="text-[#0bbbd0] font-semibold">${t('highlight.webdev')}</span>`)
      .replace(/UI Designer|Diseñador UI/gi, `<span class="text-[#0bbbd0] font-semibold">${t('highlight.uidesigner')}</span>`)
      .replace(/4 anos de experiência|4 years of experience|4 años de experiencia/gi, `<span class="text-[#0bbbd0] font-semibold">${t('highlight.experience')}</span>`)
      .replace(/freelancer/gi, `<span class="text-[#0bbbd0] font-semibold">${t('highlight.freelancer')}</span>`)
      .replace(/criar soluções criativas e funcionais|creating creative and functional solutions|crear soluciones creativas y funcionales/gi, `<span class="text-[#0bbbd0] font-semibold">${t('highlight.creative')}</span>`)
      .replace(/design|diseño/gi, `<span class="text-[#0bbbd0] font-semibold">${t('highlight.design')}</span>`)
      .replace(/tecnologia|technology|tecnología/gi, `<span class="text-[#0bbbd0] font-semibold">${t('highlight.technology')}</span>`)
      .replace(/interfaces intuitivas|intuitive interfaces|interfaces intuitivas/gi, `<span class="text-[#0bbbd0] font-semibold">${t('highlight.interfaces')}</span>`)
      .replace(/aplicações|applications|aplicaciones/gi, `<span class="text-[#0bbbd0] font-semibold">${t('highlight.applications')}</span>`)
      .replace(/desempenho|performance|rendimiento/gi, `<span class="text-[#0bbbd0] font-semibold">${t('highlight.performance')}</span>`)
      .replace(/usabilidade|usability/gi, `<span class="text-[#0bbbd0] font-semibold">${t('highlight.usability')}</span>`)
      .replace(/centrada no usuário|user-centered|centrado en el usuario/gi, `<span class="text-[#0bbbd0] font-semibold">${t('highlight.usercentered')}</span>`)
      .replace(/superar expectativas|exceed expectations|superar expectativas/gi, `<span class="text-[#0bbbd0] font-semibold">${t('highlight.exceed')}</span>`);
  };

  return (
    <section id="about" className="py-20 px-4 bg-zinc-900">
      <div className="container mx-auto">
        <div className="flex items-center mb-12">
          <User size={24} className="mr-2" />
          <h2 className="text-2xl font-bold">{t('about.title')}</h2>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-2/3">
            <p className="mb-6 text-lg leading-relaxed" 
               dangerouslySetInnerHTML={{ __html: createHighlightedText(t('about.text1')) }}
            />
            <p className="mb-6 text-lg leading-relaxed" 
               dangerouslySetInnerHTML={{ __html: createHighlightedText(t('about.text2')) }}
            />
            <p className="mb-6 text-lg leading-relaxed" 
               dangerouslySetInnerHTML={{ __html: createHighlightedText(t('about.text3')) }}
            />
            <p className="text-xl font-medium mt-8">
              {t('about.cta')}
            </p>
          </div>
          <div className="lg:w-1/3">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-[#0bbbd0] mx-auto relative shadow-2xl shadow-cyan-500/25">
                            <img 
                src="/images/Profile.JPEG" 
                alt="Evandro Casanova" 
                className="w-full h-full object-cover select-none"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                loading="eager"
                decoding="sync"
                style={{
                  transform: 'scale(1)',
                  objectPosition: '0% 33%',
                  imageRendering: 'auto',
                  filter: 'grayscale(100%) contrast(1.05) brightness(1.02)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  userSelect: 'none',
                  WebkitUserSelect: 'none',
                  WebkitTouchCallout: 'none',
                  WebkitUserDrag: 'none',
                  KhtmlUserSelect: 'none',
                  MozUserSelect: 'none',
                  msUserSelect: 'none',
                  pointerEvents: 'none'
                } as React.CSSProperties}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;