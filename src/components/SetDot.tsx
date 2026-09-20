import { motion } from 'framer-motion';

interface SetDotProps {
  index: number;
  marked: boolean;
  onClick: () => void;
}

export function SetDot({ index, marked, onClick }: SetDotProps) {
  return (
    <motion.button
      onClick={onClick}
      className="flex items-center justify-center rounded-full font-display font-bold text-base tabular-nums select-none"
      style={{
        width: '48px',
        height: '48px',
        minWidth: '48px',
        background: marked ? 'var(--c-accent)' : 'var(--c-surface-raised)',
        color: marked ? 'var(--c-accent-text)' : 'var(--c-muted)',
        border: marked ? '2px solid transparent' : '2px solid var(--c-border)',
        cursor: 'pointer',
        outline: 'none',
        WebkitTapHighlightColor: 'transparent',
      }}
      whileTap={{ scale: 0.9 }}
      animate={{
        scale: marked ? 1.08 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 15,
      }}
      aria-label={`Serie ${index + 1}${marked ? ' completada' : ''}`}
    >
      {marked ? '✓' : index + 1}
    </motion.button>
  );
}
