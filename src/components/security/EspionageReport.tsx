import React from 'react';
import { Building, Eye, Sword, AlertTriangle, Timer, X } from 'lucide-react';
import { RivalStore, SecurityVulnerability } from './types';

interface EspionageReportProps {
  isOpen: boolean;
  onClose: () => void;
  target: RivalStore;
  onSabotage: (targetId: string) => void;
}

const getVulnerabilityIcon = (type: SecurityVulnerability['type']) => {
  switch (type) {
    case 'physical':
      return <AlertTriangle className="h-4 w-4 text-red-400" />;
    case 'system':
      return <AlertTriangle className="h-4 w-4 text-yellow-400" />;
    case 'personnel':
      return <AlertTriangle className="h-4 w-4 text-orange-400" />;
    default:
      return <AlertTriangle className="h-4 w-4 text-gray-400" />;
  }
};

const EspionageReport: React.FC<EspionageReportProps> = ({
  isOpen,
  onClose,
  target,
  onSabotage,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg p-6 max-w-2xl w-full m-4">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-3">
            <Eye className="h-6 w-6 text-blue-400" />
            <div>
              <h2 className="text-xl font-bold">Espionage Report: {target.name}</h2>
              <p className="text-gray-400">
                Owner: {target.owner} • {target.company || 'Independent'}
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Stock & Pricing */}
          <div className="bg-gray-700 rounded-lg p-4">
            <h3 className="font-medium mb-3">Observed Stock & Pricing</h3>
            <div className="space-y-2">
              {target.observedStock.map((item, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span>{item.name}</span>
                  <span className="text-gray-400">${item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Business Metrics */}
          <div className="bg-gray-700 rounded-lg p-4">
            <h3 className="font-medium mb-3">Business Intelligence</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Revenue Level</span>
                <span className="text-yellow-400">{target.estimatedRevenue}</span>
              </div>
              <div className="flex justify-between">
                <span>Active Projects</span>
                <span className="text-blue-400">{target.activeProjects}</span>
              </div>
              <div className="flex justify-between">
                <span>Customer Traffic</span>
                <span className="text-green-400">{target.customerTraffic}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Security Vulnerabilities */}
        <div className="bg-gray-700 rounded-lg p-4 mb-6">
          <h3 className="font-medium mb-3">Detected Vulnerabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {target.vulnerabilities.map((vuln, index) => (
              <div
                key={index}
                className="flex items-start gap-2 bg-gray-600/50 rounded-lg p-3"
              >
                {getVulnerabilityIcon(vuln.type)}
                <div>
                  <p className="text-sm font-medium">{vuln.name}</p>
                  <p className="text-xs text-gray-400">{vuln.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Threat Assessment */}
        <div className="bg-gray-700 rounded-lg p-4 mb-6">
          <h3 className="font-medium mb-3">Overall Threat Assessment</h3>
          <p className="text-sm text-gray-300">{target.threatAssessment}</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Timer className="h-4 w-4" />
            <span>Next spy attempt available in: {target.nextSpyAttempt}</span>
          </div>
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
            >
              Close Report
            </button>
            <button
              onClick={() => onSabotage(target.id)}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
            >
              <Sword className="h-4 w-4" />
              Launch Sabotage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EspionageReport;