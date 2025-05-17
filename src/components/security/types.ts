export interface SecurityUpgrade {
  id: string;
  name: string;
  level: number;
  maxLevel: number;
  effect: string;
  apCost: number;
  goldCost: number;
  installed: boolean;
}

export interface SecurityEvent {
  id: string;
  type: 'attempt' | 'breach';
  description: string;
  outcome: string;
  timestamp: string;
}

export interface SecurityVulnerability {
  type: 'physical' | 'system' | 'personnel';
  name: string;
  description: string;
}

export interface ObservedItem {
  name: string;
  price: number;
}

export interface RivalStore {
  id: string;
  name: string;
  owner: string;
  company: string | null;
  estimatedRevenue: string;
  activeProjects: string;
  customerTraffic: string;
  observedStock: ObservedItem[];
  vulnerabilities: SecurityVulnerability[];
  threatAssessment: string;
  nextSpyAttempt: string;
}