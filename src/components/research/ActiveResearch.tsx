import React from 'react';
import { Timer, Zap } from 'lucide-react';
import { ResearchProject } from './types';

interface ActiveResearchProps {
  project: ResearchProject | null;
}

const ActiveResearch: React.FC<ActiveResearchProps> = ({ project }) => {
  if (!project) {
    return (
      <div className="bg-gray-800 rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-4">Active Research</h2>
        <div className="text-center text-gray-400 py-4">
          No active research projects
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-4">Active Research</h2>
      <div className="bg-gray-700 rounded-lg p-4">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-medium">{project.name}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Zap className="h-4 w-4 text-yellow-400" />
              <span>{project.apInvested} AP Invested</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
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
          <div className="flex items-center justify-end gap-2 text-sm text-gray-400">
            <Timer className="h-4 w-4" />
            <span>{project.timeRemaining} remaining</span>
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <button className="flex-1 py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
            Boost Research
          </button>
          <button className="py-2 px-4 bg-gray-600 hover:bg-gray-500 rounded-lg transition-colors">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActiveResearch;