import { motion } from 'framer-motion';
import { BikeAnimation } from '../animations/Bike';

interface CalentamientoTabProps {
  onStartCircuit: () => void;
}

export function CalentamientoTab({ onStartCircuit }: CalentamientoTabProps) {
  return (
    <motion.div
      key="calentamiento"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="px-4 py-5 space-y-4"
    >
      {/* Hero card */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{ background: 'var(--c-surface)', border: '1.5px solid var(--c-border)' }}
      >
        {/* Animation zone */}
        <div
          style={{
            height: '200px',
            background: 'linear-gradient(180deg, #160E30 0%, var(--c-surface) 100%)',
          }}
        >
          <BikeAnimation isActive={true} />
        </div>

        <div className="px-5 py-5">
          <div className="flex items-center gap-3 mb-3">
            <h2 className="font-display font-bold text-2xl" style={{ color: 'var(--c-text)' }}>
              Bicicleta estática
            </h2>
            <span
              className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide"
              style={{
                background: 'var(--c-accent-dim)',
                color: 'var(--c-accent)',
                border: '1px solid rgba(167,139,250,0.25)',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              10 minutos
            </span>
          </div>

          <p className="text-sm leading-relaxed mb-3"
            style={{ color: 'var(--c-text)', fontFamily: 'Inter, sans-serif', opacity: 0.85 }}>
            Ritmo cómodo y constante. La intensidad correcta es aquella en la que puedes hablar sin ahogarte. Si no puedes terminar una frase, baja el ritmo.
          </p>
          <p className="text-sm leading-relaxed mb-5"
            style={{ color: 'var(--c-muted)', fontFamily: 'Inter, sans-serif' }}>
            Ajusta el sillín a la altura de tu cadera, rodilla ligeramente flexionada en el punto más bajo del pedaleo.
          </p>

          <button
            onClick={onStartCircuit}
            className="w-full rounded-xl font-display font-bold text-base transition-all active:scale-95"
            style={{
              height: '52px',
              background: 'var(--c-accent)',
              color: 'var(--c-accent-text)',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Empezar el circuito →
          </button>
        </div>
      </div>

      {/* Tip card */}
      <div
        className="rounded-xl px-4 py-3 flex gap-3"
        style={{ background: 'var(--c-surface-raised)', border: '1px solid var(--c-border)' }}
      >
        <span style={{ color: 'var(--c-accent)', fontSize: '16px' }}>💡</span>
        <p className="text-xs leading-relaxed" style={{ color: 'var(--c-muted)', fontFamily: 'Inter, sans-serif' }}>
          El calentamiento aumenta la temperatura muscular y reduce el riesgo de lesiones. No lo saltes, especialmente en días de baja energía.
        </p>
      </div>
    </motion.div>
  );
}
