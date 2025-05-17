export interface Player {
  id: string;
  rank: number;
  name: string;
  company: string | null;
  netWorth: number;
  reputation: string;
  rareStrain: string;
  weeklyProfit: number;
}

export interface Company {
  id: string;
  rank: number;
  name: string;
  leader: string;
  memberCount: number;
  maxMembers: number;
  treasury: number;
  researchLevel: number;
  influence: string;
}