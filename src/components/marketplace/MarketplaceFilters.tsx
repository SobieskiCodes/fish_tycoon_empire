import React from 'react';
import { Search, SortAsc, Filter as FilterIcon } from 'lucide-react';
import { ListingFilters, ItemType, ItemRarity } from './types';

interface MarketplaceFiltersProps {
  filters: ListingFilters;
  onFilterChange: (filters: ListingFilters) => void;
}

const MarketplaceFilters: React.FC<MarketplaceFiltersProps> = ({
  filters,
  onFilterChange,
}) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      
      <div className="space-y-4">
        <div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={filters.search}
              onChange={(e) =>
                onFilterChange({ ...filters, search: e.target.value })
              }
              className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Search items..."
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-2">Item Type</label>
          <select
            value={filters.type}
            onChange={(e) =>
              onFilterChange({
                ...filters,
                type: e.target.value as ItemType | 'all',
              })
            }
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
          >
            <option value="all">All Types</option>
            <option value="fish">Fish</option>
            <option value="shrimp">Shrimp</option>
            <option value="plants">Plants</option>
            <option value="decor">Decor</option>
            <option value="supplies">Supplies</option>
            <option value="crafted">Crafted Goods</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-2">Rarity</label>
          <select
            value={filters.rarity}
            onChange={(e) =>
              onFilterChange({
                ...filters,
                rarity: e.target.value as ItemRarity | 'all',
              })
            }
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
          >
            <option value="all">All Rarities</option>
            <option value="common">Common</option>
            <option value="uncommon">Uncommon</option>
            <option value="rare">Rare</option>
            <option value="epic">Epic</option>
            <option value="legendary">Legendary</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-2">Sort By</label>
          <select
            value={filters.sortBy}
            onChange={(e) =>
              onFilterChange({
                ...filters,
                sortBy: e.target.value as ListingFilters['sortBy'],
              })
            }
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
          >
            <option value="newest">Newest Listed</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="time">Time Remaining</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-sm text-gray-300">Price Range</label>
          <input
            type="number"
            placeholder="Min Price"
            value={filters.minPrice || ''}
            onChange={(e) =>
              onFilterChange({
                ...filters,
                minPrice: e.target.value ? Number(e.target.value) : undefined,
              })
            }
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 mb-2"
          />
          <input
            type="number"
            placeholder="Max Price"
            value={filters.maxPrice || ''}
            onChange={(e) =>
              onFilterChange({
                ...filters,
                maxPrice: e.target.value ? Number(e.target.value) : undefined,
              })
            }
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default MarketplaceFilters;