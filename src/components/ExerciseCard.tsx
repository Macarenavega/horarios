import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Exercise } from '../types';
import { SetDot } from './SetDot';
import { RestTimer } from './RestTimer';
import { InstructionsPanel } from './InstructionsPanel';

const CATEGORY_COLORS: Record<string, string> = {
  lower: '#3B82F6',
  upper: '#A78BFA',
  core: '#FBBF24',
};

interface ExerciseCardProps {
  exercise: Exercise;
  sets: boolean[];
  isTimerActive: boolean;
  secondsLeft: number;
  totalSeconds: number;
  onSetToggle: (setIndex: number) => void;
  onTimerSkip: () => void;
}

export function ExerciseCard({
  exercise,
  sets,
  isTimerActive,
  secondsLeft,
  totalSeconds,
  onSetToggle,
  onTimerSkip,
}: ExerciseCardProps) {
  const allDone = sets.every(Boolean);
  const cardRef = useRef<HTMLDivElement>(null);
  const [glowing, setGlowing] = useState(false);
  const prevAnyMarked = useRef(sets.some(Boolean));

  // Trigger glow flash on first set marked
  useEffect(() => {
    const anyMarked = sets.some(Boolean);
    if (anyMarked && !prevAnyMarked.current) {
      setGlowing(true);
      const t = setTimeout(() => setGlowing(false), 400);
      return () => clearTimeout(t);
    }
    prevAnyMarked.current = anyMarked;
  }, [sets]);

  const dotColor = CATEGORY_COLORS[exercise.category] ?? '#A78BFA';

  return (
    <motion.div
      ref={cardRef}
      layout
      className={`rounded-2xl overflow-hidden transition-opacity duration-300${glowing ? ' glow-flash' : ''}`}
      style={{
        background: 'var(--c-surface)',
        border: allDone ? '1.5px solid var(--c-accent)' : '1.5px solid var(--c-border)',
        opacity: allDone ? 0.72 : 1,
      }}
    >
      {/* Animation zone */}
      <div
        className="w-full relative overflow-hidden"
        style={{
          height: '160px',
          background: 'linear-gradient(180deg, var(--c-surface-raised) 0%, var(--c-surface) 100%)',
        }}
      >
        <exercise.Animation isActive={!allDone} />

        {/* Done overlay */}
        <AnimatePresence>
          {allDone && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center"
              style={{ background: 'rgba(10,10,15,0.55)' }}
            >
              <div
                className="rounded-full flex items-center justify-center"
                style={{ width: '48px', height: '48px', background: 'var(--c-accent)', color: 'var(--c-accent-text)', fontSize: '22px', fontWeight: 700 }}
              >
                ✓
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Card body */}
      <div className="px-4 pt-3 pb-4">
        {/* Name + checkmark badge */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3
            className="font-display font-bold text-lg leading-snug"
            style={{
              color: 'var(--c-text)',
              textDecoration: allDone ? 'line-through' : 'none',
              opacity: allDone ? 0.5 : 1,
            }}
          >
            {exercise.name}
          </h3>
          {allDone && (
            <span
              className="flex-shrink-0 rounded-full px-2 py-0.5 text-xs font-bold"
              style={{ background: 'var(--c-accent)', color: 'var(--c-accent-text)' }}
            >
              ✓
            </span>
          )}
        </div>

        {/* Muscle chips */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          <span
            className="inline-block rounded-full w-2 h-2 self-center flex-shrink-0"
            style={{ background: dotColor }}
          />
          {exercise.muscles.map(m => (
            <span
              key={m}
              className="rounded-full px-2 py-0.5 text-xs"
              style={{ background: 'var(--c-surface-raised)', color: 'var(--c-muted)', fontFamily: 'Inter, sans-serif' }}
            >
              {m}
            </span>
          ))}
        </div>

        {/* Set tracker row */}
        <div className="flex items-center gap-3">
          <span
            className="text-xs font-medium uppercase tracking-widest flex-shrink-0"
            style={{ color: 'var(--c-muted)', fontFamily: 'Inter, sans-serif', letterSpacing: '0.1em' }}
          >
            Series
          </span>
          <div className="flex gap-2">
            {sets.map((marked, i) => (
              <SetDot
                key={i}
                index={i}
                marked={marked}
                onClick={() => onSetToggle(i)}
              />
            ))}
          </div>
          <span
            className="ml-auto text-sm font-medium"
            style={{ color: 'var(--c-muted)', fontFamily: 'Inter, sans-serif' }}
          >
            × {exercise.reps}
          </span>
        </div>

        {/* Rest timer */}
        <AnimatePresence>
          {isTimerActive && (
            <RestTimer
              secondsLeft={secondsLeft}
              totalSeconds={totalSeconds}
              onSkip={onTimerSkip}
            />
          )}
        </AnimatePresence>

        {/* Instructions toggle */}
        <InstructionsPanel
          instructions={exercise.instructions}
          warning={exercise.warning}
          youtube={exercise.youtube}
        />
      </div>
    </motion.div>
  );
}
