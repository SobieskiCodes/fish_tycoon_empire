import React from 'react';
import { CircleDot, MessageSquare, UserCog } from 'lucide-react';

interface CompanyMember {
  id: string;
  name: string;
  role: string;
  contribution: number;
  online: boolean;
}

interface CompanyMemberListProps {
  members: CompanyMember[];
}

const CompanyMemberList: React.FC<CompanyMemberListProps> = ({ members }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Team Roster</h2>
      <div className="space-y-2">
        {members.map(member => (
          <div key={member.id} className="flex items-center justify-between bg-gray-700 p-3 rounded-lg">
            <div className="flex items-center gap-3">
              <CircleDot className={`h-3 w-3 ${member.online ? 'text-green-400' : 'text-gray-400'}`} />
              <div>
                <p className="font-medium">{member.name}</p>
                <p className="text-sm text-gray-400">{member.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-300">Activity: {member.contribution} pts</span>
              <div className="flex gap-2">
                <button className="p-1 hover:bg-gray-600 rounded-lg transition-colors">
                  <MessageSquare className="h-4 w-4 text-blue-400" />
                </button>
                <button className="p-1 hover:bg-gray-600 rounded-lg transition-colors">
                  <UserCog className="h-4 w-4 text-blue-400" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyMemberList;