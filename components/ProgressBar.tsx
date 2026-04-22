export default function ProgressBar({ current, total }: { current: number; total: number }) {
  const percent = (current / total) * 100;
  return (
    <div className="space-y-2">
      <p className="text-sm text-palace-muted">第 {current} / {total} 题</p>
      <div className="h-2 w-full rounded-full bg-stone-200">
        <div className="h-2 rounded-full bg-palace-main" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
