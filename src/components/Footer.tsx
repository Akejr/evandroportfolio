import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-8 px-4 border-t border-zinc-800">
      <div className="container mx-auto text-center text-gray-400 text-sm">
        <p>{t('footer.text')}</p>
      </div>
    </footer>
  );
};

export default Footer;