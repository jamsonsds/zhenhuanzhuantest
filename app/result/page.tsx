'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import PageFrame from '@/components/PageFrame';
import RadarOutline from '@/components/RadarOutline';
import { CHARACTER_PROFILES } from '@/lib/data/characterProfiles';
import { STORAGE_KEYS, readBool, readResult } from '@/lib/session';
import type { TestResult } from '@/lib/types';

export default function ResultPage() {
  const router = useRouter();
  const [result, setResult] = useState<TestResult | null>(null);

  useEffect(() => {
    const started = readBool(STORAGE_KEYS.started);
    if (!started) {
      router.replace('/');
      return;
    }

    const cached = readResult();
    if (!cached) {
      router.replace('/');
      return;
    }
    setResult(cached);
  }, [router]);

  if (!result) return null;

  const profile = CHARACTER_PROFILES[result.finalCharacter.id];

  return (
    <PageFrame title="你的后宫人格鉴定书">
      <section className="space-y-2 border-b border-dashed border-palace-line pb-4">
        <h3 className="text-base font-semibold">判词</h3>
        <p className="text-sm leading-7 text-palace-muted">{profile.verdict}</p>
      </section>

      <section className="space-y-2 border-b border-dashed border-palace-line pb-4">
        <h3 className="text-base font-semibold">你的最终人物：{result.finalCharacter.name}</h3>
      </section>

      <section className="space-y-3 border-b border-dashed border-palace-line pb-4">
        <h3 className="text-base font-semibold">人格雷达轮廓</h3>
        <RadarOutline portrait={result.portrait} />
      </section>

      <section className="space-y-2 border-b border-dashed border-palace-line pb-4">
        <h3 className="text-base font-semibold">你还有一点像</h3>
        <ul className="list-disc space-y-1 pl-5 text-sm text-palace-muted">
          {result.nearbyCharacters.map((item) => (
            <li key={item.id}>
              {item.name} · {item.percent}%
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-2 border-b border-dashed border-palace-line pb-4">
        <h3 className="text-base font-semibold">你的手段</h3>
        <p className="text-sm leading-7 text-palace-muted">{profile.methods}</p>
      </section>

      <section className="space-y-2 border-b border-dashed border-palace-line pb-4">
        <h3 className="text-base font-semibold">你的性情</h3>
        <p className="text-sm leading-7 text-palace-muted">{profile.temperament}</p>
      </section>

      <section className="space-y-2 border-b border-dashed border-palace-line pb-4">
        <h3 className="text-base font-semibold">你的情分</h3>
        <p className="text-sm leading-7 text-palace-muted">{profile.affection}</p>
      </section>

      <section className="space-y-2 border-b border-dashed border-palace-line pb-4">
        <h3 className="text-base font-semibold">你的名场面</h3>
        <blockquote className="rounded-xl bg-stone-100 px-4 py-3 text-sm text-palace-ink">{profile.highlight}</blockquote>
      </section>

      <section className="flex flex-wrap gap-3 border-b border-dashed border-palace-line pb-4">
        <Link href="/almanac" className="btn-primary flex-1 text-center">
          进入人物图鉴
        </Link>
        <button type="button" className="btn-ghost flex-1">
          生成分享海报（即将开放）
        </button>
      </section>

      <p className="text-sm leading-6 text-palace-muted">本鉴定仅供娱乐参考，但你既然都测到这里了，想必也不只是图个热闹。</p>
    </PageFrame>
  );
}
