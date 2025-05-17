import React, { useState } from 'react';
import { Search, Eye, Sword, Mail, Building, ArrowRight } from 'lucide-react';
import { Player } from './types';

const mockPlayers: Player[] = [
  {
    id: '1',
    rank: 1,
    name: 'FishMaster',
    company: 'AquaCorp Elite',
    netWorth: 1250000,
    reputation: 'Esteemed',
    rareStrain: 'Azure Dragon Guppy',
    weeklyProfit: 150000,
  },
  {
    id: '2',
    rank: 2,
    name: 'ShrimpsRUs',
    company: 'Crystal Keepers',
    netWorth: 980000,
    reputation: 'Respected',
    rareStrain: 'Crystal Red SS Grade',
    weeklyProfit: 120000,
  },
  {
    id: '3',
    rank: 3,
    name: 'PlantGuru',
    company: null,
    netWorth: 750000,
    reputation: 'Notable',
    rareStrain: 'Rare Bucephalandra',
    weeklyProfit: 90000,
  },
];

const PlayerRankings: React.FC = () => {
  const [rankBy, setRankBy] = useState('netWorth');
  const [searchTerm, setSearchTerm] = useState('');

  const handleViewProfile = (playerId: string) => {
    console.log('View profile:', playerId);
  };

  const handleSpyAction = (playerId: string) => {
    console.log('Spy on player:', playerId);
  };

  const handleSabotageAction = (playerId: string) => {
    console.log('Sabotage player:', playerId);
  };

  const handleSendMessage = (playerId: string) => {
    console.log('Send message to player:', playerId);
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-blue-500"
            placeholder="Search player name..."
          />
        </div>
        <select
          value={rankBy}
          onChange={(e) => setRankBy(e.target.value)}
          className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
        >
          <option value="netWorth">Net Worth</option>
          <option value="reputation">Reputation</option>
          <option value="rareStrain">Rarest Strain Value</option>
          <option value="weeklyProfit">Weekly Profit</option>
        </select>
      </div>

      <div className="space-y-2">
        {mockPlayers.map((player) => (
          <div
            key={player.id}
            className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-blue-400">
                  #{player.rank}
                </span>
                <div>
                  <h3 className="font-medium text-lg">{player.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    {player.company ? (
                      <>
                        <Building className="h-4 w-4" />
                        <span>{player.company}</span>
                      </>
                    ) : (
                      <span>Unaffiliated</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <div className="font-medium">
                    ${player.netWorth.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-400">{player.reputation}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleViewProfile(player.id)}
                    className="p-2 hover:bg-gray-500 rounded-lg transition-colors"
                    title="View Profile"
                  >
                    <ArrowRight className="h-5 w-5 text-blue-400" />
                  </button>
                  <button
                    onClick={() => handleSpyAction(player.id)}
                    className="p-2 hover:bg-gray-500 rounded-lg transition-colors"
                    title="Spy"
                  >
                    <Eye className="h-5 w-5 text-blue-400" />
                  </button>
                  <button
                    onClick={() => handleSabotageAction(player.id)}
                    className="p-2 hover:bg-gray-500 rounded-lg transition-colors"
                    title="Sabotage"
                  >
                    <Sword className="h-5 w-5 text-red-400" />
                  </button>
                  <button
                    onClick={() => handleSendMessage(player.id)}
                    className="p-2 hover:bg-gray-500 rounded-lg transition-colors"
                    title="Send Message"
                  >
                    <Mail className="h-5 w-5 text-blue-400" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerRankings;