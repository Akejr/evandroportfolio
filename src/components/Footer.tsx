import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-6 px-4 mt-20 border-t border-zinc-800/50">
      <div className="container mx-auto text-center">
        <p className="text-gray-400 text-sm sm:text-base">
          {t('footer.text')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;