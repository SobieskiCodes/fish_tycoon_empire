import React, { useState } from 'react';
import { Dna, FlaskRound as Flask, Building, ArrowRight } from 'lucide-react';
import { ResearchProject, ResearchNode } from './types';
import TechTree from './TechTree';
import ActiveResearch from './ActiveResearch';

const mockResearchNodes: ResearchNode[] = [
  {
    id: '1',
    name: 'Advanced Filtration T1',
    description: 'Improved water quality maintenance',
    type: 'general',
    apCost: 25,
    goldCost: 5000,
    timeToComplete: '4h',
    prerequisites: [],
    completed: false,
    locked: false,
  },
  {
    id: '2',
    name: 'Basic Gene Mapping',
    description: 'Reveals some recessive traits',
    type: 'genetics',
    apCost: 35,
    goldCost: 7500,
    timeToComplete: '6h',
    prerequisites: [],
    completed: false,
    locked: false,
  },
  {
    id: '3',
    name: 'Automated Feeder Blueprint',
    description: 'Automates basic feeding tasks',
    type: 'general',
    apCost: 30,
    goldCost: 6000,
    timeToComplete: '5h',
    prerequisites: ['1'],
    completed: false,
    locked: true,
  },
];

const mockActiveResearch: ResearchProject = {
  id: '1',
  name: 'Advanced Filtration T1',
  progress: 65,
  timeRemaining: '1h 25m',
  apInvested: 25,
};

const ResearchLab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'general' | 'genetics' | 'company'>('general');

  return (
    <div className="container mx-auto py-6 px-4">
      <div className="flex items-center gap-3 mb-6">
        <Dna className="h-8 w-8 text-blue-400" />
        <h1 className="text-2xl font-bold">Research & Genetics Lab</h1>
      </div>

      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab('general')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'general'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-700 hover:bg-gray-600'
          }`}
        >
          <Flask className="h-5 w-5" />
          General Research
        </button>
        <button
          onClick={() => setActiveTab('genetics')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'genetics'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-700 hover:bg-gray-600'
          }`}
        >
          <Dna className="h-5 w-5" />
          Breeding & Genetics R&D
        </button>
        <button
          onClick={() => setActiveTab('company')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'company'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-700 hover:bg-gray-600'
          }`}
        >
          <Building className="h-5 w-5" />
          Company Research
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <TechTree
            nodes={mockResearchNodes.filter(node => 
              activeTab === 'general' ? node.type === 'general' : 
              activeTab === 'genetics' ? node.type === 'genetics' : 
              node.type === 'company'
            )}
          />
        </div>

        <div className="space-y-6">
          <ActiveResearch project={mockActiveResearch} />

          <div className="bg-gray-800 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-3">Unlocked Blueprints</h2>
            <div className="space-y-2">
              <button className="w-full flex items-center justify-between px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                <span>View Blueprints</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchLab;