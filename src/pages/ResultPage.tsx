import { Link } from 'react-router-dom';
import RadarChart from '../components/RadarChart';
import PageShell from '../components/PageShell';
import { useTestSession } from '../components/TestContext';
import { CHARACTER_COPY } from '../data/characters';

export default function ResultPage() {
  const { result } = useTestSession();
  if (!result) return null;

  const copy = CHARACTER_COPY[result.finalCharacter.id];

  return (
    <PageShell title="你的后宫人格鉴定书">
      <section className="result-section">
        <h3>判词</h3>
        <p>{copy.verdict}</p>
      </section>

      <section className="result-section">
        <h3>你的最终人物：{result.finalCharacter.name}</h3>
      </section>

      <section className="result-section">
        <h3>人格轮廓</h3>
        <RadarChart portrait={result.portrait} />
      </section>

      <section className="result-section">
        <h3>你还有一点像</h3>
        <ul className="nearby-list">
          {result.nearbyCharacters.map((item) => (
            <li key={item.character.id}>
              {item.character.name} · {item.percent}%
            </li>
          ))}
        </ul>
      </section>

      <section className="result-section">
        <h3>你的手段</h3>
        <p>{copy.methods}</p>
      </section>

      <section className="result-section">
        <h3>你的性情</h3>
        <p>{copy.temperament}</p>
      </section>

      <section className="result-section">
        <h3>你的情分</h3>
        <p>{copy.affection}</p>
      </section>

      <section className="result-section">
        <h3>你的名场面</h3>
        <blockquote>{copy.highlight}</blockquote>
      </section>

      <section className="result-section row-actions">
        <Link className="primary-btn" to="/almanac">
          查看人物图鉴
        </Link>
        <button className="ghost-btn" type="button">
          生成分享海报（即将开放）
        </button>
      </section>

      <p className="disclaimer">本鉴定仅供娱乐参考，但你既然都测到这里了，想必也不只是图个热闹。</p>
    </PageShell>
  );
}
