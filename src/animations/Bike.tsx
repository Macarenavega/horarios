import type { AnimationProps } from '../types';

const A = '#A78BFA';
const A2 = '#7C5CDB';
const EQ = '#3A2E5E';
const RIDER = '#C4B5FD';

export function BikeAnimation({ isActive }: AnimationProps) {
  const ps = isActive ? 'running' : 'paused';
  return (
    <svg viewBox="0 0 420 200" style={{ width: '100%', height: '100%' }} preserveAspectRatio="xMidYMid meet">
      <defs>
        <radialGradient id="bg-glow" cx="50%" cy="60%" r="50%">
          <stop offset="0%" stopColor="#2D1F6E" stopOpacity="0.4" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <ellipse cx="210" cy="130" rx="180" ry="55" fill="url(#bg-glow)" />

      {/* Ground shadow */}
      <ellipse cx="210" cy="170" rx="120" ry="8" fill="#1A1030" opacity="0.6" />

      {/* Whole bike group floats */}
      <g style={{ animation: `bike-float 2s ease-in-out infinite`, animationPlayState: ps }}>

        {/* Rear wheel */}
        <g transform="translate(130, 140)">
          <circle r="42" fill="none" stroke={EQ} strokeWidth="6" />
          <circle r="8" fill={A2} />
          {/* Spokes */}
          <g style={{ transformBox: 'fill-box', transformOrigin: 'center center', animation: `wheel-spin 0.9s linear infinite`, animationPlayState: ps }}>
            <line x1="-38" y1="0" x2="38" y2="0" stroke={EQ} strokeWidth="2.5" opacity="0.7" />
            <line x1="0" y1="-38" x2="0" y2="38" stroke={EQ} strokeWidth="2.5" opacity="0.7" />
            <line x1="-27" y1="-27" x2="27" y2="27" stroke={EQ} strokeWidth="2" opacity="0.5" />
            <line x1="27" y1="-27" x2="-27" y2="27" stroke={EQ} strokeWidth="2" opacity="0.5" />
          </g>
          <circle r="42" fill="none" stroke={A2} strokeWidth="3" opacity="0.5" />
          <circle r="36" fill="none" stroke={A} strokeWidth="1.5" opacity="0.3" />
        </g>

        {/* Front wheel */}
        <g transform="translate(295, 140)">
          <circle r="42" fill="none" stroke={EQ} strokeWidth="6" />
          <circle r="8" fill={A2} />
          <g style={{ transformBox: 'fill-box', transformOrigin: 'center center', animation: `wheel-spin 0.9s linear infinite`, animationPlayState: ps }}>
            <line x1="-38" y1="0" x2="38" y2="0" stroke={EQ} strokeWidth="2.5" opacity="0.7" />
            <line x1="0" y1="-38" x2="0" y2="38" stroke={EQ} strokeWidth="2.5" opacity="0.7" />
            <line x1="-27" y1="-27" x2="27" y2="27" stroke={EQ} strokeWidth="2" opacity="0.5" />
            <line x1="27" y1="-27" x2="-27" y2="27" stroke={EQ} strokeWidth="2" opacity="0.5" />
          </g>
          <circle r="42" fill="none" stroke={A2} strokeWidth="3" opacity="0.5" />
        </g>

        {/* Frame */}
        {/* Chain stay rear → bottom bracket */}
        <line x1="130" y1="140" x2="195" y2="125" stroke={A2} strokeWidth="7" strokeLinecap="round" />
        {/* Seat stay rear → seat tube */}
        <line x1="130" y1="140" x2="200" y2="82" stroke={A2} strokeWidth="5" strokeLinecap="round" />
        {/* Top tube */}
        <line x1="200" y1="82" x2="265" y2="88" stroke={A2} strokeWidth="6" strokeLinecap="round" />
        {/* Down tube */}
        <line x1="265" y1="88" x2="195" y2="125" stroke={A2} strokeWidth="6" strokeLinecap="round" />
        {/* Seat tube */}
        <line x1="200" y1="82" x2="195" y2="125" stroke={A2} strokeWidth="6" strokeLinecap="round" />
        {/* Fork */}
        <line x1="265" y1="88" x2="295" y2="140" stroke={A2} strokeWidth="6" strokeLinecap="round" />

        {/* Handlebars */}
        <line x1="265" y1="88" x2="272" y2="68" stroke={A} strokeWidth="5" strokeLinecap="round" />
        <line x1="268" y1="68" x2="280" y2="65" stroke={A} strokeWidth="4" strokeLinecap="round" />
        <line x1="268" y1="68" x2="280" y2="75" stroke={A} strokeWidth="4" strokeLinecap="round" />

        {/* Seat post + saddle */}
        <line x1="200" y1="82" x2="195" y2="60" stroke={A} strokeWidth="5" strokeLinecap="round" />
        <rect x="182" y="54" width="36" height="9" rx="4" fill={A} opacity="0.9" />

        {/* Bottom bracket (crank center) */}
        <circle cx="195" cy="125" r="9" fill={A} />

        {/* Crank arms & pedals */}
        <g transform="translate(195, 125)">
          <g style={{ transformBox: 'fill-box', transformOrigin: 'center center', animation: `wheel-spin 0.9s linear infinite`, animationPlayState: ps }}>
            <line x1="0" y1="-18" x2="0" y2="18" stroke={A2} strokeWidth="5" strokeLinecap="round" />
            <rect x="-10" y="-22" width="20" height="7" rx="3" fill={EQ} />
            <rect x="-10" y="15" width="20" height="7" rx="3" fill={EQ} />
          </g>
        </g>

        {/* Chain ring */}
        <circle cx="195" cy="125" r="18" fill="none" stroke={A2} strokeWidth="3" opacity="0.6" />

        {/* Rider group */}
        <g style={{ animation: `rider-bob 2s ease-in-out infinite`, animationPlayState: ps }}>
          {/* Torso */}
          <line x1="205" y1="60" x2="230" y2="85" stroke={RIDER} strokeWidth="10" strokeLinecap="round" />
          {/* Head */}
          <circle cx="202" cy="50" r="16" fill={RIDER} />
          {/* Helmet */}
          <path d="M188 46 Q202 28 216 46" fill={A} />
          {/* Arm to handlebar */}
          <line x1="230" y1="85" x2="272" y2="68" stroke={RIDER} strokeWidth="7" strokeLinecap="round" />

          {/* Front leg (animated cranking) */}
          <g transform="translate(195, 125)">
            <g style={{ transformBox: 'fill-box', transformOrigin: 'center center', animation: `wheel-spin 0.95s linear infinite`, animationPlayState: ps }}>
              {/* Upper leg */}
              <line x1="0" y1="0" x2="0" y2="-22" stroke={RIDER} strokeWidth="9" strokeLinecap="round" />
            </g>
          </g>
          {/* Back leg */}
          <g transform="translate(195, 125)">
            <g style={{ transformBox: 'fill-box', transformOrigin: 'center center', animation: `wheel-spin 0.95s linear infinite`, animationPlayState: ps, animationDelay: '-0.475s' }}>
              <line x1="0" y1="0" x2="0" y2="-18" stroke={A2} strokeWidth="8" strokeLinecap="round" opacity="0.6" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
