import type { AnimationProps } from '../types';

const A = '#A78BFA';
const A2 = '#7C5CDB';
const J = '#C4B5FD';
const EQ = '#3A2E5E';

export function LegCurlAnimation({ isActive }: AnimationProps) {
  const ps = isActive ? 'running' : 'paused';
  return (
    <svg viewBox="0 0 320 160" style={{ width: '100%', height: '100%' }} preserveAspectRatio="xMidYMid meet">
      <ellipse cx="160" cy="115" rx="130" ry="35" fill="#1E1040" opacity="0.4" />

      {/* Machine: seat */}
      <rect x="70" y="100" width="110" height="14" rx="5" fill={EQ} />
      {/* Machine: backrest */}
      <rect x="62" y="38" width="14" height="66" rx="5" fill={EQ} />
      {/* Machine: ankle roller support */}
      <line x1="180" y1="100" x2="210" y2="128" stroke={EQ} strokeWidth="5" strokeLinecap="round" />
      <circle cx="210" cy="130" r="7" fill={EQ} />

      {/* Figure */}
      {/* Head */}
      <circle cx="112" cy="38" r="15" fill={A} />
      {/* Torso */}
      <rect x="102" y="53" width="22" height="50" rx="9" fill={A} />
      {/* Arm resting */}
      <rect x="97" y="58" width="9" height="30" rx="4" fill={A2} />

      {/* Upper legs (on seat, horizontal pointing right) */}
      <rect x="120" y="98" width="80" height="14" rx="6" fill={A} />

      {/* Hip joint */}
      <circle cx="126" cy="105" r="7" fill={J} />
      {/* Knee joint */}
      <circle cx="200" cy="105" r="8" fill={J} />

      {/* Lower leg — starts pointing FORWARD (right), curls DOWN */}
      {/* When extended: lower leg points forward (to the right) = rotated -90° from "down" */}
      {/* When curled: lower leg points down = 0°  */}
      {/* Pivot at knee (200, 105), rect drawn going DOWN from pivot */}
      <g transform="translate(200, 105)">
        <g style={{
          animation: `lc-lower-leg 2s ease-in-out infinite`,
          animationPlayState: ps,
          animationFillMode: 'both',
          transformOrigin: '0px 0px'
        }}>
          <rect x="-7" y="0" width="14" height="50" rx="6" fill={A} />
          {/* Ankle */}
          <circle cx="0" cy="50" r="7" fill={J} />
          {/* Foot */}
          <rect x="-10" y="46" width="24" height="10" rx="4" fill={A2} />
        </g>
      </g>
    </svg>
  );
}
