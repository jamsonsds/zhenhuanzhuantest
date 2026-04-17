import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { QUESTIONS } from '../data/questions';
import { buildResult, type AnswerMap } from '../engine/scoring';
import type { TestResult } from '../types/domain';

type SessionStatus = 'idle' | 'in_progress' | 'finished';

interface TestContextType {
  status: SessionStatus;
  answers: AnswerMap;
  result: TestResult | null;
  start: () => void;
  answer: (questionId: string, optionId: string) => void;
  reset: () => void;
  finish: () => void;
}

const TestContext = createContext<TestContextType | null>(null);

export function TestProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<SessionStatus>('idle');
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [result, setResult] = useState<TestResult | null>(null);

  const start = useCallback(() => {
    setAnswers({});
    setResult(null);
    setStatus('in_progress');
  }, []);

  const answer = useCallback((questionId: string, optionId: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  }, []);

  const reset = useCallback(() => {
    setAnswers({});
    setResult(null);
    setStatus('idle');
  }, []);

  const finish = useCallback(() => {
    setResult(buildResult(QUESTIONS, answers));
    setStatus('finished');
  }, [answers]);

  const api = useMemo<TestContextType>(
    () => ({
      status,
      answers,
      result,
      start,
      answer,
      reset,
      finish
    }),
    [answers, answer, finish, reset, result, start, status]
  );

  return <TestContext.Provider value={api}>{children}</TestContext.Provider>;
}

export function useTestSession(): TestContextType {
  const context = useContext(TestContext);
  if (!context) {
    throw new Error('useTestSession must be used inside TestProvider');
  }
  return context;
}
