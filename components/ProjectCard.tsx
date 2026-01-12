
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="glass glass-hover block w-full p-4 rounded-2xl mb-4 transition-all duration-300 ease-out flex items-center space-x-4 group"
    >
      <div className="text-3xl transition-transform duration-300 group-hover:scale-110">
        {project.icon}
      </div>
      <div className="flex-1 text-left">
        <h3 className="text-white font-bold text-lg">{project.name}</h3>
        <p className="text-white/70 text-sm leading-tight mt-1">{project.description}</p>
      </div>
      <div className="text-white/50 group-hover:text-white transition-colors">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </a>
  );
};

export default ProjectCard;
