import React from 'react';
import { Package, Timer, ArrowRight, X } from 'lucide-react';

interface Listing {
  id: string;
  name: string;
  type: 'sale' | 'bid';
  price: number;
  highestBid?: number;
  timeRemaining: string;
  status?: 'highest' | 'outbid';
}

const MyListings: React.FC = () => {
  const listings: Listing[] = [
    {
      id: '1',
      name: 'Blue Diamond Guppy',
      type: 'sale',
      price: 5000,
      timeRemaining: '1d 5h',
    },
    {
      id: '2',
      name: 'Crystal Red Shrimp',
      type: 'bid',
      price: 2500,
      highestBid: 3000,
      timeRemaining: '5h',
      status: 'outbid',
    },
    {
      id: '3',
      name: 'Rare Plant Bundle',
      type: 'bid',
      price: 1500,
      highestBid: 1500,
      timeRemaining: '2d',
      status: 'highest',
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Active Sales */}
      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">My Active Sales</h2>
        <div className="space-y-4">
          {listings
            .filter((listing) => listing.type === 'sale')
            .map((listing) => (
              <div
                key={listing.id}
                className="bg-gray-700 rounded-lg p-4"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium">{listing.name}</h3>
                    <p className="text-sm text-gray-400">
                      Listed for: ${listing.price.toLocaleString()}
                    </p>
                  </div>
                  <button className="text-red-400 hover:text-red-300 transition-colors">
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Timer className="h-4 w-4 text-blue-400" />
                    <span>{listing.timeRemaining} remaining</span>
                  </div>
                  <button className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors">
                    View Details
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Active Bids */}
      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">My Active Bids</h2>
        <div className="space-y-4">
          {listings
            .filter((listing) => listing.type === 'bid')
            .map((listing) => (
              <div
                key={listing.id}
                className="bg-gray-700 rounded-lg p-4"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium">{listing.name}</h3>
                    <p className="text-sm text-gray-400">
                      Your bid: ${listing.price.toLocaleString()}
                    </p>
                    {listing.highestBid && (
                      <p className="text-sm text-gray-400">
                        Current highest: ${listing.highestBid.toLocaleString()}
                      </p>
                    )}
                  </div>
                  <span
                    className={`text-sm px-2 py-1 rounded-full ${
                      listing.status === 'highest'
                        ? 'bg-green-900/50 text-green-400'
                        : 'bg-red-900/50 text-red-400'
                    }`}
                  >
                    {listing.status === 'highest' ? 'Highest Bid' : 'Outbid!'}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Timer className="h-4 w-4 text-blue-400" />
                    <span>{listing.timeRemaining} remaining</span>
                  </div>
                  <button className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors">
                    View Auction
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MyListings;