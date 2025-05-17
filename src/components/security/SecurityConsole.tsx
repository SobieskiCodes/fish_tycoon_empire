import React, { useState } from 'react';
import { Shield, AlertTriangle, Clock, Lock, Filter, Zap } from 'lucide-react';
import { SecurityUpgrade, SecurityEvent } from './types';

const mockUpgrades: SecurityUpgrade[] = [
  {
    id: '1',
    name: 'Basic Tank Alarm',
    level: 1,
    maxLevel: 3,
    effect: '+10% Sabotage Detection',
    apCost: 15,
    goldCost: 2500,
    installed: true,
  },
  {
    id: '2',
    name: 'Reinforced Locks',
    level: 2,
    maxLevel: 3,
    effect: '-15% Theft Chance',
    apCost: 20,
    goldCost: 5000,
    installed: true,
  },
  {
    id: '3',
    name: 'Night Watchman Contract',
    level: 0,
    maxLevel: 1,
    effect: '+25% Security during night cycle',
    apCost: 30,
    goldCost: 10000,
    installed: false,
  },
  {
    id: '4',
    name: 'Anti-Malware Filter',
    level: 0,
    maxLevel: 2,
    effect: 'Prevents fake reviews and market manipulation',
    apCost: 25,
    goldCost: 7500,
    installed: false,
  },
];

const mockEvents: SecurityEvent[] = [
  {
    id: '1',
    type: 'attempt',
    description: 'Sabotage attempt (Disease) on Tank 3',
    outcome: 'Repelled by Basic Tank Alarm',
    timestamp: '2025-05-17 10:30 AM',
  },
  {
    id: '2',
    type: 'breach',
    description: 'Successful Espionage detected from RivalPlayerX',
    outcome: 'Minimal info lost',
    timestamp: '2025-05-17 09:45 AM',
  },
  {
    id: '3',
    type: 'breach',
    description: 'Security Breach! Fake Bad Reviews posted',
    outcome: 'Reputation -5% for 24h',
    timestamp: '2025-05-17 09:30 AM',
  },
];

const SecurityConsole: React.FC = () => {
  const [isLockdownActive, setIsLockdownActive] = useState(false);
  const securityLevel = 75;

  const handleUpgrade = (upgradeId: string) => {
    console.log('Upgrading security measure:', upgradeId);
  };

  const activateLockdown = () => {
    setIsLockdownActive(true);
    // In a real implementation, this would trigger the lockdown protocol
    setTimeout(() => setIsLockdownActive(false), 5000); // Reset after 5s for demo
  };

  return (
    <div className="container mx-auto py-6 px-4">
      <div className="flex items-center gap-3 mb-6">
        <Shield className="h-8 w-8 text-blue-400" />
        <h1 className="text-2xl font-bold">Store Security Console</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Security Status Panel */}
        <div className="lg:col-span-2 bg-gray-800 rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold">Overall Security Status</h2>
              <p className="text-gray-400">Current Protection Level</p>
            </div>
            <div className="h-16 w-16 relative">
              <Shield className="h-16 w-16 text-blue-400" />
              <span className="absolute inset-0 flex items-center justify-center font-bold">
                {securityLevel}%
              </span>
            </div>
          </div>

          <div className="w-full bg-gray-700 rounded-full h-3 mb-6">
            <div
              className="bg-blue-500 h-3 rounded-full"
              style={{ width: `${securityLevel}%` }}
            ></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mockUpgrades.map((upgrade) => (
              <div
                key={upgrade.id}
                className="bg-gray-700 rounded-lg p-4"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium">{upgrade.name}</h3>
                  <span className={`text-sm px-2 py-1 rounded-full ${
                    upgrade.installed ? 'bg-green-900/50 text-green-400' : 'bg-gray-600'
                  }`}>
                    {upgrade.installed ? `Level ${upgrade.level}` : 'Not Installed'}
                  </span>
                </div>
                <p className="text-sm text-gray-300 mb-3">{upgrade.effect}</p>
                {upgrade.level < upgrade.maxLevel && (
                  <button
                    onClick={() => handleUpgrade(upgrade.id)}
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
                  >
                    <Zap className="h-4 w-4" />
                    {upgrade.installed ? 'Upgrade' : 'Install'} ({upgrade.apCost} AP)
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Activity Log Panel */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Security Events</h2>
          <div className="space-y-3">
            {mockEvents.map((event) => (
              <div
                key={event.id}
                className="bg-gray-700 rounded-lg p-3"
              >
                <div className="flex items-start gap-3">
                  {event.type === 'attempt' ? (
                    <Shield className="h-5 w-5 text-green-400 mt-0.5" />
                  ) : (
                    <AlertTriangle className="h-5 w-5 text-red-400 mt-0.5" />
                  )}
                  <div>
                    <p className="text-sm">{event.description}</p>
                    <p className="text-sm text-gray-400">{event.outcome}</p>
                    <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                      <Clock className="h-3 w-3" />
                      <span>{event.timestamp}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <button
              onClick={activateLockdown}
              disabled={isLockdownActive}
              className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-colors ${
                isLockdownActive
                  ? 'bg-red-900/50 text-red-400 cursor-not-allowed'
                  : 'bg-red-600 hover:bg-red-700 text-white'
              }`}
            >
              <Lock className="h-5 w-5" />
              {isLockdownActive ? 'Lockdown Active' : 'Activate Lockdown Protocol (50 AP)'}
            </button>
            {isLockdownActive && (
              <p className="text-sm text-center text-red-400 mt-2">
                All security measures enhanced for 4 hours. Store traffic reduced.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityConsole;