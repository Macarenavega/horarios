import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import type { TabId } from './types';
import { EXERCISES } from './data/exercises';
import { useWorkout } from './hooks/useWorkout';
import { useTimer } from './hooks/useTimer';
import { Header } from './components/Header';
import { TabNav } from './components/TabNav';
import { CalentamientoTab } from './tabs/CalentamientoTab';
import { CircuitoTab } from './tabs/CircuitoTab';
import { VueltaTab } from './tabs/VueltaTab';

const EXERCISE_IDS = EXERCISES.map(e => e.id);
const SETS_PER_EXERCISE = 3;

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('calentamiento');

  const {
    getSets,
    toggleSet,
    resetAll,
    completedExercises,
    totalSetsCompleted,
    totalSets,
  } = useWorkout(EXERCISE_IDS, SETS_PER_EXERCISE);

  const {
    activeExerciseId,
    secondsLeft,
    totalSeconds,
    startTimer,
    skipTimer,
  } = useTimer();

  const handleReset = () => {
    resetAll();
    skipTimer();
  };

  return (
    <div
      style={{
        minHeight: '100dvh',
        maxWidth: '480px',
        margin: '0 auto',
        background: 'var(--c-bg)',
        position: 'relative',
      }}
    >
      <Header
        completedExercises={completedExercises}
        totalSetsCompleted={totalSetsCompleted}
        totalSets={totalSets}
        totalExercises={EXERCISES.length}
      />

      <TabNav
        activeTab={activeTab}
        onTabChange={setActiveTab}
        completedExercises={completedExercises}
        totalExercises={EXERCISES.length}
      />

      <main style={{ paddingBottom: '32px' }}>
        <AnimatePresence mode="wait">
          {activeTab === 'calentamiento' && (
            <CalentamientoTab
              key="calentamiento"
              onStartCircuit={() => setActiveTab('circuito')}
            />
          )}
          {activeTab === 'circuito' && (
            <CircuitoTab
              key="circuito"
              exercises={EXERCISES}
              getSets={getSets}
              onSetToggle={toggleSet}
              activeTimerExerciseId={activeExerciseId}
              secondsLeft={secondsLeft}
              totalSeconds={totalSeconds}
              onTimerStart={startTimer}
              onTimerSkip={skipTimer}
              completedExercises={completedExercises}
              onGoToCooldown={() => setActiveTab('vuelta')}
              onReset={handleReset}
            />
          )}
          {activeTab === 'vuelta' && (
            <VueltaTab key="vuelta" />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
