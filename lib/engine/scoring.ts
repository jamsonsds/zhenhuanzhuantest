import { CHARACTERS } from '../data/characters';
import { DIMENSION_KEYS } from '../types';
import type { DimensionKey, Question, TestResult } from '../types';

export type AnswerMap = Record<string, string>;

const clamp = (num: number, min: number, max: number) => Math.min(max, Math.max(min, num));

function calculatePortrait(questions: Question[], answers: AnswerMap): Record<DimensionKey, number> {
  const agg = Object.fromEntries(DIMENSION_KEYS.map((k) => [k, { sum: 0, count: 0 }])) as Record<
    DimensionKey,
    { sum: number; count: number }
  >;

  questions.forEach((question) => {
    const selected = answers[question.id];
    if (!selected) return;

    const option = question.options.find((item) => item.id === selected);
    if (!option) return;

    DIMENSION_KEYS.forEach((dimension) => {
      const score = option.scores[dimension];
      if (!score) return;
      agg[dimension].sum += score;
      agg[dimension].count += 1;
    });
  });

  return DIMENSION_KEYS.reduce((portrait, dimension) => {
    const avg = agg[dimension].count ? agg[dimension].sum / agg[dimension].count : 3;
    portrait[dimension] = Number(clamp(avg, 1, 5).toFixed(2));
    return portrait;
  }, {} as Record<DimensionKey, number>);
}

function similarity(portrait: Record<DimensionKey, number>, matrix: Record<DimensionKey, number>): number {
  const distance = Math.sqrt(
    DIMENSION_KEYS.reduce((sum, dimension) => sum + (portrait[dimension] - matrix[dimension]) ** 2, 0)
  );
  const maxDistance = Math.sqrt(DIMENSION_KEYS.length * 16);
  return Number(clamp((1 - distance / maxDistance) * 100, 0, 100).toFixed(1));
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
