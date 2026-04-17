import { useState } from 'react';
import PageShell from '../components/PageShell';
import { CHARACTER_COPY, CHARACTER_PROFILES } from '../data/characters';

export default function AlmanacPage() {
  const [activeId, setActiveId] = useState(CHARACTER_PROFILES[0].id);
  const active = CHARACTER_PROFILES.find((item) => item.id === activeId) ?? CHARACTER_PROFILES[0];
  const copy = CHARACTER_COPY[active.id];

  return (
    <PageShell title="人物图鉴" subtitle="轻点卡片，即可翻阅该人物的性格摘要。" backTo="/result">
      <div className="card-wall">
        {CHARACTER_PROFILES.map((character) => (
          <button
            key={character.id}
            className={`almanac-card ${active.id === character.id ? 'active' : ''}`}
            onClick={() => setActiveId(character.id)}
          >
            {character.name}
          </button>
        ))}
      </div>

      <article className="result-section">
        <h3>{active.name}</h3>
        <p>{copy.almanacLine}</p>
        <p>{copy.almanacIntro}</p>
      </article>
    </PageShell>
  );
}
