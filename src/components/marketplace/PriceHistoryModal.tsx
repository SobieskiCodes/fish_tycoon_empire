import React from 'react';
import { X } from 'lucide-react';

interface PriceHistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  itemName: string;
}

const PriceHistoryModal: React.FC<PriceHistoryModalProps> = ({
  isOpen,
  onClose,
  itemName,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg p-6 max-w-2xl w-full m-4">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-xl font-bold">Price History: {itemName}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-300 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="h-64 bg-gray-700 rounded-lg p-4 mb-4">
          <div className="h-full flex items-center justify-center text-gray-400">
            Price history graph would be rendered here
          </div>
        </div>

        <div className="flex justify-between text-sm text-gray-400">
          <span>Last 30 Days</span>
          <span>Average Price: $1,250</span>
        </div>
      </div>
    </div>
  );
};

export default PriceHistoryModal;