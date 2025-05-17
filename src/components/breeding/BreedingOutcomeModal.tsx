import React from 'react';
import { Fish, Palette, Waves, Dna, X } from 'lucide-react';
import { Mutation, Parent } from './types';

interface BreedingOutcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
  parent1: Parent;
  parent2: Parent;
  offspringCount: number;
  mutations: Mutation[];
}

const BreedingOutcomeModal: React.FC<BreedingOutcomeModalProps> = ({
  isOpen,
  onClose,
  parent1,
  parent2,
  offspringCount,
  mutations,
}) => {
  if (!isOpen) return null;

  const getMutationIcon = (type: string) => {
    switch (type) {
      case 'color':
        return <Palette className="h-4 w-4 text-blue-400" />;
      case 'pattern':
        return <Waves className="h-4 w-4 text-purple-400" />;
      case 'fin':
        return <Fish className="h-4 w-4 text-green-400" />;
      default:
        return <Dna className="h-4 w-4 text-yellow-400" />;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg p-6 max-w-lg w-full m-4">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-xl font-bold text-white">Breeding Project Successful!</h2>
            <p className="text-gray-400">
              Parents: {parent1.name} × {parent2.name}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-300 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-center gap-8 p-4 bg-gray-700 rounded-lg">
            <div className="text-center">
              <div className="h-16 w-16 bg-blue-900/30 rounded-lg flex items-center justify-center mb-2">
                <Fish className="h-8 w-8 text-blue-500/50" />
              </div>
              <p className="text-sm text-gray-300">{parent1.name}</p>
            </div>
            <div className="text-2xl">×</div>
            <div className="text-center">
              <div className="h-16 w-16 bg-blue-900/30 rounded-lg flex items-center justify-center mb-2">
                <Fish className="h-8 w-8 text-blue-500/50" />
              </div>
              <p className="text-sm text-gray-300">{parent2.name}</p>
            </div>
          </div>

          <div className="text-center p-4 bg-gray-700 rounded-lg">
            <p className="text-lg font-medium">Offspring Produced</p>
            <p className="text-3xl font-bold text-blue-400">{offspringCount} Fry</p>
          </div>

          {mutations.length > 0 && (
            <div>
              <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                <Dna className="h-5 w-5 text-yellow-400" />
                New Mutations Detected!
              </h3>
              <div className="space-y-2">
                {mutations.map((mutation, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-gray-700 p-3 rounded-lg"
                  >
                    {getMutationIcon(mutation.type)}
                    <div>
                      <p className="text-sm">
                        Offspring #{mutation.offspringNumber} shows new{' '}
                        <span
                          className="text-blue-400 cursor-help"
                          title={mutation.description}
                        >
                          {mutation.trait}
                        </span>{' '}
                        trait!
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
            >
              View Offspring in Nursery
            </button>
            <button
              onClick={onClose}
              className="flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors"
            >
              Start New Breeding Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreedingOutcomeModal;