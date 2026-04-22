import { DIMENSION_META } from '@/lib/constants';
import type { DimensionKey } from '@/lib/types';

export default function RadarOutline({ portrait }: { portrait: Record<DimensionKey, number> }) {
  const size = 280;
  const center = size / 2;
  const radius = 100;

  const polygon = DIMENSION_META.map((d, i) => {
    const angle = (Math.PI * 2 * i) / DIMENSION_META.length - Math.PI / 2;
    const r = (portrait[d.key] / 5) * radius;
    return `${center + Math.cos(angle) * r},${center + Math.sin(angle) * r}`;
  }).join(' ');

  return (
    <div className="w-full max-w-xs">
      <svg viewBox={`0 0 ${size} ${size}`} className="h-auto w-full">
        {[1, 2, 3, 4, 5].map((ring) => {
          const points = DIMENSION_META.map((_, i) => {
            const angle = (Math.PI * 2 * i) / DIMENSION_META.length - Math.PI / 2;
            const r = (ring / 5) * radius;
            return `${center + Math.cos(angle) * r},${center + Math.sin(angle) * r}`;
          }).join(' ');
          return <polygon key={ring} points={points} fill="none" stroke="#e5d9c8" strokeWidth="1" />;
        })}
        <polygon points={polygon} fill="rgba(127,34,37,0.25)" stroke="#7f2225" strokeWidth="2" />
      </svg>
    </div>
  );
}
