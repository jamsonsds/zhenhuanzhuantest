import { useNavigate } from 'react-router-dom';
import PageShell from '../components/PageShell';
import { useTestSession } from '../components/TestContext';

export default function IntroPage() {
  const navigate = useNavigate();
  const { start } = useTestSession();

  return (
    <PageShell title="入宫前须知" subtitle="这一卷，不止测你怎么想，也测你怎么选。">
      <ul className="notice-list">
        <li>一题一屏，作答后请手动点击“下一题”。</li>
        <li>答题中途退出即重置，需重新入宫。</li>
        <li>结果将生成你的后宫人格鉴定书与相近人物画像。</li>
      </ul>
      <button
        className="primary-btn"
        onClick={() => {
          start();
          navigate('/quiz');
        }}
      >
        开始鉴定
      </button>
    </PageShell>
  );
}
