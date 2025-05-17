import React from 'react';
import { Fish, Dna } from 'lucide-react';
import { Parent } from './types';

interface LineageTreeViewerProps {
  isOpen: boolean;
  onClose: () => void;
  focusFish: Parent;
  parents?: [Parent | null, Parent | null];
  grandparents?: [Parent | null, Parent | null, Parent | null, Parent | null];
  offspring?: Parent[];
}

const FishCard: React.FC<{ fish: Parent | null; isParent?: boolean }> = ({ fish, isParent }) => {
  if (!fish) return null;

  return (
    <div className={`bg-gray-700 rounded-lg p-3 ${isParent ? 'border border-blue-500/30' : ''}`}>
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 bg-blue-900/30 rounded-lg flex items-center justify-center">
          <Fish className="h-5 w-5 text-blue-500/50" />
        </div>
        <div>
          <h4 className="font-medium">{fish.name}</h4>
          <p className="text-sm text-gray-400">{fish.strain}</p>
        </div>
      </div>
      <div className="mt-2 space-y-1">
        {fish.traits.map((trait, index) => (
          <div
            key={index}
            className="text-xs px-2 py-1 bg-gray-600 rounded-full inline-block mr-1"
          >
            {trait}
          </div>
        ))}
      </div>
    </div>
  );
};

const LineageTreeViewer: React.FC<LineageTreeViewerProps> = ({
  isOpen,
  onClose,
  focusFish,
  parents,
  grandparents,
  offspring,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg p-6 max-w-4xl w-full m-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-2">
            <Dna className="h-6 w-6 text-blue-400" />
            <h2 className="text-xl font-bold">Lineage Viewer: {focusFish.name}</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-300 transition-colors"
          >
            ×
          </button>
        </div>

        <div className="space-y-8">
          {/* Grandparents */}
          {grandparents && (
            <div className="grid grid-cols-4 gap-4">
              {grandparents.map((gp, index) => (
                <FishCard key={`gp-${index}`} fish={gp} />
              ))}
            </div>
          )}

          {/* Parents */}
          {parents && (
            <div className="grid grid-cols-2 gap-4">
              {parents.map((parent, index) => (
                <FishCard key={`p-${index}`} fish={parent} isParent />
              ))}
            </div>
          )}

          {/* Focus Fish */}
          <div className="max-w-md mx-auto">
            <FishCard fish={focusFish} />
          </div>

          {/* Offspring */}
          {offspring && offspring.length > 0 && (
            <div>
              <h3 className="text-lg font-medium mb-3">Offspring</h3>
              <div className="grid grid-cols-3 gap-4">
                {offspring.map((child, index) => (
                  <FishCard key={`o-${index}`} fish={child} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LineageTreeViewer;