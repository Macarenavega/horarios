import { motion } from 'framer-motion';

const STRETCHES = [
  { name: 'Cuádriceps', desc: 'De pie, dobla la rodilla llevando el talón al glúteo.' },
  { name: 'Isquiosurales', desc: 'Sentada, extiende una pierna y alcanza la punta del pie.' },
  { name: 'Pecho', desc: 'Brazos abiertos hacia atrás, manos entrelazadas o apoyadas en la pared.' },
  { name: 'Espalda alta', desc: 'Abraza los hombros cruzando los brazos sobre el pecho.' },
];

const PRECAUTIONS = [
  'Si sientes pinzamiento o dolor irradiado al brazo, para en ese momento.',
  'Remo y press de pecho: empieza siempre con el peso más ligero disponible.',
  'Nada de máquinas de hombro (elevaciones laterales, press militar) hasta consultar médico o fisio.',
  'Si notas mareo, falta de aire inusual o dolor en el pecho, para todo y descansa.',
];

export function VueltaTab() {
  return (
    <motion.div
      key="vuelta"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="px-4 py-5 space-y-4"
    >
      {/* Stretching card */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{ background: 'var(--c-surface)', border: '1.5px solid var(--c-border)' }}
      >
        <div className="px-5 py-5">
          <div className="flex items-center gap-3 mb-1">
            <h2 className="font-display font-bold text-xl" style={{ color: 'var(--c-text)' }}>
              Vuelta a la calma
            </h2>
            <span
              className="rounded-full px-2.5 py-0.5 text-xs font-bold"
              style={{
                background: 'var(--c-accent-dim)',
                color: 'var(--c-accent)',
                border: '1px solid rgba(167,139,250,0.25)',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              5–10 min
            </span>
          </div>

          <p className="text-sm mb-4" style={{ color: 'var(--c-muted)', fontFamily: 'Inter, sans-serif' }}>
            Mantén cada posición 20–30 segundos. Sin rebotes.
          </p>

          <ul className="space-y-4 mb-4">
            {STRETCHES.map((s, i) => (
              <li key={i} className="flex gap-3">
                <span
                  className="flex-shrink-0 mt-1"
                  style={{ color: 'var(--c-accent)', fontSize: '10px', lineHeight: 2 }}
                >
                  ●
                </span>
                <div>
                  <p className="text-sm font-semibold mb-0.5"
                    style={{ color: 'var(--c-text)', fontFamily: 'Inter, sans-serif' }}>
                    {s.name}
                  </p>
                  <p className="text-sm leading-relaxed"
                    style={{ color: 'var(--c-muted)', fontFamily: 'Inter, sans-serif' }}>
                    {s.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {/* Warning */}
          <div
            className="rounded-lg p-3 flex gap-2.5"
            style={{ background: 'rgba(251,191,36,0.07)', borderLeft: '3px solid var(--c-amber)' }}
          >
            <span style={{ color: 'var(--c-amber)', fontSize: '14px', lineHeight: 1.5 }}>⚠</span>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--c-text)', fontFamily: 'Inter, sans-serif', opacity: 0.85 }}>
              Sin tracción en el cuello. Si algún estiramiento genera tensión en el cuello o el brazo, para inmediatamente.
            </p>
          </div>
        </div>
      </div>

      {/* Precautions card */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{ background: 'var(--c-warn-bg)', border: '1.5px solid rgba(248,113,113,0.4)' }}
      >
        <div className="px-5 py-5">
          <div className="flex items-center gap-3 mb-4">
            <span style={{ color: 'var(--c-warn)', fontSize: '20px' }}>⚠</span>
            <h2 className="font-display font-bold text-lg" style={{ color: 'var(--c-warn)' }}>
              Precauciones
            </h2>
          </div>

          <ul className="space-y-3">
            {PRECAUTIONS.map((p, i) => (
              <li key={i} className="flex gap-3">
                <span
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: 'var(--c-warn)', fontSize: '10px', lineHeight: 2 }}
                >
                  ●
                </span>
                <p className="text-sm leading-relaxed"
                  style={{ color: 'var(--c-text)', fontFamily: 'Inter, sans-serif', opacity: 0.9 }}>
                  {p}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Completion message */}
      <div
        className="rounded-xl px-4 py-3 flex gap-3"
        style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}
      >
        <span style={{ color: 'var(--c-success)', fontSize: '18px' }}>✓</span>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--c-muted)', fontFamily: 'Inter, sans-serif' }}>
          ¡Bien hecho! Recuerda hidratarte y anotar cómo te has sentido hoy.
        </p>
      </div>
    </motion.div>
  );
}
