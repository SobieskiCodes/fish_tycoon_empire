import React, { useState } from 'react';
import { Fish as FishIcon } from 'lucide-react';
import { Fish } from './types';
import clsx from 'clsx';
import FishSelectionModal from './FishSelectionModal';

interface ParentSelectionProps {
  label: string;
  selectedFish: Fish | null;
  onSelect: (fish: Fish | null) => void;
  availableFish: Fish[];
}

const ParentSelection: React.FC<ParentSelectionProps> = ({
  label,
  selectedFish,
  onSelect,
  availableFish,
}) => {
  const [isSelectionModalOpen, setIsSelectionModalOpen] = useState(false);

  return (
    <div className="bg-gray-700 rounded-lg p-4">
      <h3 className="text-sm font-medium mb-3">{label}</h3>
      
      {!selectedFish ? (
        <button
          onClick={() => setIsSelectionModalOpen(true)}
          className="w-full h-32 flex flex-col items-center justify-center gap-2 border-2 border-dashed border-gray-600 rounded-lg hover:border-blue-500 transition-colors"
        >
          <FishIcon className="h-8 w-8 text-gray-400" />
          <span className="text-sm text-gray-400">Select Fish</span>
        </button>
      ) : (
        <div className="space-y-3">
          <div className="h-32 bg-blue-900/30 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <FishIcon className="h-16 w-16 text-blue-500/50" />
            </div>
          </div>
          
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="font-medium">{selectedFish.name}</span>
              <span className={clsx(
                'text-xs px-2 py-1 rounded-full',
                selectedFish.rarity === 'Common' ? 'bg-gray-600' : 'bg-blue-900'
              )}>
                {selectedFish.rarity}
              </span>
            </div>
            
            <div className="text-sm text-gray-300">
              <div>Species: {selectedFish.species}</div>
              <div>Traits: {selectedFish.traits.join(', ')}</div>
              <div>Genetics: {selectedFish.genetics}</div>
            </div>
          </div>

          <button
            onClick={() => onSelect(null)}
            className="w-full text-sm text-red-400 hover:text-red-300 transition-colors"
          >
            Remove
          </button>
        </div>
      )}

      <FishSelectionModal
        isOpen={isSelectionModalOpen}
        onClose={() => setIsSelectionModalOpen(false)}
        onSelect={onSelect}
        availableFish={availableFish}
      />
    </div>
  );
};

export default ParentSelection;