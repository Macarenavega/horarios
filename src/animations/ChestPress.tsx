import type { AnimationProps } from '../types';

const A = '#A78BFA';
const A2 = '#7C5CDB';
const J = '#C4B5FD';
const EQ = '#3A2E5E';

export function ChestPressAnimation({ isActive }: AnimationProps) {
  const ps = isActive ? 'running' : 'paused';
  return (
    <svg viewBox="0 0 320 160" style={{ width: '100%', height: '100%' }} preserveAspectRatio="xMidYMid meet">
      <ellipse cx="160" cy="118" rx="120" ry="32" fill="#1E1040" opacity="0.4" />

      {/* Machine frame (right side) */}
      <rect x="268" y="20" width="14" height="130" rx="5" fill={EQ} />
      {/* Machine arms to handles */}
      <line x1="268" y1="85" x2="240" y2="90" stroke={EQ} strokeWidth="8" strokeLinecap="round" />

      {/* Machine seat */}
      <rect x="90" y="108" width="100" height="13" rx="5" fill={EQ} />
      {/* Machine backrest */}
      <rect x="82" y="42" width="14" height="70" rx="5" fill={EQ} />

      {/* Figure */}
      {/* Head */}
      <circle cx="116" cy="42" r="15" fill={A} />
      {/* Torso */}
      <rect x="106" y="57" width="22" height="53" rx="9" fill={A} />

      {/* Legs */}
      <rect x="120" y="108" width="70" height="12" rx="5" fill={A} />
      <rect x="124" y="118" width="12" height="30" rx="5" fill={A2} />
      <rect x="152" y="118" width="12" height="30" rx="5" fill={A2} />

      {/* Upper arm (static at shoulder) */}
      <circle cx="127" cy="70" r="7" fill={J} />

      {/* Forearm — pivots at elbow, pushes forward */}
      {/* Elbow at (127, 85), forearm drawn going RIGHT */}
      <g transform="translate(127, 82)">
        <g style={{
          animation: `cp-forearm 2.5s ease-in-out infinite`,
          animationPlayState: ps,
          animationFillMode: 'both',
          transformOrigin: '0px 0px'
        }}>
          {/* Upper arm segment going up */}
          <rect x="-6" y="-16" width="12" height="20" rx="5" fill={A} />
          {/* Forearm going right (when not rotated = bent, rotated = extended) */}
          <rect x="0" y="-6" width="55" height="12" rx="5" fill={A2} />
          <circle cx="0" cy="0" r="7" fill={J} />
          {/* Handle at end of forearm */}
          <circle cx="53" cy="0" r="6" fill={EQ} />
        </g>
      </g>
    </svg>
  );
}
