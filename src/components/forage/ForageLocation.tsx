import React from 'react';
import { Fish, Plane as Plant, Snail, Timer } from 'lucide-react';
import { Location } from './types';

interface ForageLocationProps {
  location: Location;
  onExplore: (locationId: string, ap: number) => void;
}

const ForageLocation: React.FC<ForageLocationProps> = ({ location, onExplore }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold">{location.name}</h3>
        {location.locked && (
          <span className="px-2 py-1 bg-gray-700 text-gray-400 text-xs rounded-full">
            Locked
          </span>
        )}
      </div>

      <div className="h-32 bg-blue-900/30 rounded-lg relative overflow-hidden mb-4">
        <div className="absolute inset-0 flex items-center justify-center">
          {location.icon}
        </div>
      </div>

      <p className="text-sm text-gray-300 mb-4">{location.description}</p>

      <div className="space-y-3 mb-4">
        <div className="p-3 bg-gray-700 rounded-lg">
          <h4 className="text-sm font-medium mb-2">Potential Finds:</h4>
          <div className="grid grid-cols-2 gap-2">
            {location.potentialFinds.map((find, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                {find.icon}
                <span>{find.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <Timer className="h-4 w-4 text-blue-400" />
            <span>Duration: {location.duration}</span>
          </div>
          <span>Cost: {location.apCost} AP</span>
        </div>
      </div>

      <button
        onClick={() => onExplore(location.id, location.apCost)}
        disabled={location.locked}
        className={`w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg transition-colors ${
          location.locked
            ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700 text-white'
        }`}
      >
        Explore {location.name}
      </button>
    </div>
  );
};

export default ForageLocation;