export interface Fish {
  id: string;
  name: string;
  species: string;
  strain: string;
  traits: string[];
  rarity: 'Common' | 'Rare';
  genetics: 'Strong' | 'Average' | 'Weak';
  color: string;
}

export interface Parent extends Fish {
  generation?: number;
  lineage?: string[];
}

export interface BreedingProject {
  id: string;
  parent1: Fish;
  parent2: Fish;
  status: 'Fertilizing' | 'Eggs Developing' | 'Awaiting Hatch' | 'Fry Maturing';
  progress: number;
  timeRemaining: string;
  apInvestment: number;
  expectedFry: string;
}

export interface Mutation {
  type: 'color' | 'pattern' | 'fin' | 'other';
  trait: string;
  description: string;
  offspringNumber: number;
}

export interface Strain {
  id: string;
  name: string;
  targetTrait: string;
  stability: number;
  generations: Generation[];
}

export interface Generation {
  number: number;
  parents: string;
  totalOffspring: number;
  traitExpression: number;
  notes: string;
}

export interface StabilizedStrain {
  baseSpecies: string;
  traits: {
    color?: string;
    pattern?: string;
    finType?: string;
    special?: string[];
  };
  generation: number;
  discoverer: string;
  registrationFee: number;
}