import React from 'react';
import EducationItem from './EducationItem';
import { GraduationCap } from 'lucide-react';
import { useTranslation } from '../contexts/TranslationContext';

const Education: React.FC = () => {
  const { t } = useTranslation();

  const educations = [
    {
      id: 1,
      institution: 'Universidade de Lisboa',
      degree: t('education.uiux.degree'),
      location: t('education.uiux.location'),
      period: t('education.uiux.period'),
      description: t('education.uiux.description')
    },
    {
      id: 2,
      institution: 'Universidade de Luanda',
      degree: t('education.cs.degree'),
      location: t('education.cs.location'),
      period: t('education.cs.period'),
      description: t('education.cs.description')
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="flex items-center mb-12">
          <GraduationCap size={24} className="mr-2" />
          <h2 className="text-2xl font-bold">{t('education.title')}</h2>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-3.5 top-0 h-full w-0.5 bg-zinc-700"></div>
          
          {/* Education items */}
          <div className="space-y-12">
            {educations.map(education => (
              <EducationItem key={education.id} education={education} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 