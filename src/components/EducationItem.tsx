import React from 'react';

interface Education {
  id: number;
  institution: string;
  degree: string;
  location: string;
  period: string;
  description: string;
}

interface EducationItemProps {
  education: Education;
}

const EducationItem: React.FC<EducationItemProps> = ({ education }) => {
  return (
    <div className="relative pl-10">
      {/* Timeline circle */}
      <div className="absolute left-0 top-1.5 w-7 h-7 rounded-full bg-[#0bbbd0] flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-black"></div>
      </div>
      
      <div>
        <div className="mb-1">
          <h3 className="text-lg font-semibold text-[#0bbbd0]">{education.degree}</h3>
          <h4 className="text-base font-medium">{education.location}</h4>
          <p className="text-sm text-gray-400">{education.period}</p>
        </div>
        <p className="text-gray-300">{education.description}</p>
      </div>
    </div>
  );
};

export default EducationItem; 