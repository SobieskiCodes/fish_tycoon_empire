import React from 'react';
import { TrendingUp, TrendingDown, AlertCircle } from 'lucide-react';

interface TrendingItem {
  name: string;
  trend: 'up' | 'down';
  change: string;
  note: string;
}

const mockTrends: TrendingItem[] = [
  {
    name: 'Blue Diamond Guppy',
    trend: 'up',
    change: '+15% this week',
    note: 'High Demand',
  },
  {
    name: 'Crystal Red Shrimp',
    trend: 'down',
    change: '-8% this week',
    note: 'Market Saturation',
  },
  {
    name: 'Premium Fish Food',
    trend: 'up',
    change: '+25% this week',
    note: 'Supply Shortage',
  },
];

const newsItems = [
  'Rumors of Guppy Shortage!',
  'New Plant Fertilizer a Hit!',
  'Rare Strain Discovery in Eastern Waters',
];

const MarketTrends: React.FC = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-4">Market Trends</h2>
      
      <div className="space-y-3 mb-6">
        {mockTrends.map((item, index) => (
          <button
            key={index}
            className="w-full flex items-center justify-between bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition-colors"
          >
            <div>
              <div className="font-medium">{item.name}</div>
              <div className="text-sm text-gray-400">{item.note}</div>
            </div>
            <div className="flex items-center gap-2">
              {item.trend === 'up' ? (
                <TrendingUp className="h-4 w-4 text-green-400" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-400" />
              )}
              <span className={item.trend === 'up' ? 'text-green-400' : 'text-red-400'}>
                {item.change}
              </span>
            </div>
          </button>
        ))}
      </div>

      <div className="bg-gray-700 rounded-lg p-3">
        <div className="flex items-center gap-2 mb-2">
          <AlertCircle className="h-4 w-4 text-blue-400" />
          <h3 className="font-medium">Market News</h3>
        </div>
        <div className="text-sm text-gray-300 space-y-1">
          {newsItems.map((news, index) => (
            <p key={index}>{news}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketTrends;