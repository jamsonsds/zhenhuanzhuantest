import { CHARACTER_PROFILES } from '../data/characters';
import { DIMENSIONS } from '../types/domain';
import type { CharacterProfile, Dimension, Question, TestResult } from '../types/domain';

export type AnswerMap = Record<string, string>;

const clamp = (value: number, min: number, max: number): number => Math.min(max, Math.max(min, value));

const normalizeStandardLevel = (level: number): number => 1 + ((level - 1) / 3) * 4;

function calculatePortrait(questions: Question[], answers: AnswerMap): Record<Dimension, number> {
  const standardTotals: Record<Dimension, { sum: number; count: number }> = Object.fromEntries(
    DIMENSIONS.map((key) => [key, { sum: 0, count: 0 }])
  ) as Record<Dimension, { sum: number; count: number }>;

  const scenarioTotals: Record<Dimension, { sum: number; count: number }> = Object.fromEntries(
    DIMENSIONS.map((key) => [key, { sum: 0, count: 0 }])
  ) as Record<Dimension, { sum: number; count: number }>;

  for (const question of questions) {
    const answerId = answers[question.id];
    if (!answerId) continue;

    if (question.type === 'standard') {
      const option = question.options.find((item) => item.id === answerId);
      if (!option) continue;
      const level = question.reverse ? 5 - option.level : option.level;
      const normalized = normalizeStandardLevel(level);
      standardTotals[question.dimension].sum += normalized;
      standardTotals[question.dimension].count += 1;
      continue;
    }

    const option = question.options.find((item) => item.id === answerId);
    if (!option) continue;
    for (const dimension of DIMENSIONS) {
      const score = option.scores[dimension];
      if (score) {
        scenarioTotals[dimension].sum += score;
        scenarioTotals[dimension].count += 1;
      }
    }
  }

  const portrait = {} as Record<Dimension, number>;
  for (const dimension of DIMENSIONS) {
    const standardAvg = standardTotals[dimension].count
      ? standardTotals[dimension].sum / standardTotals[dimension].count
      : 3;
    const scenarioAvg = scenarioTotals[dimension].count
      ? scenarioTotals[dimension].sum / scenarioTotals[dimension].count
      : 3;
    const mixed = standardAvg * 0.6 + scenarioAvg * 0.4;
    portrait[dimension] = Number(clamp(mixed, 1, 5).toFixed(2));
  }
  return portrait;
}

function similarity(portrait: Record<Dimension, number>, character: CharacterProfile): number {
  const squared = DIMENSIONS.reduce((acc, dimension) => {
    const delta = portrait[dimension] - character.matrix[dimension];
    return acc + delta ** 2;
  }, 0);
  const distance = Math.sqrt(squared);
  const maxDistance = Math.sqrt(DIMENSIONS.length * 4 ** 2);
  const score = (1 - distance / maxDistance) * 100;
  return Number(clamp(score, 0, 100).toFixed(1));
}

export function buildResult(questions: Question[], answers: AnswerMap): TestResult {
  const portrait = calculatePortrait(questions, answers);
  const ranking = CHARACTER_PROFILES.map((character) => ({
    character,
    percent: similarity(portrait, character)
  })).sort((a, b) => b.percent - a.percent);

  return {
    portrait,
    finalCharacter: ranking[0].character,
    nearbyCharacters: ranking.slice(1, 3)
  };
}
