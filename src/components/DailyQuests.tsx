import React from 'react';
import { CheckSquare, Trophy } from 'lucide-react';

type Quest = {
  title: string;
  reward: string;
  completed: boolean;
};

const DailyQuests: React.FC = () => {
  const quests: Quest[] = [
    { title: 'Breed 5 Guppies', reward: '50 Gold', completed: true },
    { title: 'Forage in the Riverbank', reward: '25 AP', completed: false },
    { title: 'Sell 3 fish in the Marketplace', reward: '100 Gold', completed: false },
  ];

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-4">
      <div className="flex items-center gap-2 mb-4">
        <Trophy className="h-5 w-5 text-yellow-400" />
        <h2 className="text-lg font-semibold text-white">Daily Quests</h2>
      </div>
      <div className="space-y-2">
        {quests.map((quest, index) => (
          <div 
            key={index} 
            className={`flex items-center gap-3 p-2 rounded-lg ${
              quest.completed ? 'bg-green-900/30' : 'bg-gray-700'
            }`}
          >
            <CheckSquare 
              className={`h-5 w-5 ${
                quest.completed ? 'text-green-400' : 'text-gray-400'
              }`} 
            />
            <div className="flex-1">
              <p className={`${quest.completed ? 'text-green-300' : 'text-white'}`}>
                {quest.title}
              </p>
              <p className="text-xs text-gray-400">Reward: {quest.reward}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyQuests;