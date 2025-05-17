export interface ResearchNode {
  id: string;
  name: string;
  description: string;
  type: 'general' | 'genetics' | 'company';
  apCost: number;
  goldCost: number;
  timeToComplete: string;
  prerequisites: string[];
  completed: boolean;
  locked: boolean;
}

export interface ResearchProject {
  id: string;
  name: string;
  progress: number;
  timeRemaining: string;
  apInvested: number;
}