import { useEffect, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';

interface CompletionCardProps {
  onGoToCooldown: () => void;
  onReset: () => void;
}

const CONFETTI_COLORS = ['#A78BFA', '#34D399', '#FBBF24', '#F87171', '#60A5FA', '#C4B5FD'];

export function CompletionCard({ onGoToCooldown, onReset }: CompletionCardProps) {
  const pieces = useMemo(() =>
    Array.from({ length: 32 }, (_, i) => ({
      id: i,
      left: `${5 + Math.random() * 90}%`,
      color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
      delay: `${Math.random() * 1.5}s`,
      duration: `${1.4 + Math.random() * 0.8}s`,
      size: `${5 + Math.random() * 7}px`,
      rotate: `${Math.random() * 360}deg`,
    })), []
  );

  const hasAnimated = useRef(false);
  useEffect(() => { hasAnimated.current = true; }, []);

  return (
    <motion.div
      initial={{ scale: 0.88, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 280, damping: 20 }}
      className="rounded-2xl overflow-hidden relative"
      style={{
        background: 'var(--c-surface)',
        border: '1.5px solid var(--c-accent)',
      }}
    >
      {/* Confetti */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        {pieces.map(p => (
          <div
            key={p.id}
            style={{
              position: 'absolute',
              left: p.left,
              top: '10%',
              width: p.size,
              height: p.size,
              background: p.color,
              borderRadius: '2px',
              transform: `rotate(${p.rotate})`,
              animation: `confetti-fall ${p.duration} ${p.delay} ease-in forwards`,
              opacity: 0,
            }}
          />
        ))}
      </div>

      <div className="px-5 py-8 flex flex-col items-center text-center relative z-10">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15, delay: 0.1 }}
          className="rounded-full flex items-center justify-center mb-4"
          style={{
            width: '72px',
            height: '72px',
            background: 'var(--c-accent)',
            color: 'var(--c-accent-text)',
            fontSize: '30px',
            boxShadow: '0 0 40px rgba(167,139,250,0.35)',
          }}
        >
          ✓
        </motion.div>

        <h2 className="font-display font-bold mb-2" style={{ color: 'var(--c-text)', fontSize: '26px', lineHeight: 1.15 }}>
          ¡Circuito completado!
        </h2>
        <p className="mb-6 text-sm" style={{ color: 'var(--c-muted)', fontFamily: 'Inter, sans-serif' }}>
          Ahora pasa a los estiramientos.
        </p>

        <button
          onClick={onGoToCooldown}
          className="w-full rounded-xl font-display font-bold text-base transition-all active:scale-95 mb-3"
          style={{
            height: '52px',
            background: 'var(--c-accent)',
            color: 'var(--c-accent-text)',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Ir a la vuelta a la calma →
        </button>

        <button
          onClick={onReset}
          className="w-full rounded-xl font-display font-bold text-base transition-all active:scale-95"
          style={{
            height: '48px',
            background: 'transparent',
            color: 'var(--c-muted)',
            border: '1.5px solid var(--c-border)',
            cursor: 'pointer',
            fontSize: '14px',
          }}
        >
          Reiniciar entrenamiento
        </button>
      </div>
    </motion.div>
  );
}
