import type { AnimationProps } from '../types';

const A = '#A78BFA';
const A2 = '#7C5CDB';
const J = '#C4B5FD';   // joint highlight
const EQ = '#3A2E5E';  // equipment

export function LegPressAnimation({ isActive }: AnimationProps) {
  const ps = isActive ? 'running' : 'paused';
  return (
    <svg viewBox="0 0 320 160" style={{ width: '100%', height: '100%' }} preserveAspectRatio="xMidYMid meet">
      {/* Background glow */}
      <ellipse cx="160" cy="110" rx="130" ry="40" fill="#1E1040" opacity="0.5" />

      {/* Machine: seat back */}
      <rect x="60" y="38" width="16" height="72" rx="6" fill={EQ} />
      {/* Machine: seat */}
      <rect x="60" y="104" width="110" height="14" rx="5" fill={EQ} />
      {/* Machine: footplate support arm */}
      <line x1="180" y1="104" x2="250" y2="104" stroke={EQ} strokeWidth="5" strokeLinecap="round" />
      {/* Footplate (animated) */}
      <g style={{ animation: `lp-plate 2.5s ease-in-out infinite`, animationPlayState: ps }}>
        <rect x="238" y="82" width="12" height="52" rx="5" fill={EQ} />
        <rect x="230" y="130" width="28" height="7" rx="3" fill={EQ} />
      </g>

      {/* Figure */}
      {/* Head */}
      <circle cx="108" cy="38" r="16" fill={A} />
      {/* Neck */}
      <rect x="102" y="54" width="12" height="8" rx="3" fill={A} />
      {/* Torso */}
      <rect x="96" y="62" width="26" height="44" rx="10" fill={A} />
      {/* Arm (resting at side) */}
      <rect x="90" y="65" width="9" height="32" rx="4" fill={A2} />

      {/* Upper legs */}
      <rect x="112" y="98" width="80" height="14" rx="6" fill={A} />

      {/* Hip joint */}
      <circle cx="118" cy="105" r="7" fill={J} />
      {/* Knee joint */}
      <circle cx="192" cy="105" r="8" fill={J} />

      {/* Lower leg — pivot at knee (192, 105) */}
      <g transform="translate(192, 105)">
        <g style={{
          animation: `lp-lower-leg 2.5s ease-in-out infinite`,
          animationPlayState: ps,
          animationFillMode: 'both',
          transformOrigin: '0px 0px'
        }}>
          {/* lower leg segment */}
          <rect x="-7" y="0" width="14" height="52" rx="6" fill={A} />
          {/* Foot */}
          <rect x="-12" y="47" width="30" height="10" rx="4" fill={A2} />
        </g>
      </g>
    </svg>
  );
}
