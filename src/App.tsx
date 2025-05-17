import React, { useState } from 'react';
import Header from './components/Header';
import StatusBar from './components/StatusBar';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import CompanyView from './components/company/CompanyView';
import JoinCompany from './components/company/JoinCompany';
import BreedingLab from './components/breeding/BreedingLab';
import TankList from './components/tanks/TankList';
import ForageView from './components/forage/ForageView';
import MarketplaceView from './components/marketplace/MarketplaceView';
import StockExchange from './components/marketplace/StockExchange';
import MailView from './components/mail/MailView';
import SettingsView from './components/settings/SettingsView';
import RankingsView from './components/rankings/RankingsView';
import SecurityConsole from './components/security/SecurityConsole';
import ResearchLab from './components/research/ResearchLab';
import AchievementsView from './components/achievements/AchievementsView';
import HallOfFameView from './components/achievements/HallOfFameView';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [isMemberOfCompany] = useState(true);

  const renderPage = () => {
    switch (currentPage) {
      case 'company':
        return isMemberOfCompany ? <CompanyView /> : <JoinCompany />;
      case 'breeding':
        return <BreedingLab />;
      case 'tanks':
        return <TankList />;
      case 'forage':
        return <ForageView />;
      case 'marketplace':
        return <MarketplaceView />;
      case 'stocks':
        return <StockExchange />;
      case 'research':
        return <ResearchLab />;
      case 'mail':
        return <MailView />;
      case 'settings':
        return <SettingsView />;
      case 'rankings':
        return <RankingsView />;
      case 'security':
        return <SecurityConsole />;
      case 'achievements':
        return <AchievementsView />;
      case 'hall-of-fame':
        return <HallOfFameView />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <StatusBar />
      <div className="flex">
        <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
        <main className="flex-1 p-6">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

export default App;