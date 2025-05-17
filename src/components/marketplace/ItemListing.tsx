import React, { useState } from 'react';
import { Timer, Tag, Fish, AlertTriangle, LineChart } from 'lucide-react';
import { MarketItem } from './types';
import PriceHistoryModal from './PriceHistoryModal';

interface ItemListingProps {
  item: MarketItem;
}

const ItemListing: React.FC<ItemListingProps> = ({ item }) => {
  const [showPriceHistory, setShowPriceHistory] = useState(false);

  const getRarityColor = (rarity: string) => {
    switch (rarity.toLowerCase()) {
      case 'legendary':
        return 'text-yellow-400 bg-yellow-400/20';
      case 'epic':
        return 'text-purple-400 bg-purple-400/20';
      case 'rare':
        return 'text-blue-400 bg-blue-400/20';
      case 'uncommon':
        return 'text-green-400 bg-green-400/20';
      default:
        return 'text-gray-400 bg-gray-600';
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-medium text-white">{item.name}</h3>
            <span className={`text-xs px-2 py-1 rounded-full ${getRarityColor(item.rarity)}`}>
              {item.rarity}
            </span>
          </div>
          <p className="text-sm text-gray-400">Seller: {item.seller}</p>
        </div>
      </div>

      <div className="h-32 bg-blue-900/30 rounded-lg relative overflow-hidden mb-4">
        <div className="absolute inset-0 flex items-center justify-center">
          <Fish className="h-16 w-16 text-blue-500/50" />
        </div>
      </div>

      <p className="text-sm text-gray-300 mb-4">{item.description}</p>

      {item.traits && item.traits.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {item.traits.map((trait, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 rounded-full bg-gray-700 text-gray-300"
            >
              {trait}
            </span>
          ))}
        </div>
      )}

      <div className="space-y-2 mb-4">
        {item.generation && (
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Tag className="h-4 w-4 text-blue-400" />
            <span>Generation: {item.generation}</span>
          </div>
        )}
        
        {item.timeRemaining && (
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Timer className="h-4 w-4 text-blue-400" />
            <span>{item.timeRemaining} remaining</span>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between">
        <div className="group relative">
          {item.isAuction ? (
            <div>
              <div className="text-sm text-gray-400">Current Bid</div>
              <div className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">
                ${item.currentBid?.toLocaleString()}
              </div>
            </div>
          ) : (
            <div>
              <div className="text-sm text-gray-400">Price</div>
              <div className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">
                ${item.price.toLocaleString()}
              </div>
            </div>
          )}
          <div className="absolute left-0 top-full mt-2 bg-gray-700 rounded-lg p-2 text-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
            Est. Market Value: ${Math.floor(item.price * 0.95).toLocaleString()}
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowPriceHistory(true)}
            className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
          >
            <LineChart className="h-5 w-5 text-blue-400" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
            {item.isAuction ? 'Place Bid' : 'Buy Now'}
          </button>
        </div>
      </div>

      <PriceHistoryModal
        isOpen={showPriceHistory}
        onClose={() => setShowPriceHistory(false)}
        itemName={item.name}
      />
    </div>
  );
};

export default ItemListing;