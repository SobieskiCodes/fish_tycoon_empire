import { ReactNode } from 'react';

export interface PotentialFind {
  name: string;
  icon: ReactNode;
}

export interface Location {
  id: string;
  name: string;
  description: string;
  icon: ReactNode;
  potentialFinds: PotentialFind[];
  apCost: number;
  duration: string;
  locked: boolean;
}

export interface ActiveForage {
  id: string;
  locationName: string;
  progress: number;
  timeRemaining: string;
}