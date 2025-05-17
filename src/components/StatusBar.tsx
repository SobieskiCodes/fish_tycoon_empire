import React from 'react';
import { Clock, Coins, Zap, Timer, Sun, AlertTriangle } from 'lucide-react';

interface ActiveTask {
  type: 'foraging' | 'breeding' | 'crafting';
  name: string;
  progress: number;
  timeRemaining: string;
}

interface Warning {
  type: 'critical' | 'warning';
  message: string;
}

const StatusBar: React.FC = () => {
  const activeTask: ActiveTask = {
    type: 'foraging',
    name: 'Riverbank',
    progress: 75,
    timeRemaining: '10m 15s'
  };

  const warnings: Warning[] = [
    { type: 'critical', message: 'Critical: Breeding Tank #2 Sabotaged!' },
    { type: 'warning', message: 'Warning: Critically Low on Fish Food!' }
  ];

  return (
    <div className="bg-gray-800 text-white p-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Sun className="h-5 w-5 text-yellow-400" />
            <span className="font-medium">Sunny Day (+5% Plant Growth)</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-yellow-400" />
            <span className="font-medium">AP: 150 / ∞</span>
          </div>
          <div className="flex items-center gap-2">
            <Coins className="h-5 w-5 text-yellow-500" />
            <span className="font-medium">Gold: $25,800</span>
          </div>
          {warnings.length > 0 && (
            <div className="relative group">
              <AlertTriangle className="h-5 w-5 text-red-400 cursor-help" />
              <div className="absolute left-0 top-full mt-2 bg-gray-700 rounded-lg p-2 w-64 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all z-50">
                {warnings.map((warning, index) => (
                  <div
                    key={index}
                    className={`text-sm ${
                      warning.type === 'critical' ? 'text-red-400' : 'text-yellow-400'
                    } ${index > 0 ? 'mt-1' : ''}`}
                  >
                    {warning.message}
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeTask && (
            <div className="flex items-center gap-2">
              <Timer className="h-5 w-5 text-blue-400" />
              <span className="font-medium">
                {activeTask.type.charAt(0).toUpperCase() + activeTask.type.slice(1)}: {activeTask.name}
              </span>
              <div className="w-24 bg-gray-700 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${activeTask.progress}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-300">{activeTask.timeRemaining}</span>
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-blue-400" />
          <span className="font-medium">Year 1, Day 35, 10:00 AM</span>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;