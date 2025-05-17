import React, { useState } from 'react';
import { Search, Filter, TrendingUp, TrendingDown, LineChart, DollarSign, ArrowRight, X } from 'lucide-react';

interface Stock {
  id: string;
  name: string;
  ticker: string;
  price: number;
  change: number;
  changePercent: number;
  marketCap: number;
  volume: number;
  dayHigh: number;
  dayLow: number;
}

interface Portfolio {
  id: string;
  ticker: string;
  sharesOwned: number;
  avgPrice: number;
  currentPrice: number;
}

const mockStocks: Stock[] = [
  {
    id: '1',
    name: 'AquaPioneers',
    ticker: 'AQUA',
    price: 1250,
    change: 125,
    changePercent: 11.1,
    marketCap: 1250000,
    volume: 5000,
    dayHigh: 1300,
    dayLow: 1100,
  },
  {
    id: '2',
    name: 'Crystal Keepers',
    ticker: 'CRYS',
    price: 850,
    change: -75,
    changePercent: -8.1,
    marketCap: 850000,
    volume: 3000,
    dayHigh: 950,
    dayLow: 800,
  },
];

const mockPortfolio: Portfolio[] = [
  {
    id: '1',
    ticker: 'AQUA',
    sharesOwned: 100,
    avgPrice: 1000,
    currentPrice: 1250,
  },
  {
    id: '2',
    ticker: 'CRYS',
    sharesOwned: 50,
    avgPrice: 900,
    currentPrice: 850,
  },
];

interface TradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  stock: Stock;
}

const TradeModal: React.FC<TradeModalProps> = ({ isOpen, onClose, stock }) => {
  const [tradeType, setTradeType] = useState<'buy' | 'sell'>('buy');
  const [shares, setShares] = useState('');

  if (!isOpen) return null;

  const estimatedCost = Number(shares) * stock.price;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg p-6 max-w-lg w-full m-4">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-xl font-bold">{stock.name} (${stock.ticker})</h2>
            <p className="text-gray-400">Current Price: ${stock.price}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-300 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setTradeType('buy')}
            className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
              tradeType === 'buy'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-700 hover:bg-gray-600'
            }`}
          >
            Buy
          </button>
          <button
            onClick={() => setTradeType('sell')}
            className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
              tradeType === 'sell'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-700 hover:bg-gray-600'
            }`}
          >
            Sell
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Number of Shares
            </label>
            <input
              type="number"
              value={shares}
              onChange={(e) => setShares(e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter quantity..."
            />
          </div>

          <div className="p-4 bg-gray-700 rounded-lg">
            <div className="flex justify-between items-center">
              <span>Estimated {tradeType === 'buy' ? 'Cost' : 'Proceeds'}</span>
              <span className="text-lg font-medium">
                ${estimatedCost.toLocaleString()}
              </span>
            </div>
          </div>

          <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg transition-colors">
            <DollarSign className="h-5 w-5" />
            Confirm {tradeType === 'buy' ? 'Buy' : 'Sell'} Order
          </button>
        </div>
      </div>
    </div>
  );
};

const StockExchange: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'browse' | 'portfolio'>('browse');
  const [selectedStock, setSelectedStock] = useState<Stock | null>(null);

  const portfolioValue = mockPortfolio.reduce(
    (sum, holding) => sum + holding.sharesOwned * holding.currentPrice,
    0
  );

  const totalPL = mockPortfolio.reduce(
    (sum, holding) =>
      sum + holding.sharesOwned * (holding.currentPrice - holding.avgPrice),
    0
  );

  return (
    <div className="container mx-auto py-6 px-4">
      <div className="flex items-center gap-3 mb-6">
        <LineChart className="h-8 w-8 text-blue-400" />
        <h1 className="text-2xl font-bold">Company Stock Exchange</h1>
      </div>

      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab('browse')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'browse'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-700 hover:bg-gray-600'
          }`}
        >
          <Search className="h-5 w-5" />
          Browse Stocks
        </button>
        <button
          onClick={() => setActiveTab('portfolio')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'portfolio'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-700 hover:bg-gray-600'
          }`}
        >
          <DollarSign className="h-5 w-5" />
          My Portfolio
        </button>
      </div>

      {activeTab === 'browse' && (
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Search company name or ticker..."
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
              <Filter className="h-5 w-5" />
              Filter
            </button>
          </div>

          <div className="space-y-4">
            {mockStocks.map((stock) => (
              <div
                key={stock.id}
                className="bg-gray-800 rounded-lg p-4"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{stock.name}</h3>
                    <p className="text-sm text-gray-400">${stock.ticker}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-medium">
                      ${stock.price.toLocaleString()}
                    </div>
                    <div
                      className={`flex items-center gap-1 text-sm ${
                        stock.change >= 0 ? 'text-green-400' : 'text-red-400'
                      }`}
                    >
                      {stock.change >= 0 ? (
                        <TrendingUp className="h-4 w-4" />
                      ) : (
                        <TrendingDown className="h-4 w-4" />
                      )}
                      <span>
                        {stock.change >= 0 ? '+' : ''}
                        ${Math.abs(stock.change)} ({stock.changePercent}%)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>Vol: {stock.volume.toLocaleString()}</span>
                    <span>
                      H: ${stock.dayHigh} | L: ${stock.dayLow}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedStock(stock)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                  >
                    Trade
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'portfolio' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-sm text-gray-400 mb-1">Portfolio Value</h3>
              <div className="text-2xl font-bold">
                ${portfolioValue.toLocaleString()}
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-sm text-gray-400 mb-1">Total P/L</h3>
              <div
                className={`text-2xl font-bold ${
                  totalPL >= 0 ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {totalPL >= 0 ? '+' : '-'}${Math.abs(totalPL).toLocaleString()}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {mockPortfolio.map((holding) => (
              <div
                key={holding.id}
                className="bg-gray-800 rounded-lg p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h3 className="font-medium">${holding.ticker}</h3>
                    <p className="text-sm text-gray-400">
                      {holding.sharesOwned} shares @ ${holding.avgPrice}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-medium">
                      ${(holding.sharesOwned * holding.currentPrice).toLocaleString()}
                    </div>
                    <div
                      className={`text-sm ${
                        holding.currentPrice >= holding.avgPrice
                          ? 'text-green-400'
                          : 'text-red-400'
                      }`}
                    >
                      {holding.currentPrice >= holding.avgPrice ? '+' : '-'}$
                      {Math.abs(
                        holding.sharesOwned * (holding.currentPrice - holding.avgPrice)
                      ).toLocaleString()}
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => {
                      const stock = mockStocks.find((s) => s.ticker === holding.ticker);
                      if (stock) setSelectedStock(stock);
                    }}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                  >
                    Trade
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedStock && (
        <TradeModal
          isOpen={true}
          onClose={() => setSelectedStock(null)}
          stock={selectedStock}
        />
      )}
    </div>
  );
};

export default StockExchange;