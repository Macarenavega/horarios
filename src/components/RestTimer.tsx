import { motion } from 'framer-motion';

interface RestTimerProps {
  secondsLeft: number;
  totalSeconds: number;
  onSkip: () => void;
}

const RADIUS = 34;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function RestTimer({ secondsLeft, totalSeconds, onSkip }: RestTimerProps) {
  const progress = secondsLeft / totalSeconds; // 1.0 → 0.0
  const strokeOffset = CIRCUMFERENCE * (1 - progress); // 0 → CIRCUMFERENCE

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      style={{ overflow: 'hidden' }}
    >
      <div
        className="mx-0 rounded-xl p-4 mt-3 flex items-center gap-4"
        style={{ background: 'var(--c-accent-dim)', border: '1px solid rgba(167,139,250,0.2)' }}
      >
        {/* Ring + number */}
        <div className="relative flex-shrink-0" style={{ width: '80px', height: '80px' }}>
          <svg width="80" height="80" viewBox="0 0 80 80" style={{ transform: 'rotate(-90deg)' }}>
            {/* Track */}
            <circle
              cx="40" cy="40" r={RADIUS}
              fill="none"
              stroke="rgba(167,139,250,0.15)"
              strokeWidth="5"
            />
            {/* Progress ring */}
            <circle
              cx="40" cy="40" r={RADIUS}
              fill="none"
              stroke="var(--c-accent)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={strokeOffset}
              style={{ transition: 'stroke-dashoffset 1s linear' }}
            />
          </svg>
          {/* Number overlay */}
          <div
            className="absolute inset-0 flex items-center justify-center font-display font-bold tabular-nums"
            style={{ color: 'var(--c-accent)', fontSize: '26px', lineHeight: 1 }}
          >
            {secondsLeft}
          </div>
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <p
            className="text-xs font-medium uppercase tracking-widest"
            style={{ color: 'var(--c-muted)', fontFamily: 'Inter, sans-serif', letterSpacing: '0.12em' }}
          >
            Descanso
          </p>
          <p className="text-sm mt-0.5" style={{ color: 'var(--c-text)', fontFamily: 'Inter, sans-serif' }}>
            Próxima serie en <span className="tabular-nums font-medium" style={{ color: 'var(--c-accent)' }}>{secondsLeft}s</span>
          </p>
          <button
            onClick={onSkip}
            className="mt-2 text-xs font-medium rounded-lg px-3 py-1.5 transition-colors"
            style={{
              color: 'var(--c-accent)',
              border: '1px solid rgba(167,139,250,0.4)',
              background: 'transparent',
              cursor: 'pointer',
              fontFamily: 'Inter, sans-serif',
              minHeight: '32px',
            }}
          >
            Saltar →
          </button>
        </div>
      </div>
    </motion.div>
  );
}
