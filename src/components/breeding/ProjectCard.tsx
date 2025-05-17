import React from 'react';
import { Timer, X } from 'lucide-react';
import { BreedingProject } from './types';

interface ProjectCardProps {
  project: BreedingProject;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-gray-700 rounded-lg p-4">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2">
          <Timer className="h-5 w-5 text-blue-400" />
          <span className="font-medium">{project.status}</span>
        </div>
        <button className="text-gray-400 hover:text-red-400 transition-colors">
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between text-sm text-gray-300">
          <span>Parents: {project.parent1.name} × {project.parent2.name}</span>
          <span>{project.apInvested} AP</span>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-300">Progress</span>
            <span>{project.progress}%</span>
          </div>
          <div className="w-full bg-gray-600 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full"
              style={{ width: `${project.progress}%` }}
            ></div>
          </div>
          <div className="text-right text-sm text-gray-400 mt-1">
            {project.timeRemaining} left
          </div>
        </div>

        <div className="text-sm text-gray-300">
          Expected Fry: {project.expectedFry}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;