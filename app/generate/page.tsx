'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import PageFrame from '@/components/PageFrame';
import { QUESTIONS } from '@/lib/data/questions';
import { buildResult } from '@/lib/engine/scoring';
import { STORAGE_KEYS, readBool, readJSON, writeResult } from '@/lib/session';

export default function GeneratePage() {
  const router = useRouter();

  useEffect(() => {
    const started = readBool(STORAGE_KEYS.started);
    if (!started) {
      router.replace('/');
      return;
    }

    const answers = readJSON<Record<string, string>>(STORAGE_KEYS.answers, {});
    const result = buildResult(QUESTIONS, answers);
    writeResult(result);

    const timer = window.setTimeout(() => {
      router.replace('/result');
    }, 1400);

    return () => window.clearTimeout(timer);
  }, [router]);

  return (
    <PageFrame title="正在誊写你的鉴定书" subtitle="宫中档案官正在落墨，请稍候。">
      <div className="h-14 w-14 animate-spin rounded-full border-4 border-stone-200 border-t-palace-main" />
    </PageFrame>
  );
}
