import React, { useState } from 'react';
import { Package, Timer, Coins } from 'lucide-react';
import { ItemType, ItemRarity } from './types';

const SellPanel: React.FC = () => {
  const [saleType, setSaleType] = useState<'fixed' | 'auction'>('fixed');
  const [selectedItem, setSelectedItem] = useState('');
  const [price, setPrice] = useState('');
  const [startingBid, setStartingBid] = useState('');
  const [duration, setDuration] = useState('24');

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-6">Create New Listing</h2>

        <div className="space-y-6">
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Select Item from Inventory
            </label>
            <select
              value={selectedItem}
              onChange={(e) => setSelectedItem(e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            >
              <option value="">Choose an item...</option>
              <option value="1">Blue Diamond Guppy (Rare)</option>
              <option value="2">Crystal Red Shrimp (Epic)</option>
              <option value="3">Amazon Sword Plant (Common)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">Sale Type</label>
            <div className="flex gap-4">
              <button
                onClick={() => setSaleType('fixed')}
                className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
                  saleType === 'fixed'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
              >
                Fixed Price
              </button>
              <button
                onClick={() => setSaleType('auction')}
                className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
                  saleType === 'auction'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
              >
                Auction
              </button>
            </div>
          </div>

          {saleType === 'fixed' ? (
            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Set Price
              </label>
              <div className="relative">
                <Coins className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-blue-500"
                  placeholder="Enter price in gold..."
                />
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Starting Bid
                </label>
                <div className="relative">
                  <Coins className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="number"
                    value={startingBid}
                    onChange={(e) => setStartingBid(e.target.value)}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-blue-500"
                    placeholder="Enter starting bid..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Auction Duration
                </label>
                <div className="relative">
                  <Timer className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-blue-500"
                  >
                    <option value="12">12 Hours</option>
                    <option value="24">24 Hours</option>
                    <option value="48">2 Days</option>
                    <option value="72">3 Days</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          <div className="p-4 bg-gray-700 rounded-lg">
            <h3 className="font-medium mb-2">Listing Fee</h3>
            <p className="text-sm text-gray-300">
              Fee: {saleType === 'fixed' ? '50' : '100'} Gold
            </p>
          </div>

          <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg transition-colors">
            <Package className="h-5 w-5" />
            Create Listing
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellPanel;