import type { AnimationProps } from '../types';

const A = '#A78BFA';
const A2 = '#7C5CDB';
const J = '#C4B5FD';
const EQ = '#3A2E5E';

export function CableRowAnimation({ isActive }: AnimationProps) {
  const ps = isActive ? 'running' : 'paused';
  return (
    <svg viewBox="0 0 320 160" style={{ width: '100%', height: '100%' }} preserveAspectRatio="xMidYMid meet">
      <ellipse cx="160" cy="118" rx="120" ry="32" fill="#1E1040" opacity="0.4" />

      {/* Cable machine frame (left side) */}
      <rect x="30" y="20" width="16" height="130" rx="6" fill={EQ} />
      <rect x="30" y="75" width="30" height="10" rx="4" fill={EQ} />
      {/* Pulley */}
      <circle cx="58" cy="80" r="7" fill={EQ} />

      {/* Floor footrests */}
      <rect x="110" y="128" width="30" height="10" rx="4" fill={EQ} />
      <rect x="155" y="128" width="30" height="10" rx="4" fill={EQ} />

      {/* Cable — animates with arm */}
      <g style={{ animation: `cr-arm 2.5s ease-in-out infinite`, animationPlayState: ps, animationFillMode: 'both' }}>
        <line x1="58" y1="80" x2="130" y2="95" stroke={EQ} strokeWidth="2" opacity="0.5" />
        {/* V-bar handle */}
        <rect x="118" y="88" width="18" height="6" rx="3" fill={EQ} />
      </g>

      {/* Figure — torso tilts */}
      <g transform="translate(162, 128)">
        {/* Seated figure, torso pivots at hip */}
        {/* Thighs (static) */}
        <rect x="-50" y="-14" width="50" height="14" rx="5" fill={A} />
        <circle cx="-50" cy="-7" r="7" fill={J} />

        {/* Lower legs (static, hanging down) */}
        <rect x="-57" y="-8" width="12" height="38" rx="5" fill={A2} />
        <rect x="-20" y="-8" width="12" height="38" rx="5" fill={A2} />

        {/* Torso group (pivots at hip = origin) */}
        <g style={{
          animation: `cr-torso 2.5s ease-in-out infinite`,
          animationPlayState: ps,
          animationFillMode: 'both',
          transformOrigin: '0px -7px'
        }}>
          {/* Torso */}
          <rect x="-11" y="-60" width="22" height="50" rx="9" fill={A} />
          {/* Head */}
          <circle cx="0" cy="-74" r="15" fill={A} />

          {/* Arm — pivot at shoulder (0, -52) */}
          <g transform="translate(0, -52)">
            <g style={{
              animation: `cr-arm 2.5s ease-in-out infinite`,
              animationPlayState: ps,
              animationFillMode: 'both',
              transformOrigin: '0px 0px'
            }}>
              {/* Arm extends left (forward) then retracts */}
              <rect x="0" y="-6" width="55" height="12" rx="5" fill={A2} transform="rotate(-10)" />
              <circle cx="0" cy="0" r="7" fill={J} />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
