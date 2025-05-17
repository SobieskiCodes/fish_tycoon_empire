import React from 'react';
import { Medal, Fish, Coins, FlaskRound as Flask, Building, Clock, User } from 'lucide-react';
import { WorldFirst } from './types';

interface WorldFirstCardProps {
  worldFirst: WorldFirst;
}

const WorldFirstCard: React.FC<WorldFirstCardProps> = ({ worldFirst }) => {
  const getIcon = () => {
    switch (worldFirst.icon) {
      case 'fish':
        return <Fish className="h-6 w-6 text-blue-400" />;
      case 'shrimp':
        return <Fish className="h-6 w-6 text-red-400" />;
      case 'coins':
        return <Coins className="h-6 w-6 text-yellow-400" />;
      case 'research':
        return <Flask className="h-6 w-6 text-purple-400" />;
      default:
        return <Medal className="h-6 w-6 text-yellow-400" />;
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <div className="flex items-start gap-3 mb-4">
        <div className="h-12 w-12 bg-gray-700 rounded-lg flex items-center justify-center">
          {getIcon()}
        </div>
        <div>
          <h3 className="font-medium">{worldFirst.title}</h3>
          <p className="text-sm text-gray-400">{worldFirst.description}</p>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm">
          <User className="h-4 w-4 text-blue-400" />
          <span>{worldFirst.achievedBy.player}</span>
        </div>
        
        {worldFirst.achievedBy.company && (
          <div className="flex items-center gap-2 text-sm">
            <Building className="h-4 w-4 text-blue-400" />
            <span>{worldFirst.achievedBy.company}</span>
          </div>
        )}

        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Clock className="h-4 w-4" />
          <span>{worldFirst.date}</span>
        </div>
      </div>
    </div>
  );
};

export default WorldFirstCard;