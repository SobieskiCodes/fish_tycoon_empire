import React from 'react';
import { Target, Trophy } from 'lucide-react';

const CompanyGoals: React.FC = () => {
  const goals = [
    {
      title: 'Weekly Tank Showcase',
      description: 'Submit your best tank design',
      progress: 75,
      timeLeft: '2 days',
      reward: '500 Gold + Company Rep'
    },
    {
      title: 'Rare Plant Collection',
      description: 'Collect rare aquatic plants',
      progress: 70,
      target: '500',
      current: '350',
      reward: '1000 Gold + Research Points'
    }
  ];

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <Target className="h-5 w-5 text-blue-400" />
        <h2 className="text-lg font-semibold">Current Objectives</h2>
      </div>
      <div className="space-y-4">
        {goals.map((goal, index) => (
          <div key={index} className="bg-gray-700 rounded-lg p-4">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-medium">{goal.title}</h3>
                <p className="text-sm text-gray-400">{goal.description}</p>
              </div>
              <Trophy className="h-5 w-5 text-yellow-400" />
            </div>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-300">Progress</span>
                  <span>
                    {goal.target ? `${goal.current}/${goal.target}` : `${goal.progress}%`}
                  </span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${goal.progress}%` }}
                  ></div>
                </div>
              </div>
              <div className="flex justify-between text-sm text-gray-400">
                <span>{goal.timeLeft}</span>
                <span>Reward: {goal.reward}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyGoals;