export type ItemType = 'fish' | 'shrimp' | 'plants' | 'decor' | 'supplies' | 'crafted';
export type ItemRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

export interface MarketItem {
  id: string;
  name: string;
  type: ItemType;
  rarity: ItemRarity;
  description: string;
  traits?: string[];
  generation?: string;
  seller: string;
  price: number;
  timeRemaining?: string;
  currentBid?: number;
  isAuction: boolean;
}

export interface ListingFilters {
  search: string;
  type: ItemType | 'all';
  rarity: ItemRarity | 'all';
  sortBy: 'price-asc' | 'price-desc' | 'time' | 'newest';
  minPrice?: number;
  maxPrice?: number;
}