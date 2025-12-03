import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useTranslation } from '../contexts/TranslationContext';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation();

  const handleCardClick = (e: React.MouseEvent) => {
    // Não expandir se clicar nos links
    if ((e.target as HTMLElement).closest('a')) {
      return;
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="group relative h-full">
      {/* Card com altura uniforme e expansão no hover/click */}
      <div 
        onClick={handleCardClick}
        className={`bg-gradient-to-r from-white/10 to-white/5 hover:from-white/15 hover:to-white/10 transition-all duration-500 backdrop-blur-sm border border-white/10 rounded-xl shadow-lg shadow-black/25 hover:shadow-cyan-500/20 hover:border-white/20 overflow-hidden h-full flex flex-col md:hover:scale-105 md:hover:z-10 cursor-pointer ${
          isExpanded ? 'scale-105 z-10 from-white/15 to-white/10 shadow-cyan-500/20 border-white/20' : ''
        }`}
      >
        
        {/* Image com altura maior e bem encaixada */}
        <div className="relative overflow-hidden h-56 flex-shrink-0">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            style={{
              objectPosition: (project.title === 'ApostAI' || project.title === 'DOT Angola' || project.title === 'Sou Piloto') ? 'center 35%' : 'center'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          
          {/* Indicador de "toque para expandir" no mobile */}
          <div className="md:hidden absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full text-[10px] text-cyan-300 border border-cyan-500/30">
            {isExpanded ? t('projectCard.tapToClose') : t('projectCard.tapToReadMore')}
          </div>
        </div>
        
        {/* Content com espaçamento reduzido */}
        <div className="p-4 flex flex-col flex-grow">
          <h3 className={`text-lg font-bold bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent group-hover:from-[#0bbbd0] group-hover:to-cyan-400 transition-all duration-500 mb-2 ${
            isExpanded ? 'from-[#0bbbd0] to-cyan-400' : ''
          }`}>
            {project.title}
          </h3>
          
          {/* Descrição que expande no hover (desktop) ou click (mobile) */}
          <p className={`text-gray-300 leading-relaxed text-xs mb-3 flex-grow transition-all duration-300 ${
            isExpanded ? 'line-clamp-none' : 'line-clamp-3 md:group-hover:line-clamp-none'
          }`}>
            {project.description}
          </p>
          
          {/* Tags com espaçamento reduzido */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags.map((tag, index) => (
              <span 
                key={index} 
                className="text-xs text-cyan-300 bg-gradient-to-r from-white/10 to-white/5 px-2 py-0.5 rounded-full border border-white/10 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Action buttons sempre no final */}
          <div className="flex gap-2 mt-auto">
            <a 
              href={project.link} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 transition-all duration-300 px-3 py-1.5 rounded-lg backdrop-blur-sm border border-white/10 shadow-lg text-xs group/link"
            >
              <span className="font-medium text-white">{t('projectCard.viewProject')}</span>
              <ExternalLink size={12} className="ml-1.5 text-[#0bbbd0] transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
            </a>
            
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 transition-all duration-300 p-1.5 rounded-lg backdrop-blur-sm border border-white/10 shadow-lg"
              >
                <Github size={16} className="text-[#0bbbd0]" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;