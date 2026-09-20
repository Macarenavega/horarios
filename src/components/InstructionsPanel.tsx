import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface InstructionsPanelProps {
  instructions: string[];
  warning: string;
  youtube: string;
}

export function InstructionsPanel({ instructions, warning, youtube }: InstructionsPanelProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-3">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between px-0 py-2 text-sm font-medium transition-colors"
        style={{
          color: open ? 'var(--c-accent)' : 'var(--c-muted)',
          fontFamily: 'Inter, sans-serif',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          minHeight: '44px',
        }}
      >
        <span>Instrucciones</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ display: 'inline-block', fontSize: '12px', lineHeight: 1 }}
        >
          ▼
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div
              className="rounded-xl p-4 mb-1"
              style={{ background: 'var(--c-surface-raised)', border: '1px solid var(--c-border)' }}
            >
              {/* Step list */}
              <ol className="space-y-3 mb-4">
                {instructions.map((step, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed"
                    style={{ color: 'var(--c-text)', fontFamily: 'Inter, sans-serif' }}>
                    <span
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ background: 'var(--c-accent-dim)', color: 'var(--c-accent)', marginTop: '1px' }}
                    >
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>

              {/* Warning */}
              <div
                className="rounded-lg p-3 mb-3 flex gap-2.5"
                style={{
                  background: 'rgba(251,191,36,0.07)',
                  borderLeft: '3px solid var(--c-amber)',
                }}
              >
                <span style={{ color: 'var(--c-amber)', fontSize: '14px', lineHeight: 1.4 }}>⚠</span>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--c-text)', fontFamily: 'Inter, sans-serif', opacity: 0.85 }}>
                  {warning}
                </p>
              </div>

              {/* YouTube button */}
              <a
                href={youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium transition-colors"
                style={{
                  background: 'rgba(220,38,38,0.1)',
                  color: '#F87171',
                  border: '1px solid rgba(220,38,38,0.2)',
                  textDecoration: 'none',
                  fontFamily: 'Inter, sans-serif',
                  minHeight: '36px',
                }}
              >
                <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
                  <path d="M15.67 1.88A2.01 2.01 0 0014.26.46C13.02.1 8 .1 8 .1S2.98.1 1.74.46A2.01 2.01 0 00.33 1.88C0 3.12 0 5.7 0 5.7s0 2.58.33 3.82A2.01 2.01 0 001.74 10.94C2.98 11.3 8 11.3 8 11.3s5.02 0 6.26-.36a2.01 2.01 0 001.41-1.42C16 8.28 16 5.7 16 5.7s0-2.58-.33-3.82zM6.4 8.1V3.3l4.18 2.4L6.4 8.1z"/>
                </svg>
                Ver tutorial →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
