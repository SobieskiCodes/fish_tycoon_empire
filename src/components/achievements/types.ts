export type AchievementCategory = 'breeding' | 'economic' | 'exploration' | 'social';

export interface Achievement {
  id: string;
  title: string;
  description: string;
  category: AchievementCategory;
  progress?: {
    current: number;
    total: number;
  };
  rewards: {
    gold?: number;
    ap?: number;
    title?: string;
    item?: string;
  };
  completed: boolean;
  completionDate?: string;
  icon: string;
}

export interface WorldFirst {
  id: string;
  type: 'discovery' | 'feat';
  title: string;
  description: string;
  achievedBy: {
    player: string;
    company?: string;
  };
  date: string;
  icon: string;
}