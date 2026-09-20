import type { AnimationProps } from '../types';

const A = '#A78BFA';
const A2 = '#7C5CDB';
const J = '#C4B5FD';
const EQ = '#3A2E5E';

export function HipAbductionAnimation({ isActive }: AnimationProps) {
  const ps = isActive ? 'running' : 'paused';
  return (
    <svg viewBox="0 0 320 160" style={{ width: '100%', height: '100%' }} preserveAspectRatio="xMidYMid meet">
      <ellipse cx="160" cy="115" rx="110" ry="35" fill="#1E1040" opacity="0.4" />

      {/* Machine seat */}
      <rect x="120" y="108" width="80" height="13" rx="5" fill={EQ} />
      {/* Machine backrest */}
      <rect x="155" y="58" width="12" height="52" rx="4" fill={EQ} />

      {/* Machine thigh pads (outer guides) */}
      <rect x="88" y="110" width="14" height="26" rx="5" fill={EQ} opacity="0.8"/>
      <rect x="220" y="110" width="14" height="26" rx="5" fill={EQ} opacity="0.8"/>

      {/* Figure */}
      {/* Head */}
      <circle cx="161" cy="40" r="15" fill={A} />
      {/* Torso */}
      <rect x="151" y="55" width="22" height="54" rx="9" fill={A} />

      {/* Hip pivot left */}
      <circle cx="153" cy="110" r="7" fill={J} />
      {/* Hip pivot right */}
      <circle cx="169" cy="110" r="7" fill={J} />

      {/* Left upper leg — pivot at (153, 110) going DOWN */}
      <g transform="translate(153, 110)">
        <g style={{
          animation: `ha-left-leg 2s ease-in-out infinite`,
          animationPlayState: ps,
          animationFillMode: 'both',
          transformOrigin: '0px 0px'
        }}>
          <rect x="-7" y="0" width="14" height="45" rx="6" fill={A} />
          <circle cx="0" cy="45" r="8" fill={J} />
          {/* Lower leg */}
          <rect x="-6" y="45" width="12" height="30" rx="5" fill={A2} />
        </g>
      </g>

      {/* Right upper leg — pivot at (169, 110) going DOWN */}
      <g transform="translate(169, 110)">
        <g style={{
          animation: `ha-right-leg 2s ease-in-out infinite`,
          animationPlayState: ps,
          animationFillMode: 'both',
          transformOrigin: '0px 0px'
        }}>
          <rect x="-7" y="0" width="14" height="45" rx="6" fill={A} />
          <circle cx="0" cy="45" r="8" fill={J} />
          {/* Lower leg */}
          <rect x="-6" y="45" width="12" height="30" rx="5" fill={A2} />
        </g>
      </g>
    </svg>
  );
}
