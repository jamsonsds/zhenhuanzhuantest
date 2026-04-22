export const DIMENSION_KEYS = ['strategy', 'ambition', 'guard', 'empathy', 'control', 'emotion', 'principle', 'loyalty'] as const;

export type DimensionKey = (typeof DIMENSION_KEYS)[number];
export type QuestionType = 'standard' | 'scenario';

export interface DimensionMeta {
  key: DimensionKey;
  label: string;
}

export interface StandardOption {
  id: string;
  text: string;
  level: 1 | 2 | 3 | 4;
}

export interface ScenarioOption {
  id: string;
  text: string;
  scores: Partial<Record<DimensionKey, 1 | 2 | 3 | 4 | 5>>;
}

export interface StandardQuestion {
  id: string;
  type: 'standard';
  text: string;
  dimension: DimensionKey;
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

export interface CharacterMatrix {
  id: string;
  name: string;
  values: Record<DimensionKey, 1 | 2 | 3 | 4 | 5>;
}

export interface CharacterProfile {
  id: string;
  verdict: string;
  methods: string;
  temperament: string;
  affection: string;
  highlight: string;
  almanacLine: string;
  almanacIntro: string;
}

export interface ResultCharacter {
  id: string;
  name: string;
  percent: number;
}

export interface TestResult {
  portrait: Record<DimensionKey, number>;
  finalCharacter: ResultCharacter;
  nearbyCharacters: [ResultCharacter, ResultCharacter];
}
