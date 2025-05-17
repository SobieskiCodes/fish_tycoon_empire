import React, { useState } from 'react';
import { Plus, Filter, SortAsc } from 'lucide-react';
import TankCard, { Tank } from './TankCard';

const mockTanks: Tank[] = [
  {
    id: '1',
    name: 'Guppy Breeding Tank',
    fishCount: 8,
    capacity: 10,
    waterQuality: 'Excellent',
    temperature: 26,
    targetTemperature: 26,
    alerts: [],
  },
  {
    id: '2',
    name: 'Shrimp Paradise',
    fishCount: 15,
    capacity: 20,
    waterQuality: 'Good',
    temperature: 24,
    targetTemperature: 24,
    alerts: ['water'],
  },
  {
    id: '3',
    name: 'Tetra Community',
    fishCount: 12,
    capacity: 15,
    waterQuality: 'Fair',
    temperature: 25,
    targetTemperature: 25,
    alerts: ['hunger'],
  },
  {
    id: '4',
    name: 'Angelfish Tank',
    fishCount: 5,
    capacity: 8,
    waterQuality: 'Poor',
    temperature: 28,
    targetTemperature: 26,
    alerts: ['water', 'sickness'],
  },
];

const TankList: React.FC = () => {
  const [tanks] = useState<Tank[]>(mockTanks);

  const totalFishCount = tanks.reduce((sum, tank) => sum + tank.fishCount, 0);
  const totalCapacity = tanks.reduce((sum, tank) => sum + tank.capacity, 0);

  const handleManageTank = (tankId: string) => {
    console.log('Managing tank:', tankId);
  };

  return (
    <div className="container mx-auto py-6 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">My Tanks</h1>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
            <Filter className="h-5 w-5" />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
            <SortAsc className="h-5 w-5" />
            Sort
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors">
            <Plus className="h-5 w-5" />
            Buy New Tank
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {tanks.map((tank) => (
          <TankCard key={tank.id} tank={tank} onManage={handleManageTank} />
        ))}
      </div>

      <div className="mt-6 bg-gray-800 rounded-lg p-4">
        <div className="flex justify-between items-center text-gray-300">
          <span>Total Tanks: {tanks.length}</span>
          <span>Total Fish: {totalFishCount} / {totalCapacity}</span>
        </div>
      </div>
    </div>
  );
};

export default TankList;