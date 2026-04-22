export const DIMENSION_KEYS = ['strategy', 'ambition', 'guard', 'empathy', 'control', 'emotion', 'principle', 'loyalty'] as const;

export const CHARACTER_IDS = [
  'zhenhuan',
  'huafei',
  'empress',
  'meizhuang',
  'anlingrong',
  'jingfei',
  'caoguiren',
  'chuner',
  'emperor',
  'queenmother',
  'supeisheng',
  'wenshichu',
  'liuzhu',
  'cuijinxi',
  'guojunwang'
] as const;

export type DimensionKey = (typeof DIMENSION_KEYS)[number];
export type CharacterId = (typeof CHARACTER_IDS)[number];

export interface DimensionMeta {
  key: DimensionKey;
  label: string;
}

export interface ScenarioOption {
  id: string;
  text: string;
  scores: Partial<Record<DimensionKey, 1 | 2 | 3 | 4 | 5>>;
}

export interface ScenarioQuestion {
  id: string;
  type: 'scenario';
  text: string;
  options: [ScenarioOption, ScenarioOption, ScenarioOption, ScenarioOption];
}

export type Question = ScenarioQuestion;

export interface CharacterMatrix {
  id: CharacterId;
  name: string;
  values: Record<DimensionKey, 1 | 2 | 3 | 4 | 5>;
}

export interface CharacterProfile {
  id: CharacterId;
  verdict: string;
  methods: string;
  temperament: string;
  affection: string;
  highlight: string;
  almanacLine: string;
  almanacIntro: string;
}

export interface ResultCharacter {
  id: CharacterId;
  name: string;
  percent: number;
}

export interface TestResult {
  portrait: Record<DimensionKey, number>;
  finalCharacter: ResultCharacter;
  nearbyCharacters: [ResultCharacter, ResultCharacter];
}
