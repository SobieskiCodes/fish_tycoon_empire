import React from 'react';
import { Package, FlaskRound as Flask, ArrowRight } from 'lucide-react';

const SharedResources: React.FC = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Shared Assets</h2>
      <div className="space-y-4">
        <div className="bg-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Package className="h-5 w-5 text-blue-400" />
              <h3 className="font-medium">Shared Supplies</h3>
            </div>
            <span className="text-sm text-gray-400">15 items</span>
          </div>
          <button className="w-full flex items-center justify-between px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded-lg transition-colors">
            <span>Open Warehouse</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="bg-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Flask className="h-5 w-5 text-blue-400" />
              <h3 className="font-medium">Active Research</h3>
            </div>
          </div>
          <div className="mb-3">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-300">UV Filter Tech</span>
              <span>60%</span>
            </div>
            <div className="w-full bg-gray-600 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: '60%' }}
              ></div>
            </div>
          </div>
          <button className="w-full flex items-center justify-between px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded-lg transition-colors">
            <span>View Research Tree</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SharedResources;