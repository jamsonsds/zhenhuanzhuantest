import { useNavigate } from 'react-router-dom';
import PageShell from '../components/PageShell';
import { useTestSession } from '../components/TestContext';

export default function HomePage() {
  const navigate = useNavigate();
  const { reset } = useTestSession();

  return (
    <PageShell title="你的后宫人格鉴定书" subtitle="娱乐一点，但看透一点">
      <div className="stack">
        <button
          className="primary-btn"
          onClick={() => {
            reset();
            navigate('/intro');
          }}
        >
          即刻入宫
        </button>
        <p className="disclaimer">本测试仅供娱乐参考，但宫里看人，向来不只看表面。</p>
      </div>
    </PageShell>
  );
}
