import { CHARACTERS } from '../data/characters';
import { DIMENSION_KEYS } from '../types';
import type { DimensionKey, Question, TestResult } from '../types';

export type AnswerMap = Record<string, string>;

const clamp = (num: number, min: number, max: number) => Math.min(max, Math.max(min, num));
const standardToFive = (level: number) => 1 + ((level - 1) / 3) * 4;

function calculatePortrait(questions: Question[], answers: AnswerMap): Record<DimensionKey, number> {
  const standardAgg = Object.fromEntries(DIMENSION_KEYS.map((k) => [k, { sum: 0, count: 0 }])) as Record<
    DimensionKey,
    { sum: number; count: number }
  >;
  const scenarioAgg = Object.fromEntries(DIMENSION_KEYS.map((k) => [k, { sum: 0, count: 0 }])) as Record<
    DimensionKey,
    { sum: number; count: number }
  >;

  questions.forEach((q) => {
    const selected = answers[q.id];
    if (!selected) return;

    if (q.type === 'standard') {
      const option = q.options.find((o) => o.id === selected);
      if (!option) return;
      const level = q.reverse ? 5 - option.level : option.level;
      standardAgg[q.dimension].sum += standardToFive(level);
      standardAgg[q.dimension].count += 1;
      return;
    }

    const option = q.options.find((o) => o.id === selected);
    if (!option) return;

    DIMENSION_KEYS.forEach((key) => {
      const score = option.scores[key];
      if (score) {
        scenarioAgg[key].sum += score;
        scenarioAgg[key].count += 1;
      }
    });
  });

  return DIMENSION_KEYS.reduce((acc, key) => {
    const standardAvg = standardAgg[key].count ? standardAgg[key].sum / standardAgg[key].count : 3;
    const scenarioAvg = scenarioAgg[key].count ? scenarioAgg[key].sum / scenarioAgg[key].count : 3;
    const combined = standardAvg * 0.6 + scenarioAvg * 0.4;
    acc[key] = Number(clamp(combined, 1, 5).toFixed(2));
    return acc;
  }, {} as Record<DimensionKey, number>);
}

function similarity(portrait: Record<DimensionKey, number>, target: Record<DimensionKey, number>): number {
  const sum = DIMENSION_KEYS.reduce((acc, key) => acc + (portrait[key] - target[key]) ** 2, 0);
  const distance = Math.sqrt(sum);
  const maxDistance = Math.sqrt(DIMENSION_KEYS.length * 16);
  return Number(((1 - distance / maxDistance) * 100).toFixed(1));
}

export function buildResult(questions: Question[], answers: AnswerMap): TestResult {
  const portrait = calculatePortrait(questions, answers);

  const ranking = CHARACTERS.map((character) => ({
    id: character.id,
    name: character.name,
    percent: similarity(portrait, character.values)
  })).sort((a, b) => b.percent - a.percent);

  return {
    portrait,
    finalCharacter: ranking[0],
    nearbyCharacters: [ranking[1], ranking[2]]
  };
}
