import type { AnimationProps } from '../types';

const A = '#A78BFA';
const A2 = '#7C5CDB';
const J = '#C4B5FD';

export function DeadBugAnimation({ isActive }: AnimationProps) {
  const ps = isActive ? 'running' : 'paused';
  return (
    <svg viewBox="0 0 320 160" style={{ width: '100%', height: '100%' }} preserveAspectRatio="xMidYMid meet">
      {/* Floor */}
      <rect x="20" y="125" width="280" height="3" rx="1.5" fill="#3A2E5E" opacity="0.6" />
      <ellipse cx="160" cy="128" rx="130" ry="10" fill="#1E1040" opacity="0.4" />

      {/* Body (horizontal, lying on back) */}
      <rect x="78" y="108" width="145" height="16" rx="7" fill={A} />

      {/* Head (left side) */}
      <circle cx="64" cy="116" r="15" fill={A} />

      {/* Hip joint center */}
      <circle cx="180" cy="116" r="7" fill={J} />
      {/* Shoulder joint */}
      <circle cx="130" cy="116" r="7" fill={J} />

      {/* Right arm — rises upward then goes back overhead */}
      {/* Shoulder at (130, 116), arm drawn going UP */}
      <g transform="translate(130, 108)">
        <g style={{
          animation: `db-right-arm 4s ease-in-out infinite`,
          animationPlayState: ps,
          animationFillMode: 'both',
          transformOrigin: '0px 0px'
        }}>
          <rect x="-6" y="-50" width="12" height="52" rx="5" fill={A2} />
          <circle cx="0" cy="-50" r="6" fill={J} />
        </g>
      </g>

      {/* Left arm — opposite phase */}
      <g transform="translate(130, 108)">
        <g style={{
          animation: `db-left-arm 4s ease-in-out infinite`,
          animationPlayState: ps,
          animationFillMode: 'both',
          transformOrigin: '0px 0px'
        }}>
          <rect x="-6" y="-50" width="12" height="52" rx="5" fill={A} opacity="0.5" />
          <circle cx="0" cy="-50" r="6" fill={J} opacity="0.5" />
        </g>
      </g>

      {/* Left leg (upper) — at hip (180, 116), drawn going DOWN */}
      <g transform="translate(172, 116)">
        <g style={{
          animation: `db-left-leg 4s ease-in-out infinite`,
          animationPlayState: ps,
          animationFillMode: 'both',
          transformOrigin: '0px 0px'
        }}>
          {/* thigh */}
          <rect x="-6" y="0" width="12" height="38" rx="5" fill={A2} />
          <circle cx="0" cy="38" r="6" fill={J} />
          {/* lower leg */}
          <rect x="-5" y="38" width="10" height="32" rx="5" fill={A2} opacity="0.7" />
        </g>
      </g>

      {/* Right leg — opposite phase */}
      <g transform="translate(188, 116)">
        <g style={{
          animation: `db-right-leg 4s ease-in-out infinite`,
          animationPlayState: ps,
          animationFillMode: 'both',
          transformOrigin: '0px 0px'
        }}>
          <rect x="-6" y="0" width="12" height="38" rx="5" fill={A} opacity="0.5" />
          <circle cx="0" cy="38" r="6" fill={J} opacity="0.5" />
          <rect x="-5" y="38" width="10" height="32" rx="5" fill={A2} opacity="0.4" />
        </g>
      </g>
    </svg>
  );
}
