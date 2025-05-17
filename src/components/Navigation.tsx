import React from 'react';
import { 
  Home,
  Droplets, 
  FlaskRound as Flask, 
  ShoppingCart,
  LineChart,
  Compass, 
  Building, 
  Mail, 
  Settings,
  Trophy,
  Shield,
  Dna,
  Award,
  Medal
} from 'lucide-react';

type NavItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
  disabled?: boolean;
};

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  const navItems: NavItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: <Home className="h-5 w-5" /> },
    { id: 'tanks', label: 'My Tanks', icon: <Droplets className="h-5 w-5" /> },
    { id: 'breeding', label: 'Breeding Lab', icon: <Flask className="h-5 w-5" /> },
    { id: 'marketplace', label: 'Marketplace', icon: <ShoppingCart className="h-5 w-5" /> },
    { id: 'stocks', label: 'Stock Exchange', icon: <LineChart className="h-5 w-5" /> },
    { id: 'forage', label: 'Forage/Gather', icon: <Compass className="h-5 w-5" /> },
    { id: 'research', label: 'Research & Genetics', icon: <Dna className="h-5 w-5" /> },
    { id: 'company', label: 'Franchise/Company', icon: <Building className="h-5 w-5" /> },
    { id: 'rankings', label: 'Rankings', icon: <Trophy className="h-5 w-5" /> },
    { id: 'security', label: 'Security Console', icon: <Shield className="h-5 w-5" /> },
    { id: 'achievements', label: 'Achievements', icon: <Award className="h-5 w-5" /> },
    { id: 'hall-of-fame', label: 'Hall of Fame', icon: <Medal className="h-5 w-5" /> },
    { id: 'mail', label: 'Mail/Alerts', icon: <Mail className="h-5 w-5" /> },
    { id: 'settings', label: 'Settings', icon: <Settings className="h-5 w-5" /> },
  ];

  return (
    <nav className="w-64 bg-gray-800 min-h-[calc(100vh-8rem)] p-4">
      <ul className="space-y-2">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                ${item.disabled 
                  ? 'bg-gray-700/50 text-gray-400 cursor-not-allowed'
                  : currentPage === item.id
                    ? 'bg-blue-700/20 text-blue-400'
                    : 'hover:bg-blue-700/20 hover:text-blue-400 active:bg-blue-800/30'}`}
              disabled={item.disabled}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;