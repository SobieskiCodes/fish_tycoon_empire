import React from 'react';
import { Dna, Fish, ArrowRight } from 'lucide-react';
import { Strain } from './types';

interface StrainStabilityTrackerProps {
  strain: Strain;
}

const StrainStabilityTracker: React.FC<StrainStabilityTrackerProps> = ({ strain }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold">Strain Stabilization: {strain.name}</h2>
          <p className="text-gray-400">Target Trait: {strain.targetTrait}</p>
        </div>
        <div className="h-16 w-16 bg-blue-900/30 rounded-lg flex items-center justify-center">
          <Fish className="h-8 w-8 text-blue-500/50" />
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span>Overall Stability</span>
          <span>{strain.stability}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-3">
          <div
            className="bg-blue-500 h-3 rounded-full"
            style={{ width: `${strain.stability}%` }}
          ></div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-gray-400">
              <th className="pb-3">Generation</th>
              <th className="pb-3">Total Offspring</th>
              <th className="pb-3">Trait Expression</th>
              <th className="pb-3">Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {strain.generations.map((gen) => (
              <tr key={gen.number} className="text-sm">
                <td className="py-3">
                  <div className="flex items-center gap-2">
                    <Dna className="h-4 w-4 text-blue-400" />
                    <div>
                      <div>F{gen.number}</div>
                      <div className="text-xs text-gray-400">{gen.parents}</div>
                    </div>
                  </div>
                </td>
                <td className="py-3">{gen.totalOffspring}</td>
                <td className="py-3">
                  <div className="flex items-center gap-2">
                    <span>{gen.traitExpression}%</span>
                    <div className="w-20 bg-gray-700 rounded-full h-1.5">
                      <div
                        className="bg-blue-500 h-1.5 rounded-full"
                        style={{ width: `${gen.traitExpression}%` }}
                      ></div>
                    </div>
                  </div>
                </td>
                <td className="py-3 text-gray-400">{gen.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex gap-3">
        <button className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
          Start Next Generation
          <ArrowRight className="h-4 w-4" />
        </button>
        <button className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors">
          View Lineage Tree
        </button>
      </div>
    </div>
  );
};

export default StrainStabilityTracker;