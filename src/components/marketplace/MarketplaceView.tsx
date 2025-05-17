import React, { useState } from 'react';
import { ShoppingCart, Search, Filter, Package, Tags, TrendingUp } from 'lucide-react';
import MarketplaceFilters from './MarketplaceFilters';
import ItemListing from './ItemListing';
import SellPanel from './SellPanel';
import MyListings from './MyListings';
import MarketTrends from './MarketTrends';
import { MarketItem, ListingFilters } from './types';

const mockListings: MarketItem[] = [
  {
    id: '1',
    name: 'Ruby Red Neocaridina',
    type: 'shrimp',
    rarity: 'rare',
    description: 'High-grade breeding pair with vibrant coloration',
    traits: ['High Grade', 'Pure Bloodline'],
    generation: 'F3',
    seller: 'ShrimpMaster',
    price: 5000,
    timeRemaining: '2h 15m',
    currentBid: 4500,
    isAuction: true,
  },
  {
    id: '2',
    name: 'Amazon Sword Plant',
    type: 'plants',
    rarity: 'uncommon',
    description: 'Healthy mature specimen, perfect for background',
    seller: 'PlantGuru',
    price: 1200,
    isAuction: false,
  },
  {
    id: '3',
    name: 'Premium Fish Food Bundle',
    type: 'supplies',
    rarity: 'common',
    description: 'Assorted high-quality fish food package',
    seller: 'AquaSupplies',
    price: 800,
    isAuction: false,
  },
];

const MarketplaceView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'buy' | 'sell' | 'my-listings' | 'trends'>('buy');
  const [filters, setFilters] = useState<ListingFilters>({
    search: '',
    type: 'all',
    rarity: 'all',
    sortBy: 'newest',
  });

  return (
    <div className="container mx-auto py-6 px-4">
      <div className="flex items-center gap-3 mb-6">
        <ShoppingCart className="h-8 w-8 text-blue-400" />
        <h1 className="text-2xl font-bold">Marketplace</h1>
      </div>

      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab('buy')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'buy'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-700 hover:bg-gray-600'
          }`}
        >
          <Search className="h-5 w-5" />
          Buy
        </button>
        <button
          onClick={() => setActiveTab('sell')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'sell'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-700 hover:bg-gray-600'
          }`}
        >
          <Tags className="h-5 w-5" />
          Sell
        </button>
        <button
          onClick={() => setActiveTab('my-listings')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'my-listings'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-700 hover:bg-gray-600'
          }`}
        >
          <Package className="h-5 w-5" />
          My Listings
        </button>
        <button
          onClick={() => setActiveTab('trends')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'trends'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-700 hover:bg-gray-600'
          }`}
        >
          <TrendingUp className="h-5 w-5" />
          Market Trends
        </button>
      </div>

      {activeTab === 'buy' && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <MarketplaceFilters filters={filters} onFilterChange={setFilters} />
          </div>
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mockListings.map((item) => (
                <ItemListing key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'sell' && <SellPanel />}
      {activeTab === 'my-listings' && <MyListings />}
      {activeTab === 'trends' && <MarketTrends />}
    </div>
  );
};

export default MarketplaceView;