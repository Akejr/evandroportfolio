import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { FolderOpen, ArrowRight, ArrowUp } from 'lucide-react';
import { useTranslation } from '../contexts/TranslationContext';

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'DEV' | 'UI/UX'>('DEV');
  const [showAll, setShowAll] = useState(false);
  const { t } = useTranslation();

  const devProjects = [
    {
      id: 1,
      title: 'DOT Angola',
      description: t('projects.dotangola.description'),
      image: '/images/dotangola.png',
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
      link: 'https://www.dotangola.com',
      github: 'https://github.com/Akejr/DOT-Angola'
    },
    {
      id: 2,
      title: 'Minimalist.fit',
      description: t('projects.minimalist.description'),
      image: '/images/minimalistfit.png',
      tags: ['React', 'TypeScript', 'Vite', 'Supabase'],
      link: 'https://diettracker-five.vercel.app/',
      github: 'https://github.com/Akejr/diettracker'
    }
  ];

  const uiuxProjects = [
    {
      id: 4,
      title: 'Navegante - Study Case',
      description: t('projects.navegante.description'),
      image: '/images/Navegante.png',
      tags: ['UI/UX Design', 'Figma', 'User Research'],
      link: 'https://www.behance.net/evandrocasanova',
      github: undefined
    },
    {
      id: 5,
      title: 'Social Riot Games - UI Design',
      description: t('projects.socialriot.description'),
      image: '/images/Social Riot.png',
      tags: ['UI Design', 'Gaming UX', 'Figma'],
      link: 'https://www.behance.net/evandrocasanova',
      github: undefined
    },
    {
      id: 6,
      title: 'ZAP Cinemas | UI Design',
      description: t('projects.zapcinemas.description'),
      image: '/images/ZAP cinemas.png',
      tags: ['UI Design', 'Mobile UX', 'Figma'],
      link: 'https://www.behance.net/evandrocasanova',
      github: undefined
    },
    {
      id: 7,
      title: 'YetuBIT Exchange',
      description: t('projects.yetubit.description'),
      image: '/images/yetubit.png',
      tags: ['Fintech UX', 'UI Design', 'Figma'],
      link: 'https://www.behance.net/evandrocasanova',
      github: undefined
    }
  ];

  const currentProjects = activeTab === 'DEV' ? devProjects : uiuxProjects;
  const displayedProjects = showAll ? currentProjects : currentProjects.slice(0, 3);
  const hasMoreProjects = currentProjects.length > 3;

  const handleToggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <section id="projects" className="py-20 px-4 relative">
      {/* Background glow effect similar to Hero */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/5 via-transparent to-transparent"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Header com toggle DEV/UI/UX */}
        <div className="flex items-center mb-12">
          <FolderOpen size={24} className="mr-2" />
          <h2 className="text-2xl font-bold mr-4">{t('projects.title')}</h2>
          
          {/* Toggle buttons */}
          <div className="flex bg-gray-800/50 rounded-lg p-1 border border-gray-700/50">
            <button
              onClick={() => setActiveTab('DEV')}
              className={`px-3 py-1 text-sm font-medium rounded-md transition-all duration-300 ${
                activeTab === 'DEV' 
                  ? 'bg-[#0bbbd0] text-white' 
                  : 'text-gray-400 hover:text-[#0bbbd0]'
              }`}
            >
              &lt;/ DEV&gt;
            </button>
            <button
              onClick={() => setActiveTab('UI/UX')}
              className={`px-3 py-1 text-sm font-medium rounded-md transition-all duration-300 ${
                activeTab === 'UI/UX' 
                  ? 'bg-[#0bbbd0] text-white' 
                  : 'text-gray-400 hover:text-[#0bbbd0]'
              }`}
            >
              UI/UX
            </button>
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${showAll ? 'xl:grid-cols-4' : ''} gap-8`}>
          {displayedProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Botão Ver Todos / Ver Menos */}
        {hasMoreProjects && (
          <div className="flex justify-center mt-12">
            <button
              onClick={handleToggleShowAll}
              className="flex items-center bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 transition-all duration-300 px-6 py-3 rounded-lg backdrop-blur-sm border border-white/10 shadow-lg hover:shadow-cyan-500/25 group"
            >
              <span className="font-medium text-white mr-2">
                {showAll ? t('projects.seeLess') : t('projects.seeAll')}
              </span>
              {showAll ? (
                <ArrowUp size={18} className="text-[#0bbbd0] transition-transform duration-300 group-hover:-translate-y-1" />
              ) : (
                <ArrowRight size={18} className="text-[#0bbbd0] transition-transform duration-300 group-hover:translate-x-1" />
              )}
            </button>
          </div>
        )}

        {/* Estatísticas quando mostrar todos */}
        {showAll && (
          <div className="mt-8 text-center">
            <p className="text-gray-400">
              {t('projects.showing')} {currentProjects.length} {currentProjects.length > 1 ? t('projects.projects') : t('projects.project')} {t('projects.of')} <span className="text-[#0bbbd0]">{activeTab}</span>
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;