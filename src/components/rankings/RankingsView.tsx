import React, { useState } from 'react';
import { Trophy, Search, Eye, Sword, Mail, Building, Users, ArrowRight } from 'lucide-react';
import PlayerRankings from './PlayerRankings';
import CompanyRankings from './CompanyRankings';

const RankingsView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'players' | 'companies'>('players');

  return (
    <div className="container mx-auto py-6 px-4">
      <div className="flex items-center gap-3 mb-6">
        <Trophy className="h-8 w-8 text-blue-400" />
        <h1 className="text-2xl font-bold">Global Rankings & Directory</h1>
      </div>

      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab('players')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'players'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-700 hover:bg-gray-600'
          }`}
        >
          <Users className="h-5 w-5" />
          Player Rankings
        </button>
        <button
          onClick={() => setActiveTab('companies')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'companies'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-700 hover:bg-gray-600'
          }`}
        >
          <Building className="h-5 w-5" />
          Company Rankings
        </button>
      </div>

      {activeTab === 'players' ? <PlayerRankings /> : <CompanyRankings />}
    </div>
  );
};

export default RankingsView;