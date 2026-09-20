export type TabId = 'calentamiento' | 'circuito' | 'vuelta';
export type ExerciseCategory = 'lower' | 'upper' | 'core';

export interface AnimationProps {
  isActive: boolean;
}

export interface Exercise {
  id: string;
  name: string;
  category: ExerciseCategory;
  muscles: string[];
  sets: number;
  reps: string;
  instructions: string[];
  warning: string;
  youtube: string;
  gifUrl: string;
}

export interface WorkoutState {
  sets: Record<string, boolean[]>;
  lastUpdated: number;
}
