import React from 'react';
import { Mail, Linkedin, FileText } from 'lucide-react';
import { useTranslation } from '../contexts/TranslationContext';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">{t('contact.title')}</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          <span dangerouslySetInnerHTML={{
            __html: t('contact.subtitle')
              .replace(/Desenvolvimento Web|Web Development|Desarrollo Web/gi, '<span class="text-[#0bbbd0]">$&</span>')
              .replace(/UI\/UX Design/gi, '<span class="text-[#0bbbd0]">$&</span>')
          }} />
          <br />
          {t('contact.cta')}
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <a 
            href="mailto:evandrocasanovs@gmail.com" 
            className="flex items-center bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 transition-all duration-300 px-6 py-3 rounded-lg backdrop-blur-sm border border-white/10 shadow-lg"
          >
            <Mail size={18} className="mr-2" />
            {t('contact.email')}
          </a>
          <div className="flex space-x-4">
            <a 
              href="https://www.linkedin.com/in/evandrocasanova" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 transition-all duration-300 p-3 rounded-lg backdrop-blur-sm border border-white/10 shadow-lg"
              title={t('contact.linkedin')}
            >
              <Linkedin size={24} className="text-[#0bbbd0]" />
            </a>
            <a 
              href="#" 
              className="bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 transition-all duration-300 p-3 rounded-lg backdrop-blur-sm border border-white/10 shadow-lg"
              title={t('contact.resume')}
            >
              <FileText size={24} className="text-[#0bbbd0]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;