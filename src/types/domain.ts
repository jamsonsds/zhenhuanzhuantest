export const DIMENSIONS = ['strategy', 'ambition', 'guard', 'empathy', 'control', 'emotion', 'principle', 'loyalty'] as const;

export type Dimension = (typeof DIMENSIONS)[number];

export type LocalizedDimensionLabel = {
  key: Dimension;
  label: string;
};

export type QuestionType = 'standard' | 'scenario';

export interface StandardOption {
  id: string;
  text: string;
  level: 1 | 2 | 3 | 4;
}

export interface ScenarioOption {
  id: string;
  text: string;
  scores: Partial<Record<Dimension, 1 | 2 | 3 | 4 | 5>>;
}

export interface StandardQuestion {
  id: string;
  type: 'standard';
  text: string;
  dimension: Dimension;
  reverse?: boolean;
  options: StandardOption[];
}

export interface ScenarioQuestion {
  id: string;
  type: 'scenario';
  text: string;
  options: ScenarioOption[];
}

export type Question = StandardQuestion | ScenarioQuestion;

export interface CharacterProfile {
  id: string;
  name: string;
  matrix: Record<Dimension, 1 | 2 | 3 | 4 | 5>;
}

export interface CharacterCopy {
  verdict: string;
  methods: string;
  temperament: string;
  affection: string;
  highlight: string;
  almanacLine: string;
  almanacIntro: string;
}

export interface TestResult {
  portrait: Record<Dimension, number>;
  finalCharacter: CharacterProfile;
  nearbyCharacters: Array<{ character: CharacterProfile; percent: number }>;
}
