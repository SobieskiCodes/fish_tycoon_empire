import React from 'react';
import { Fish, User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Fish className="h-8 w-8" />
          <h1 className="text-2xl font-bold tracking-tight">Fish Tycoon Empire</h1>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm mr-2">Player123</span>
          <div className="bg-blue-700 p-1 rounded-full">
            <User className="h-6 w-6" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;