interface ProgressHeaderProps {
  current: number;
  total: number;
}

export default function ProgressHeader({ current, total }: ProgressHeaderProps) {
  const ratio = (current / total) * 100;
  return (
    <div className="progress-wrapper">
      <div className="progress-text">第 {current} / {total} 题</div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${ratio}%` }} />
      </div>
    </div>
  );
}
