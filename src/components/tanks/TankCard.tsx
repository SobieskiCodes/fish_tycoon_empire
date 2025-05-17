import React from 'react';
import { Droplets, ThermometerSun, Fish, AlertTriangle, Settings } from 'lucide-react';
import clsx from 'clsx';

export type Tank = {
  id: string;
  name: string;
  fishCount: number;
  capacity: number;
  waterQuality: 'Excellent' | 'Good' | 'Fair' | 'Poor';
  temperature: number;
  targetTemperature: number;
  alerts: Array<'water' | 'sickness' | 'hunger'>;
};

const waterQualityColors = {
  Excellent: 'text-green-400',
  Good: 'text-green-300',
  Fair: 'text-yellow-400',
  Poor: 'text-red-400',
};

interface TankCardProps {
  tank: Tank;
  onManage: (tankId: string) => void;
}

const TankCard: React.FC<TankCardProps> = ({ tank, onManage }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-white">{tank.name}</h3>
        {tank.alerts.length > 0 && (
          <div className="flex gap-1">
            {tank.alerts.includes('water') && (
              <AlertTriangle className="h-5 w-5 text-red-400" />
            )}
            {tank.alerts.includes('sickness') && (
              <AlertTriangle className="h-5 w-5 text-yellow-400" />
            )}
            {tank.alerts.includes('hunger') && (
              <AlertTriangle className="h-5 w-5 text-orange-400" />
            )}
          </div>
        )}
      </div>

      <div className="h-32 bg-blue-900/30 rounded-lg mb-4 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Fish className="h-16 w-16 text-blue-500/50" />
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2">
          <Fish className="h-4 w-4 text-blue-400" />
          <span className="text-sm text-gray-300">
            Fish Count: {tank.fishCount} / {tank.capacity}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Droplets className="h-4 w-4 text-blue-400" />
          <span className="text-sm">
            Water Quality:{' '}
            <span className={clsx('font-medium', waterQualityColors[tank.waterQuality])}>
              {tank.waterQuality}
            </span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <ThermometerSun className="h-4 w-4 text-blue-400" />
          <span className="text-sm text-gray-300">
            Temperature: {tank.temperature}°C / {tank.targetTemperature}°C
          </span>
        </div>
      </div>

      <button
        onClick={() => onManage(tank.id)}
        className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
      >
        <Settings className="h-4 w-4" />
        Manage Tank
      </button>
    </div>
  );
};

export default TankCard;