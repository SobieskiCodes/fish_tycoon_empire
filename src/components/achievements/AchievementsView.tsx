import React, { useState } from 'react';
import { Award, Filter, Search } from 'lucide-react';
import { Achievement, AchievementCategory } from './types';
import AchievementCard from './AchievementCard';

const mockAchievements: Achievement[] = [
  {
    id: '1',
    title: 'First Mutation!',
    description: 'Successfully breed your first mutated fish',
    category: 'breeding',
    completed: true,
    completionDate: '2025-05-15',
    rewards: {
      gold: 500,
      title: 'Novice Breeder',
    },
    icon: 'dna',
  },
  {
    id: '2',
    title: 'Guppy Guru',
    description: 'Breed 10 different Guppy strains',
    category: 'breeding',
    progress: {
      current: 7,
      total: 10,
    },
    rewards: {
      gold: 1000,
      ap: 50,
      title: 'Guppy Master',
    },
    completed: false,
    icon: 'fish',
  },
  {
    id: '3',
    title: 'Millionaire Mogul',
    description: 'Accumulate 1,000,000 gold in total wealth',
    category: 'economic',
    progress: {
      current: 750000,
      total: 1000000,
    },
    rewards: {
      title: 'Tycoon',
      item: 'Golden Tank Ornament',
    },
    completed: false,
    icon: 'coins',
  },
  {
    id: '4',
    title: 'Master Forager',
    description: 'Complete 100 foraging expeditions',
    category: 'exploration',
    progress: {
      current: 85,
      total: 100,
    },
    rewards: {
      ap: 100,
      item: 'Expert Foraging Kit',
    },
    completed: false,
    icon: 'compass',
  },
];

const AchievementsView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'in-progress' | 'completed' | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<AchievementCategory | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAchievements = mockAchievements.filter((achievement) => {
    const matchesTab =
      activeTab === 'all' ||
      (activeTab === 'completed' && achievement.completed) ||
      (activeTab === 'in-progress' && !achievement.completed);
    
    const matchesCategory =
      selectedCategory === 'all' || achievement.category === selectedCategory;
    
    const matchesSearch = achievement.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesTab && matchesCategory && matchesSearch;
  });

  const totalCompleted = mockAchievements.filter((a) => a.completed).length;
  const completionPercentage = Math.round(
    (totalCompleted / mockAchievements.length) * 100
  );

  return (
    <div className="container mx-auto py-6 px-4">
      <div className="flex items-center gap-3 mb-6">
        <Award className="h-8 w-8 text-blue-400" />
        <h1 className="text-2xl font-bold">My Achievements</h1>
      </div>

      <div className="bg-gray-800 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">Achievement Progress</h2>
            <p className="text-gray-400">
              {totalCompleted} of {mockAchievements.length} Achievements Unlocked
            </p>
          </div>
          <div className="text-right">
            <span className="text-2xl font-bold text-blue-400">
              {completionPercentage}%
            </span>
            <p className="text-sm text-gray-400">Total Completion</p>
          </div>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2 mt-4">
          <div
            className="bg-blue-500 h-2 rounded-full"
            style={{ width: `${completionPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab('all')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'all'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-700 hover:bg-gray-600'
          }`}
        >
          All Achievements
        </button>
        <button
          onClick={() => setActiveTab('in-progress')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'in-progress'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-700 hover:bg-gray-600'
          }`}
        >
          In Progress
        </button>
        <button
          onClick={() => setActiveTab('completed')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'completed'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-700 hover:bg-gray-600'
          }`}
        >
          Completed
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
            placeholder="Search achievements..."
          />
        </div>
        <select
          value={selectedCategory}
          onChange={(e) =>
            setSelectedCategory(e.target.value as AchievementCategory | 'all')
          }
          className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
        >
          <option value="all">All Categories</option>
          <option value="breeding">Breeding</option>
          <option value="economic">Economic</option>
          <option value="exploration">Exploration</option>
          <option value="social">Social</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredAchievements.map((achievement) => (
          <AchievementCard key={achievement.id} achievement={achievement} />
        ))}
      </div>
    </div>
  );
};

export default AchievementsView;