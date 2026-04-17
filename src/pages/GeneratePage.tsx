import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageShell from '../components/PageShell';
import { useTestSession } from '../components/TestContext';

export default function GeneratePage() {
  const navigate = useNavigate();
  const { finish } = useTestSession();

  useEffect(() => {
    finish();
    const timer = window.setTimeout(() => {
      navigate('/result', { replace: true });
    }, 1400);
    return () => window.clearTimeout(timer);
  }, [finish, navigate]);

  return (
    <PageShell title="正在誊写你的鉴定书" subtitle="宫中档案官正在落墨，请稍候。">
      <div className="loading-dot" />
    </PageShell>
  );
}
