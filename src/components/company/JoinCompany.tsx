import React, { useState } from 'react';
import { Building, Search, Filter, Plus } from 'lucide-react';

interface CompanyListing {
  id: string;
  name: string;
  memberCount: number;
  maxMembers: number;
  specialization: string;
  description: string;
  level: number;
}

const mockCompanies: CompanyListing[] = [
  {
    id: '1',
    name: 'Deep Blue Aquatics',
    memberCount: 8,
    maxMembers: 10,
    specialization: 'Rare Breeds',
    description: 'Focused on breeding and preserving rare aquatic species.',
    level: 7
  },
  {
    id: '2',
    name: 'Coral Collective',
    memberCount: 5,
    maxMembers: 15,
    specialization: 'Plant Cultivation',
    description: 'Specializing in aquascaping and plant breeding.',
    level: 4
  }
];

const JoinCompany: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [newCompanyName, setNewCompanyName] = useState('');
  const [specialization, setSpecialization] = useState('');

  return (
    <div className="container mx-auto py-6 px-4">
      <div className="flex items-center gap-3 mb-6">
        <Building className="h-8 w-8 text-blue-400" />
        <h1 className="text-2xl font-bold text-white">Join a Company</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Create Company Panel */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Create Your Own Company</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-300 mb-2">Company Name</label>
              <input
                type="text"
                value={newCompanyName}
                onChange={(e) => setNewCompanyName(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Enter company name..."
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">Specialization (Optional)</label>
              <select
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              >
                <option value="">Select specialization...</option>
                <option value="breeding">Breeding</option>
                <option value="plants">Plant Cultivation</option>
                <option value="rare">Rare Species</option>
              </select>
            </div>

            <div className="p-3 bg-gray-700 rounded-lg">
              <p className="text-sm text-gray-300">Creation Cost: 5,000 Gold</p>
            </div>

            <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg transition-colors">
              <Plus className="h-5 w-5" />
              Found Company
            </button>
          </div>
        </div>

        {/* Browse Companies Panel */}
        <div className="lg:col-span-2">
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Browse Existing Companies</h2>
            
            <div className="flex gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-blue-500"
                  placeholder="Search companies..."
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                <Filter className="h-5 w-5" />
                Filter
              </button>
            </div>

            <div className="space-y-4">
              {mockCompanies.map((company) => (
                <div key={company.id} className="bg-gray-700 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium">{company.name}</h3>
                      <p className="text-sm text-gray-400">Level {company.level} Company</p>
                    </div>
                    <span className="text-sm text-gray-300">
                      {company.memberCount}/{company.maxMembers} Members
                    </span>
                  </div>
                  <p className="text-sm text-gray-300 mb-3">{company.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-400">{company.specialization}</span>
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                      Apply to Join
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinCompany;