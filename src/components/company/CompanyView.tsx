import React from 'react';
import { Building, Users, Coins, Trophy, MessageSquare, Settings, LogOut, ChevronRight, CircleDot } from 'lucide-react';
import CompanyMemberList from './CompanyMemberList';
import CompanyGoals from './CompanyGoals';
import SharedResources from './SharedResources';

interface CompanyMember {
  id: string;
  name: string;
  role: string;
  contribution: number;
  online: boolean;
}

interface CompanyData {
  name: string;
  level: number;
  members: CompanyMember[];
  maxMembers: number;
  treasury: number;
  reputation: {
    points: number;
    status: string;
  };
  specialization: string;
  motto: string;
}

const mockCompany: CompanyData = {
  name: "AquaCorp Pioneers",
  level: 5,
  members: [
    { id: '1', name: 'WaterMaster', role: 'Leader', contribution: 2500, online: true },
    { id: '2', name: 'FishWhisperer', role: 'Breeder', contribution: 1800, online: true },
    { id: '3', name: 'CoralQueen', role: 'Supplier', contribution: 1250, online: false },
  ],
  maxMembers: 10,
  treasury: 150300,
  reputation: {
    points: 7500,
    status: 'Esteemed'
  },
  specialization: 'Shrimp Genetics',
  motto: 'Breeding excellence, one generation at a time.'
};

const CompanyView: React.FC = () => {
  return (
    <div className="container mx-auto py-6 px-4">
      <div className="flex items-center gap-3 mb-6">
        <Building className="h-8 w-8 text-blue-400" />
        <div>
          <h1 className="text-2xl font-bold text-white">{mockCompany.name}</h1>
          <p className="text-gray-400">Level {mockCompany.level} Franchise</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Company Overview Panel */}
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="space-y-4">
            <div className="h-32 bg-blue-900/30 rounded-lg flex items-center justify-center">
              <Building className="h-16 w-16 text-blue-500/50" />
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-300">
                <Users className="h-5 w-5 text-blue-400" />
                <span>Members: {mockCompany.members.length} / {mockCompany.maxMembers}</span>
              </div>
              
              <div className="flex items-center gap-2 text-gray-300">
                <Coins className="h-5 w-5 text-yellow-400" />
                <span>Treasury: ${mockCompany.treasury.toLocaleString()}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-300">
                <Trophy className="h-5 w-5 text-blue-400" />
                <span>Reputation: {mockCompany.reputation.status} ({mockCompany.reputation.points} pts)</span>
              </div>

              <div className="p-3 bg-gray-700 rounded-lg">
                <h3 className="font-medium mb-1">Specialization</h3>
                <p className="text-sm text-gray-300">{mockCompany.specialization}</p>
              </div>

              <div className="p-3 bg-gray-700 rounded-lg">
                <h3 className="font-medium mb-1">Company Motto</h3>
                <p className="text-sm text-gray-300">{mockCompany.motto}</p>
              </div>
            </div>

            <div className="space-y-2">
              <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                <Coins className="h-4 w-4" />
                Contribute Resources
              </button>
              <button className="w-full flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors">
                <MessageSquare className="h-4 w-4" />
                View Company Log
              </button>
            </div>
          </div>
        </div>

        {/* Member List Panel */}
        <div className="lg:col-span-2">
          <CompanyMemberList members={mockCompany.members} />
        </div>

        {/* Goals Panel */}
        <div className="lg:col-span-2">
          <CompanyGoals />
        </div>

        {/* Shared Resources Panel */}
        <div>
          <SharedResources />
        </div>

        {/* Company Actions */}
        <div className="lg:col-span-3 flex gap-4 justify-end">
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
            <Settings className="h-4 w-4" />
            Company Settings
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-red-900/50 hover:bg-red-900 text-red-400 hover:text-red-300 rounded-lg transition-colors">
            <LogOut className="h-4 w-4" />
            Leave Company
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyView;