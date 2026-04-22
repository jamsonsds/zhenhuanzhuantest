'use client';

import { useRouter } from 'next/navigation';
import PageFrame from '@/components/PageFrame';
import { PRODUCT_NAME, PRODUCT_SUBTITLE } from '@/lib/constants';
import { clearSession } from '@/lib/session';

export default function HomePage() {
  const router = useRouter();

  return (
    <PageFrame title={PRODUCT_NAME} subtitle={PRODUCT_SUBTITLE}>
      <button
        className="btn-primary w-full sm:w-40"
        onClick={() => {
          clearSession();
          router.push('/guide');
        }}
      >
        即刻入宫
      </button>
      <p className="text-sm leading-6 text-palace-muted">本测试仅供娱乐参考，但宫里看人，向来不只看表面。</p>
    </PageFrame>
  );
}
