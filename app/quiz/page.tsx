'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import PageFrame from '@/components/PageFrame';
import ProgressBar from '@/components/ProgressBar';
import { QUESTIONS } from '@/lib/data/questions';
import { STORAGE_KEYS, readBool, readJSON, writeJSON } from '@/lib/session';

export default function QuizPage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  useEffect(() => {
    const started = readBool(STORAGE_KEYS.started);
    if (!started) {
      router.replace('/');
      return;
    }
    setAnswers(readJSON<Record<string, string>>(STORAGE_KEYS.answers, {}));
    setReady(true);
  }, [router]);

  const q = QUESTIONS[index];
  const selected = answers[q?.id];
  const canNext = useMemo(() => Boolean(selected), [selected]);

  if (!ready || !q) return null;

  return (
    <PageFrame title="后宫人格测评" subtitle="一题一屏，请按直觉和真实反应作答。">
      <ProgressBar current={index + 1} total={QUESTIONS.length} />
      <h2 className="text-lg font-semibold leading-7">{q.text}</h2>

      <div className="space-y-2">
        {q.options.map((option) => (
          <button
            key={option.id}
            className={`w-full rounded-xl border px-4 py-3 text-left text-sm leading-6 transition ${
              selected === option.id ? 'border-palace-main bg-rose-50' : 'border-palace-line bg-white hover:bg-stone-50'
            }`}
            onClick={() => {
              const next = { ...answers, [q.id]: option.id };
              setAnswers(next);
              writeJSON(STORAGE_KEYS.answers, next);
            }}
          >
            {option.text}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        <button className="btn-ghost flex-1" disabled={index === 0} onClick={() => setIndex((n) => Math.max(0, n - 1))}>
          上一题
        </button>
        <button
          className="btn-primary flex-1"
          disabled={!canNext}
          onClick={() => {
            if (index === QUESTIONS.length - 1) {
              router.push('/generate');
              return;
            }
            setIndex((n) => n + 1);
          }}
        >
          {index === QUESTIONS.length - 1 ? '提交并生成' : '下一题'}
        </button>
      </div>
    </PageFrame>
  );
}
