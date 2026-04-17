import { DIMENSION_LABELS } from '../data/dimensions';
import type { Dimension } from '../types/domain';

interface RadarChartProps {
  portrait: Record<Dimension, number>;
}

export default function RadarChart({ portrait }: RadarChartProps) {
  const size = 320;
  const center = size / 2;
  const radius = 110;

  const points = DIMENSION_LABELS.map((dimension, index) => {
    const angle = (Math.PI * 2 * index) / DIMENSION_LABELS.length - Math.PI / 2;
    const value = portrait[dimension.key];
    const r = (value / 5) * radius;
    return `${center + Math.cos(angle) * r},${center + Math.sin(angle) * r}`;
  }).join(' ');

  const rings = [1, 2, 3, 4, 5].map((ring) => {
    const ringPoints = DIMENSION_LABELS.map((_, index) => {
      const angle = (Math.PI * 2 * index) / DIMENSION_LABELS.length - Math.PI / 2;
      const r = (ring / 5) * radius;
      return `${center + Math.cos(angle) * r},${center + Math.sin(angle) * r}`;
    }).join(' ');
    return <polygon key={ring} points={ringPoints} className="radar-ring" />;
  });

  return (
    <div className="radar-box">
      <svg viewBox={`0 0 ${size} ${size}`} role="img" aria-label="人格雷达图轮廓">
        {rings}
        <polygon points={points} className="radar-shape" />
      </svg>
    </div>
  );
}
