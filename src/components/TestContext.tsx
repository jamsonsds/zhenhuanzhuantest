import { createContext, useContext, useMemo, useState } from 'react';
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

  const api = useMemo<TestContextType>(
    () => ({
      status,
      answers,
      result,
      start: () => {
        setAnswers({});
        setResult(null);
        setStatus('in_progress');
      },
      answer: (questionId: string, optionId: string) => {
        setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
      },
      reset: () => {
        setAnswers({});
        setResult(null);
        setStatus('idle');
      },
      finish: () => {
        setResult(buildResult(QUESTIONS, answers));
        setStatus('finished');
      }
    }),
    [answers, result, status]
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
