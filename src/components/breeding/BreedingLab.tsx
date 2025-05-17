import React, { useState } from 'react';
import { FlaskConical, Fish, AlertTriangle, Timer, Dna, Zap } from 'lucide-react';
import ParentSelection from './ParentSelection';
import ProjectCard from './ProjectCard';
import { Fish as FishType, BreedingProject, Parent, Mutation } from './types';
import StrainRegistrationModal from './StrainRegistrationModal';
import BreedingOutcomeModal from './BreedingOutcomeModal';
import LineageTreeViewer from './LineageTreeViewer';

const mockFish: FishType[] = [
  {
    id: '1',
    name: 'Blue Diamond',
    species: 'Guppy',
    strain: 'Rare',
    traits: ['Lyretail', 'Metallic'],
    rarity: 'Rare',
    genetics: 'Strong',
    color: 'Blue',
  },
  {
    id: '2',
    name: 'Golden Sunset',
    species: 'Guppy',
    strain: 'Common',
    traits: ['Delta', 'Solid'],
    rarity: 'Common',
    genetics: 'Average',
    color: 'Orange',
  },
];

const mockProjects: BreedingProject[] = [
  {
    id: '1',
    parent1: mockFish[0],
    parent2: mockFish[1],
    status: 'Eggs Developing',
    progress: 75,
    timeRemaining: '1d 4h',
    apInvestment: 8,
    expectedFry: '5-8',
  },
];

const mockStabilizedStrain = {
  baseSpecies: 'Neocaridina Davidi (Shrimp)',
  traits: {
    color: 'Deep Indigo Blue',
    pattern: 'Solid',
    special: ['Subtle Sparkle'],
  },
  generation: 5,
  discoverer: 'Player123',
  registrationFee: 100,
};

const mockParent: Parent = {
  id: '1',
  name: 'Blue Diamond',
  species: 'Guppy',
  strain: 'Rare',
  traits: ['Lyretail', 'Metallic'],
  rarity: 'Rare',
  genetics: 'Strong',
  color: 'Blue',
  generation: 3,
  lineage: ['Wild Type', 'Blue Metallic', 'Blue Diamond'],
};

const mockMutations: Mutation[] = [
  {
    type: 'color',
    trait: 'Electric Blue',
    description: 'A vibrant, metallic blue coloration',
    offspringNumber: 2,
  },
  {
    type: 'fin',
    trait: 'Double Sword',
    description: 'Extended sword-like fins on both sides',
    offspringNumber: 1,
  },
];

const BreedingLab: React.FC = () => {
  const [parent1, setParent1] = useState<FishType | null>(null);
  const [parent2, setParent2] = useState<FishType | null>(null);
  const [apInvestment, setApInvestment] = useState(5);
  const [projects] = useState<BreedingProject[]>(mockProjects);
  const [showRegistration, setShowRegistration] = useState(false);
  const [showOutcome, setShowOutcome] = useState(false);
  const [showLineage, setShowLineage] = useState(false);

  const handleStartBreeding = () => {
    console.log('Starting breeding project');
    setShowOutcome(true);
  };

  const handleRegisterStrain = (name: string) => {
    console.log('Registering strain with name:', name);
    setShowRegistration(false);
  };

  const getCompatibility = () => {
    if (!parent1 || !parent2) return null;
    return parent1.species === parent2.species ? 'High' : 'Low';
  };

  const compatibility = getCompatibility();

  return (
    <div className="container mx-auto py-6 px-4">
      <div className="flex items-center gap-2 mb-6">
        <FlaskConical className="h-6 w-6 text-blue-400" />
        <h1 className="text-2xl font-bold text-white">Breeding Lab</h1>
      </div>

      {/* Test buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setShowRegistration(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
        >
          <Dna className="h-5 w-5" />
          Test Strain Registration
        </button>
        <button
          onClick={() => setShowOutcome(true)}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
        >
          <Fish className="h-5 w-5" />
          Test Breeding Outcome
        </button>
        <button
          onClick={() => setShowLineage(true)}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
        >
          <Dna className="h-5 w-5" />
          Test Lineage Tree
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Parent Selection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <ParentSelection
              label="Parent 1"
              selectedFish={parent1}
              onSelect={setParent1}
              availableFish={mockFish}
            />
            <ParentSelection
              label="Parent 2"
              selectedFish={parent2}
              onSelect={setParent2}
              availableFish={mockFish}
            />
          </div>

          {compatibility && (
            <div className="mb-4 p-3 bg-gray-700 rounded-lg">
              <div className="flex items-center gap-2">
                <Dna className="h-5 w-5 text-blue-400" />
                <span className="text-sm">
                  Compatibility:{' '}
                  <span className={compatibility === 'High' ? 'text-green-400' : 'text-yellow-400'}>
                    {compatibility}
                  </span>
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Breeding Configuration</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-300 mb-2">AP Investment</label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={apInvestment}
                  onChange={(e) => setApInvestment(parseInt(e.target.value))}
                  className="w-full"
                />
                <span className="flex items-center gap-1 text-blue-400">
                  <Zap className="h-4 w-4" />
                  {apInvestment}
                </span>
              </div>
            </div>

            <div className="p-3 bg-gray-700 rounded-lg space-y-2">
              <div className="flex items-center gap-2">
                <Fish className="h-4 w-4 text-blue-400" />
                <span className="text-sm">Expected Fry: 5-8</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-yellow-400" />
                <span className="text-sm">Mutation Chance: Medium</span>
              </div>
            </div>

            <button
              onClick={handleStartBreeding}
              disabled={!parent1 || !parent2}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-3 px-4 rounded-lg transition-colors"
            >
              <FlaskConical className="h-5 w-5" />
              Start Breeding - {apInvestment} AP
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <Timer className="h-5 w-5 text-blue-400" />
          <h2 className="text-lg font-semibold">Active Breeding Projects</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <StrainRegistrationModal
        isOpen={showRegistration}
        onClose={() => setShowRegistration(false)}
        strain={mockStabilizedStrain}
        onRegister={handleRegisterStrain}
      />

      <BreedingOutcomeModal
        isOpen={showOutcome}
        onClose={() => setShowOutcome(false)}
        parent1={mockParent}
        parent2={mockParent}
        offspringCount={8}
        mutations={mockMutations}
      />

      <LineageTreeViewer
        isOpen={showLineage}
        onClose={() => setShowLineage(false)}
        focusFish={mockParent}
        parents={[mockParent, mockParent]}
        grandparents={[mockParent, mockParent, mockParent, mockParent]}
        offspring={[mockParent, mockParent]}
      />
    </div>
  );
};

export default BreedingLab;