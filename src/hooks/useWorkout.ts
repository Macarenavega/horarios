import { useState, useCallback, useEffect } from 'react';
import type { WorkoutState } from '../types';

const STORAGE_KEY = 'rutina-mama-v2';

function loadState(): WorkoutState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as WorkoutState;
  } catch {}
  return { sets: {}, lastUpdated: Date.now() };
}

function saveState(state: WorkoutState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
}

export function useWorkout(exerciseIds: string[], setsPerExercise: number) {
  const [state, setState] = useState<WorkoutState>(loadState);

  // Ensure all exercises have an entry
  useEffect(() => {
    setState(prev => {
      const sets = { ...prev.sets };
      let changed = false;
      for (const id of exerciseIds) {
        if (!sets[id] || sets[id].length !== setsPerExercise) {
          sets[id] = Array(setsPerExercise).fill(false);
          changed = true;
        }
      }
      return changed ? { ...prev, sets } : prev;
    });
  }, [exerciseIds, setsPerExercise]);

  useEffect(() => {
    saveState(state);
  }, [state]);

  const toggleSet = useCallback((exerciseId: string, setIndex: number) => {
    setState(prev => {
      const current = prev.sets[exerciseId] ?? Array(setsPerExercise).fill(false);
      const updated = [...current];
      updated[setIndex] = !updated[setIndex];
      return {
        sets: { ...prev.sets, [exerciseId]: updated },
        lastUpdated: Date.now(),
      };
    });
  }, [setsPerExercise]);

  const resetAll = useCallback(() => {
    const sets: Record<string, boolean[]> = {};
    for (const id of exerciseIds) {
      sets[id] = Array(setsPerExercise).fill(false);
    }
    setState({ sets, lastUpdated: Date.now() });
  }, [exerciseIds, setsPerExercise]);

  const getSets = useCallback((exerciseId: string): boolean[] => {
    return state.sets[exerciseId] ?? Array(setsPerExercise).fill(false);
  }, [state.sets, setsPerExercise]);

  const completedExercises = exerciseIds.filter(id =>
    (state.sets[id] ?? []).every(Boolean)
  ).length;

  const totalSetsCompleted = exerciseIds.reduce((acc, id) => {
    return acc + (state.sets[id] ?? []).filter(Boolean).length;
  }, 0);

  const totalSets = exerciseIds.length * setsPerExercise;

  return {
    getSets,
    toggleSet,
    resetAll,
    completedExercises,
    totalSetsCompleted,
    totalSets,
  };
}
