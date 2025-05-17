import React, { useState } from 'react';
import { Medal, Search } from 'lucide-react';
import { WorldFirst } from './types';
import WorldFirstCard from './WorldFirstCard';

const mockWorldFirsts: WorldFirst[] = [
  {
    id: '1',
    type: 'discovery',
    title: 'Celestial Blue Guppy',
    description: 'First documented stable blue mutation for Poecilia reticulata',
    achievedBy: {
      player: 'FishMaster',
      company: 'AquaCorp Elite',
    },
    date: '2025-05-15',
    icon: 'fish',
  },
  {
    id: '2',
    type: 'discovery',
    title: 'Magma Red Shrimp',
    description: 'Revolutionary red coloration in Caridina cantonensis',
    achievedBy: {
      player: 'ShrimpKing',
    },
    date: '2025-05-14',
    icon: 'shrimp',
  },
  {
    id: '3',
    type: 'feat',
    title: 'First Billionaire',
    description: 'First player to reach $1 Billion in total wealth',
    achievedBy: {
      player: 'TycoonMaster',
      company: 'Fortune Fisheries',
    },
    date: '2025-05-13',
    icon: 'coins',
  },
  {
    id: '4',
    type: 'feat',
    title: 'Research Pioneer',
    description: 'First company to fully research Advanced Genetics',
    achievedBy: {
      player: 'ResearchLead',
      company: 'BioTech Aquatics',
    },
    date: '2025-05-12',
    icon: 'research',
  },
];

const HallOfFameView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'discoveries' | 'feats'>('discoveries');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredWorldFirsts = mockWorldFirsts.filter((worldFirst) => {
    const matchesTab = activeTab === 'discoveries'
      ? worldFirst.type === 'discovery'
      : worldFirst.type === 'feat';
    
    const matchesSearch = worldFirst.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesTab && matchesSearch;
  });

  return (
    <div className="container mx-auto py-6 px-4">
      <div className="flex items-center gap-3 mb-6">
        <Medal className="h-8 w-8 text-yellow-400" />
        <h1 className="text-2xl font-bold">Hall of Fame & World Firsts</h1>
      </div>

      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab('discoveries')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'discoveries'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-700 hover:bg-gray-600'
          }`}
        >
          World First Discoveries
        </button>
        <button
          onClick={() => setActiveTab('feats')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'feats'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-700 hover:bg-gray-600'
          }`}
        >
          Legendary Feats
        </button>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-blue-500"
            placeholder={`Search ${activeTab === 'discoveries' ? 'discoveries' : 'feats'}...`}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredWorldFirsts.map((worldFirst) => (
          <WorldFirstCard key={worldFirst.id} worldFirst={worldFirst} />
        ))}
      </div>
    </div>
  );
};

export default HallOfFameView;