import React, { useState } from 'react';
import { Search, Filter, Fish as FishIcon, X } from 'lucide-react';
import { Fish } from './types';
import clsx from 'clsx';

interface FishSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (fish: Fish) => void;
  availableFish: Fish[];
}

const FishSelectionModal: React.FC<FishSelectionModalProps> = ({
  isOpen,
  onClose,
  onSelect,
  availableFish,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSpecies, setFilterSpecies] = useState<string>('all');
  const [filterRarity, setFilterRarity] = useState<'all' | 'Common' | 'Rare'>('all');

  if (!isOpen) return null;

  const filteredFish = availableFish.filter((fish) => {
    const matchesSearch = fish.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecies = filterSpecies === 'all' || fish.species === filterSpecies;
    const matchesRarity = filterRarity === 'all' || fish.rarity === filterRarity;
    return matchesSearch && matchesSpecies && matchesRarity;
  });

  const uniqueSpecies = Array.from(new Set(availableFish.map((fish) => fish.species)));

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg p-6 max-w-2xl w-full m-4">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-xl font-bold">Select Fish</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-300 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4">
          {/* Search and Filters */}
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Search fish..."
              />
            </div>
            <select
              value={filterSpecies}
              onChange={(e) => setFilterSpecies(e.target.value)}
              className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            >
              <option value="all">All Species</option>
              {uniqueSpecies.map((species) => (
                <option key={species} value={species}>
                  {species}
                </option>
              ))}
            </select>
            <select
              value={filterRarity}
              onChange={(e) => setFilterRarity(e.target.value as 'all' | 'Common' | 'Rare')}
              className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            >
              <option value="all">All Rarities</option>
              <option value="Common">Common</option>
              <option value="Rare">Rare</option>
            </select>
          </div>

          {/* Fish Grid */}
          <div className="grid grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto">
            {filteredFish.map((fish) => (
              <button
                key={fish.id}
                onClick={() => {
                  onSelect(fish);
                  onClose();
                }}
                className="text-left bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <FishIcon className="h-6 w-6 text-blue-500/50" />
                  </div>
                  <div>
                    <h3 className="font-medium">{fish.name}</h3>
                    <p className="text-sm text-gray-400">{fish.species}</p>
                  </div>
                  <span
                    className={clsx(
                      'ml-auto text-xs px-2 py-1 rounded-full',
                      fish.rarity === 'Common' ? 'bg-gray-600' : 'bg-blue-900'
                    )}
                  >
                    {fish.rarity}
                  </span>
                </div>
                <div className="mt-3 space-y-1">
                  <div className="text-sm text-gray-300">
                    Strain: {fish.strain}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {fish.traits.map((trait, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-gray-600 rounded-full"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {filteredFish.length === 0 && (
            <div className="text-center py-8 text-gray-400">
              No fish match your search criteria
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FishSelectionModal;