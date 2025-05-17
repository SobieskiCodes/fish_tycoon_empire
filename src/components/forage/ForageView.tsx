import React, { useState } from 'react';
import { Compass, Fish, Plane as Plant, Snail, Shell, Search as Seaweed, Timer } from 'lucide-react';
import ForageLocation from './ForageLocation';
import { Location, ActiveForage } from './types';

const mockLocations: Location[] = [
  {
    id: '1',
    name: 'Backyard Pond',
    description: 'A small, peaceful pond perfect for beginners. Home to common species and basic supplies.',
    icon: <Fish className="h-16 w-16 text-blue-500/50" />,
    potentialFinds: [
      { name: 'Wild Guppy', icon: <Fish className="h-4 w-4 text-blue-400" /> },
      { name: 'Basic Plants', icon: <Plant className="h-4 w-4 text-green-400" /> },
      { name: 'Common Snails', icon: <Snail className="h-4 w-4 text-yellow-400" /> },
    ],
    apCost: 5,
    duration: '30m',
    locked: false,
  },
  {
    id: '2',
    name: 'Shady Riverbank',
    description: 'A diverse ecosystem with flowing water. Good spot for finding various aquatic life.',
    icon: <Seaweed className="h-16 w-16 text-green-500/50" />,
    potentialFinds: [
      { name: 'Wild Shrimp', icon: <Fish className="h-4 w-4 text-pink-400" /> },
      { name: 'Driftwood', icon: <Shell className="h-4 w-4 text-yellow-400" /> },
      { name: 'River Plants', icon: <Plant className="h-4 w-4 text-green-400" /> },
    ],
    apCost: 8,
    duration: '1h',
    locked: false,
  },
  {
    id: '3',
    name: 'Coastal Mangroves',
    description: 'A complex ecosystem with brackish water. Home to unique species.',
    icon: <Seaweed className="h-16 w-16 text-green-500/50" />,
    potentialFinds: [
      { name: 'Rare Fish', icon: <Fish className="h-4 w-4 text-purple-400" /> },
      { name: 'Mangrove Seeds', icon: <Plant className="h-4 w-4 text-green-400" /> },
    ],
    apCost: 12,
    duration: '2h',
    locked: true,
  },
];

const mockActiveForages: ActiveForage[] = [
  {
    id: '1',
    locationName: 'Backyard Pond',
    progress: 65,
    timeRemaining: '10m',
  },
];

const ForageView: React.FC = () => {
  const [locations] = useState<Location[]>(mockLocations);
  const [activeForages] = useState<ActiveForage[]>(mockActiveForages);

  const handleExplore = (locationId: string, apCost: number) => {
    console.log(`Exploring location ${locationId} with ${apCost} AP`);
  };

  return (
    <div className="container mx-auto py-6 px-4">
      <div className="flex items-center gap-3 mb-6">
        <Compass className="h-8 w-8 text-blue-400" />
        <h1 className="text-2xl font-bold">Forage & Gather</h1>
      </div>

      {activeForages.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Active Foraging</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {activeForages.map((forage) => (
              <div key={forage.id} className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Timer className="h-5 w-5 text-blue-400" />
                    <span className="font-medium">{forage.locationName}</span>
                  </div>
                  <span className="text-sm">{forage.progress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${forage.progress}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-400">{forage.timeRemaining} remaining</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {locations.map((location) => (
          <ForageLocation
            key={location.id}
            location={location}
            onExplore={handleExplore}
          />
        ))}
      </div>
    </div>
  );
};

export default ForageView;