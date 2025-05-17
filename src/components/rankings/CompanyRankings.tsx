import React, { useState } from 'react';
import { Search, Eye, Sword, Building, Users, ArrowRight } from 'lucide-react';
import { Company } from './types';

const mockCompanies: Company[] = [
  {
    id: '1',
    rank: 1,
    name: 'AquaCorp Elite',
    leader: 'FishMaster',
    memberCount: 8,
    maxMembers: 10,
    treasury: 2500000,
    researchLevel: 15,
    influence: 'Dominant',
  },
  {
    id: '2',
    rank: 2,
    name: 'Crystal Keepers',
    leader: 'ShrimpsRUs',
    memberCount: 12,
    maxMembers: 15,
    treasury: 1800000,
    researchLevel: 12,
    influence: 'Significant',
  },
  {
    id: '3',
    rank: 3,
    name: 'Plant Masters Guild',
    leader: 'PlantGuru',
    memberCount: 6,
    maxMembers: 10,
    treasury: 1200000,
    researchLevel: 10,
    influence: 'Growing',
  },
];

const CompanyRankings: React.FC = () => {
  const [rankBy, setRankBy] = useState('treasury');
  const [searchTerm, setSearchTerm] = useState('');

  const handleViewCompany = (companyId: string) => {
    console.log('View company:', companyId);
  };

  const handleSpyAction = (companyId: string) => {
    console.log('Spy on company:', companyId);
  };

  const handleSabotageAction = (companyId: string) => {
    console.log('Sabotage company:', companyId);
  };

  const handleJoinRequest = (companyId: string) => {
    console.log('Request to join company:', companyId);
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-blue-500"
            placeholder="Search company name..."
          />
        </div>
        <select
          value={rankBy}
          onChange={(e) => setRankBy(e.target.value)}
          className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
        >
          <option value="treasury">Company Treasury</option>
          <option value="research">Research Level</option>
          <option value="influence">Total Influence</option>
          <option value="members">Member Count</option>
        </select>
      </div>

      <div className="space-y-2">
        {mockCompanies.map((company) => (
          <div
            key={company.id}
            className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-blue-400">
                  #{company.rank}
                </span>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <Building className="h-6 w-6 text-blue-500/50" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">{company.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span>Leader: {company.leader}</span>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>
                          {company.memberCount}/{company.maxMembers}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <div className="font-medium">
                    ${company.treasury.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-400">
                    Research Lvl {company.researchLevel}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleViewCompany(company.id)}
                    className="p-2 hover:bg-gray-500 rounded-lg transition-colors"
                    title="View Company Profile"
                  >
                    <ArrowRight className="h-5 w-5 text-blue-400" />
                  </button>
                  <button
                    onClick={() => handleSpyAction(company.id)}
                    className="p-2 hover:bg-gray-500 rounded-lg transition-colors"
                    title="Spy on Company"
                  >
                    <Eye className="h-5 w-5 text-blue-400" />
                  </button>
                  <button
                    onClick={() => handleSabotageAction(company.id)}
                    className="p-2 hover:bg-gray-500 rounded-lg transition-colors"
                    title="Corporate Sabotage"
                  >
                    <Sword className="h-5 w-5 text-red-400" />
                  </button>
                  {company.memberCount < company.maxMembers && (
                    <button
                      onClick={() => handleJoinRequest(company.id)}
                      className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm transition-colors"
                    >
                      Join
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyRankings;