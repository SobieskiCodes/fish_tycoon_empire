import React from 'react';
import { Timer } from 'lucide-react';

type Project = {
  title: string;
  location: string;
  progress: number;
  timeRemaining: string;
};

const OngoingProjects: React.FC = () => {
  const projects: Project[] = [
    { 
      title: 'Guppy Breeding', 
      location: 'Tank 1', 
      progress: 75, 
      timeRemaining: '2h 15m remaining' 
    },
    { 
      title: 'Foraging Trip', 
      location: 'Riverbank', 
      progress: 50, 
      timeRemaining: '30m remaining' 
    },
    { 
      title: 'Neon Tetra Fry', 
      location: 'Maturing', 
      progress: 25, 
      timeRemaining: '1 day 8h remaining' 
    },
  ];

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-4">
      <div className="flex items-center gap-2 mb-4">
        <Timer className="h-5 w-5 text-blue-400" />
        <h2 className="text-lg font-semibold text-white">Ongoing Projects</h2>
      </div>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-700 rounded-lg p-3">
            <div className="flex justify-between text-white mb-1">
              <span className="font-medium">{project.title} ({project.location})</span>
              <span className="text-sm">{project.progress}%</span>
            </div>
            <div className="w-full bg-gray-600 rounded-full h-2.5 mb-1">
              <div 
                className="bg-blue-500 h-2.5 rounded-full" 
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
            <span className="text-sm text-gray-300">{project.timeRemaining}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OngoingProjects;