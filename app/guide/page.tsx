'use client';

import { useRouter } from 'next/navigation';
import PageFrame from '@/components/PageFrame';
import { STORAGE_KEYS, writeBool, writeJSON } from '@/lib/session';

export default function GuidePage() {
  const router = useRouter();

  return (
    <PageFrame title="入宫前引导" subtitle="这一卷，测的不只是选择，更是你处理人心与局势的方式。" backHref="/">
      <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-palace-muted">
        <li>一题一屏，选完后请手动点击“下一题”。</li>
        <li>中途退出即重置，需重新入宫。</li>
        <li>本鉴定为娱乐向人格测试，请理性食用。</li>
      </ul>
      <button
        className="btn-primary w-full sm:w-44"
        onClick={() => {
          writeBool(STORAGE_KEYS.started, true);
          writeJSON(STORAGE_KEYS.answers, {});
          router.push('/quiz');
        }}
      >
        开始鉴定
      </button>
    </PageFrame>
  );
}
