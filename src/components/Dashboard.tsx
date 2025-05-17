import React from 'react';
import TaskQueue from './TaskQueue';
import Alerts from './Alerts';
import DailyQuests from './DailyQuests';

const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <TaskQueue />
      </div>
      <Alerts />
      <DailyQuests />
    </div>
  );
};

export default Dashboard;