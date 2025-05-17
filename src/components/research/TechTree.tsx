import React from 'react';
import { ResearchNode } from './types';
import { FlaskRound as Flask, Lock, Check } from 'lucide-react';

interface TechTreeProps {
  nodes: ResearchNode[];
}

const TechTree: React.FC<TechTreeProps> = ({ nodes }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {nodes.map((node) => (
          <div
            key={node.id}
            className={`bg-gray-700 rounded-lg p-4 ${
              node.locked ? 'opacity-75' : ''
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-medium">{node.name}</h3>
                <p className="text-sm text-gray-400">{node.description}</p>
              </div>
              {node.completed ? (
                <Check className="h-5 w-5 text-green-400" />
              ) : node.locked ? (
                <Lock className="h-5 w-5 text-gray-400" />
              ) : (
                <Flask className="h-5 w-5 text-blue-400" />
              )}
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">AP Cost</span>
                <span>{node.apCost} AP</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Gold Cost</span>
                <span>{node.goldCost} Gold</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Research Time</span>
                <span>{node.timeToComplete}</span>
              </div>
            </div>

            <button
              disabled={node.locked || node.completed}
              className={`w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg transition-colors ${
                node.locked || node.completed
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              {node.completed ? 'Completed' : node.locked ? 'Locked' : 'Start Research'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechTree;