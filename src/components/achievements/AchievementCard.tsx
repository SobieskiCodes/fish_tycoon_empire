import React from 'react';
import {
  Award,
  Dna,
  Fish,
  Coins,
  Compass,
  Users,
  Trophy,
  Clock,
  Check,
} from 'lucide-react';
import { Achievement } from './types';

interface AchievementCardProps {
  achievement: Achievement;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ achievement }) => {
  const getIcon = () => {
    switch (achievement.icon) {
      case 'dna':
        return <Dna className="h-6 w-6 text-blue-400" />;
      case 'fish':
        return <Fish className="h-6 w-6 text-blue-400" />;
      case 'coins':
        return <Coins className="h-6 w-6 text-yellow-400" />;
      case 'compass':
        return <Compass className="h-6 w-6 text-green-400" />;
      case 'users':
        return <Users className="h-6 w-6 text-purple-400" />;
      default:
        return <Trophy className="h-6 w-6 text-blue-400" />;
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 bg-gray-700 rounded-lg flex items-center justify-center">
            {getIcon()}
          </div>
          <div>
            <h3 className="font-medium">{achievement.title}</h3>
            <p className="text-sm text-gray-400">{achievement.description}</p>
          </div>
        </div>
        {achievement.completed && (
          <Check className="h-5 w-5 text-green-400" />
        )}
      </div>

      {achievement.progress && !achievement.completed && (
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-300">Progress</span>
            <span>
              {achievement.progress.current}/{achievement.progress.total}
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full"
              style={{
                width: `${(achievement.progress.current / achievement.progress.total) * 100}%`,
              }}
            ></div>
          </div>
        </div>
      )}

      <div className="space-y-2">
        <div className="text-sm">
          <span className="text-gray-400">Rewards:</span>
          <div className="flex flex-wrap gap-2 mt-1">
            {achievement.rewards.gold && (
              <span className="flex items-center gap-1 text-yellow-400">
                <Coins className="h-4 w-4" />
                {achievement.rewards.gold}
              </span>
            )}
            {achievement.rewards.ap && (
              <span className="flex items-center gap-1 text-blue-400">
                <Trophy className="h-4 w-4" />
                {achievement.rewards.ap} AP
              </span>
            )}
            {achievement.rewards.title && (
              <span className="flex items-center gap-1 text-purple-400">
                <Award className="h-4 w-4" />
                {achievement.rewards.title}
              </span>
            )}
          </div>
        </div>

        {achievement.completed && achievement.completionDate && (
          <div className="flex items-center gap-1 text-sm text-gray-400">
            <Clock className="h-4 w-4" />
            <span>Completed: {achievement.completionDate}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default AchievementCard;