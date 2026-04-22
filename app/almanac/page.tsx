'use client';

import { useMemo, useState } from 'react';
import PageFrame from '@/components/PageFrame';
import { CHARACTERS } from '@/lib/data/characters';
import { CHARACTER_PROFILES } from '@/lib/data/characterProfiles';

export default function AlmanacPage() {
  const [activeId, setActiveId] = useState(CHARACTERS[0].id);

  const active = useMemo(() => CHARACTERS.find((c) => c.id === activeId) ?? CHARACTERS[0], [activeId]);
  const profile = CHARACTER_PROFILES[active.id];

  return (
    <PageFrame title="人物图鉴" subtitle="点开每张卡，看看你与她/他的性格共振。" backHref="/result">
      <div className="grid grid-cols-2 gap-2 md:grid-cols-5">
        {CHARACTERS.map((item) => (
          <button
            key={item.id}
            className={`rounded-xl border px-3 py-2 text-sm ${
              item.id === activeId ? 'border-palace-main bg-rose-50' : 'border-palace-line bg-white'
            }`}
            onClick={() => setActiveId(item.id)}
          >
            {item.name}
          </button>
        ))}
      </div>

      <section className="space-y-3 rounded-xl border border-palace-line bg-white p-4">
        <h3 className="text-lg font-semibold">{active.name}</h3>
        <p className="text-sm leading-7 text-palace-muted">{profile.almanacLine}</p>
        <p className="text-sm leading-7 text-palace-muted">{profile.almanacIntro}</p>
      </section>
    </PageFrame>
  );
}
