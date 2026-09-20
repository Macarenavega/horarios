import type { AnimationProps } from '../types';

const A = '#A78BFA';
const A2 = '#7C5CDB';

export function PlankAnimation({ isActive }: AnimationProps) {
  const ps = isActive ? 'running' : 'paused';
  return (
    <svg viewBox="0 0 320 160" style={{ width: '100%', height: '100%' }} preserveAspectRatio="xMidYMid meet">
      <ellipse cx="160" cy="118" rx="140" ry="22" fill="#1E1040" opacity="0.4" />

      {/* Floor line */}
      <rect x="30" y="116" width="260" height="3" rx="1.5" fill="#3A2E5E" opacity="0.6" />

      {/* Full body plank — breathing animation */}
      <g style={{
        transformBox: 'fill-box',
        transformOrigin: 'center center',
        animation: `plank-breathe 4s ease-in-out infinite`,
        animationPlayState: ps
      }}>
        {/* Body (horizontal) */}
        <rect x="90" y="100" width="140" height="16" rx="7" fill={A} />

        {/* Head */}
        <circle cx="255" cy="105" r="14" fill={A} />

        {/* Forearms (pointing down from elbows) */}
        {/* Left forearm */}
        <rect x="94" y="110" width="12" height="18" rx="5" fill={A2} />
        {/* Right forearm */}
        <rect x="125" y="110" width="12" height="18" rx="5" fill={A2} />

        {/* Left elbow joint */}
        <circle cx="100" cy="112" r="6" fill="#C4B5FD" />
        {/* Right elbow joint */}
        <circle cx="131" cy="112" r="6" fill="#C4B5FD" />

        {/* Feet / toes */}
        <rect x="78" y="110" width="14" height="10" rx="4" fill={A2} />
        {/* Legs (back of body) */}
        <rect x="78" y="98" width="20" height="14" rx="5" fill={A} />
      </g>

      {/* Subtle glow under body */}
      <ellipse cx="165" cy="120" rx="80" ry="6" fill={A} opacity="0.06" />
    </svg>
  );
}
