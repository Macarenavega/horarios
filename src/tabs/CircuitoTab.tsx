import { motion } from 'framer-motion';
import type { Exercise } from '../types';
import { ExerciseCard } from '../components/ExerciseCard';
import { CompletionCard } from '../components/CompletionCard';

const SECTION_LABELS: Record<string, { label: string; color: string }> = {
  lower: { label: 'Tren inferior', color: '#3B82F6' },
  upper: { label: 'Tren superior', color: '#A78BFA' },
  core:  { label: 'Core',          color: '#FBBF24' },
};

interface CircuitoTabProps {
  exercises: Exercise[];
  getSets: (id: string) => boolean[];
  onSetToggle: (exerciseId: string, setIndex: number) => void;
  activeTimerExerciseId: string | null;
  secondsLeft: number;
  totalSeconds: number;
  onTimerStart: (exerciseId: string) => void;
  onTimerSkip: () => void;
  completedExercises: number;
  onGoToCooldown: () => void;
  onReset: () => void;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' as const } },
};

export function CircuitoTab({
  exercises,
  getSets,
  onSetToggle,
  activeTimerExerciseId,
  secondsLeft,
  totalSeconds,
  onTimerStart,
  onTimerSkip,
  completedExercises,
  onGoToCooldown,
  onReset,
}: CircuitoTabProps) {
  const allDone = completedExercises === exercises.length;

  const handleSetToggle = (exerciseId: string, setIndex: number) => {
    const prev = getSets(exerciseId);
    const wasMarked = prev[setIndex];
    onSetToggle(exerciseId, setIndex);

    // Start timer when a set is newly marked (not un-marked) and not all done
    if (!wasMarked) {
      const newSets = [...prev];
      newSets[setIndex] = true;
      const allNowDone = newSets.every(Boolean);
      if (!allNowDone) {
        onTimerStart(exerciseId);
      } else {
        // All sets for this exercise done — skip/cancel timer
        onTimerSkip();
      }
    } else {
      // Un-marking — if this exercise had active timer, skip it
      if (activeTimerExerciseId === exerciseId) onTimerSkip();
    }
  };

  // Group exercises by category
  const sections: Array<{ key: string; exercises: Exercise[] }> = [];
  let currentKey = '';
  for (const ex of exercises) {
    if (ex.category !== currentKey) {
      currentKey = ex.category;
      sections.push({ key: currentKey, exercises: [] });
    }
    sections[sections.length - 1].exercises.push(ex);
  }

  return (
    <motion.div
      key="circuito"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="px-4 py-4"
    >
      {/* Info bar */}
      <div
        className="flex items-center gap-2 rounded-xl px-4 py-3 mb-5 text-xs"
        style={{
          background: 'var(--c-surface)',
          border: '1px solid var(--c-border)',
          color: 'var(--c-muted)',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <span style={{ color: 'var(--c-accent)', fontSize: '15px' }}>🕐</span>
        <span>Tocá un número para marcar la serie. El descanso empieza solo.</span>
      </div>

      <motion.div
        className="space-y-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {sections.map(section => {
          const meta = SECTION_LABELS[section.key];
          return (
            <div key={section.key}>
              {/* Section header */}
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="inline-block rounded-full flex-shrink-0"
                  style={{ width: '10px', height: '10px', background: meta.color }}
                />
                <h3
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: meta.color, fontFamily: 'Inter, sans-serif', letterSpacing: '0.12em' }}
                >
                  {meta.label}
                </h3>
              </div>

              <div className="space-y-3">
                {section.exercises.map(exercise => (
                  <motion.div key={exercise.id} variants={itemVariants}>
                    <ExerciseCard
                      exercise={exercise}
                      sets={getSets(exercise.id)}
                      isTimerActive={activeTimerExerciseId === exercise.id}
                      secondsLeft={secondsLeft}
                      totalSeconds={totalSeconds}
                      onSetToggle={idx => handleSetToggle(exercise.id, idx)}
                      onTimerSkip={onTimerSkip}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}

        {/* Completion card */}
        {allDone && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <CompletionCard onGoToCooldown={onGoToCooldown} onReset={onReset} />
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
