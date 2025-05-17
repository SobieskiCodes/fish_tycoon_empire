import React, { useState } from 'react';
import { Trophy, X, AlertTriangle, Coins } from 'lucide-react';
import { StabilizedStrain } from './types';

interface StrainRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  strain: StabilizedStrain;
  onRegister: (name: string) => void;
}

const StrainRegistrationModal: React.FC<StrainRegistrationModalProps> = ({
  isOpen,
  onClose,
  strain,
  onRegister,
}) => {
  const [strainName, setStrainName] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!strainName.trim()) {
      setError('Please enter a name for your strain');
      return;
    }
    onRegister(strainName);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg p-6 max-w-lg w-full m-4">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-3">
            <Trophy className="h-6 w-6 text-yellow-400" />
            <div>
              <h2 className="text-xl font-bold">New Strain Discovered & Stabilized!</h2>
              <p className="text-gray-400">
                Congratulations! You've successfully stabilized a new strain!
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-300 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-700 rounded-lg p-4">
            <h3 className="font-medium mb-2">Strain Details</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Base Species:</span>
                <span>{strain.baseSpecies}</span>
              </div>
              {strain.traits.color && (
                <div className="flex justify-between">
                  <span className="text-gray-400">Color:</span>
                  <span>{strain.traits.color}</span>
                </div>
              )}
              {strain.traits.pattern && (
                <div className="flex justify-between">
                  <span className="text-gray-400">Pattern:</span>
                  <span>{strain.traits.pattern}</span>
                </div>
              )}
              {strain.traits.finType && (
                <div className="flex justify-between">
                  <span className="text-gray-400">Fin Type:</span>
                  <span>{strain.traits.finType}</span>
                </div>
              )}
              {strain.traits.special && strain.traits.special.length > 0 && (
                <div className="flex justify-between">
                  <span className="text-gray-400">Special Traits:</span>
                  <span>{strain.traits.special.join(', ')}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-gray-400">Generation:</span>
                <span>F{strain.generation}</span>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Propose Strain Name
            </label>
            <input
              type="text"
              value={strainName}
              onChange={(e) => {
                setStrainName(e.target.value);
                setError('');
              }}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              placeholder="e.g., Electric Blue Diamond"
            />
            {error && (
              <div className="flex items-center gap-2 text-red-400 text-sm mt-2">
                <AlertTriangle className="h-4 w-4" />
                <span>{error}</span>
              </div>
            )}
            <p className="text-xs text-gray-400 mt-2">
              Names should be descriptive and unique. All names are subject to moderation.
            </p>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Coins className="h-5 w-5 text-yellow-400" />
                <span>Registration Fee:</span>
              </div>
              <span>{strain.registrationFee} Gold</span>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleSubmit}
              className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
            >
              Register Strain
            </button>
            <button
              onClick={onClose}
              className="flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors"
            >
              Name Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrainRegistrationModal;