import React from 'react';
import { AlertTriangle, Bell, DollarSign, Mail } from 'lucide-react';

type Alert = {
  type: 'sale' | 'warning' | 'mail';
  message: string;
  time: string;
};

const Alerts: React.FC = () => {
  const alerts: Alert[] = [
    { type: 'sale', message: 'Your "Wild Guppy" sold for $15!', time: '5m ago' },
    { type: 'warning', message: 'Low on "Basic Fish Flakes"!', time: '20m ago' },
    { type: 'mail', message: 'New message from "PlayerX".', time: '1h ago' },
  ];

  const getIcon = (type: Alert['type']) => {
    switch (type) {
      case 'sale':
        return <DollarSign className="h-5 w-5 text-green-400" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-400" />;
      case 'mail':
        return <Mail className="h-5 w-5 text-blue-400" />;
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-4">
      <div className="flex items-center gap-2 mb-4">
        <Bell className="h-5 w-5 text-blue-400" />
        <h2 className="text-lg font-semibold text-white">Recent Alerts</h2>
      </div>
      <div className="space-y-2">
        {alerts.map((alert, index) => (
          <div key={index} className="flex items-start gap-3 bg-gray-700 rounded-lg p-3">
            <div className="mt-0.5">{getIcon(alert.type)}</div>
            <div className="flex-1">
              <p className="text-white">{alert.message}</p>
              <p className="text-xs text-gray-400">{alert.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alerts;