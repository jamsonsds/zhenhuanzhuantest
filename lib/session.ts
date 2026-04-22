import type { TestResult } from './types';

export const STORAGE_KEYS = {
  started: 'zhenhuan_started',
  answers: 'zhenhuan_answers',
  result: 'zhenhuan_result'
} as const;

export const readJSON = <T>(key: string, fallback: T): T => {
  if (typeof window === 'undefined') return fallback;
  const text = window.sessionStorage.getItem(key);
  if (!text) return fallback;
  try {
    return JSON.parse(text) as T;
  } catch {
    return fallback;
  }
};

export const writeJSON = (key: string, value: unknown) => {
  if (typeof window === 'undefined') return;
  window.sessionStorage.setItem(key, JSON.stringify(value));
};

export const readBool = (key: string): boolean => {
  if (typeof window === 'undefined') return false;
  return window.sessionStorage.getItem(key) === '1';
};

export const writeBool = (key: string, value: boolean) => {
  if (typeof window === 'undefined') return;
  window.sessionStorage.setItem(key, value ? '1' : '0');
};

export const clearSession = () => {
  if (typeof window === 'undefined') return;
  window.sessionStorage.removeItem(STORAGE_KEYS.started);
  window.sessionStorage.removeItem(STORAGE_KEYS.answers);
  window.sessionStorage.removeItem(STORAGE_KEYS.result);
};

export const readResult = (): TestResult | null => readJSON<TestResult | null>(STORAGE_KEYS.result, null);
export const writeResult = (result: TestResult) => writeJSON(STORAGE_KEYS.result, result);
