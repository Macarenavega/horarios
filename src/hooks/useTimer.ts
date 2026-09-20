import { useState, useRef, useCallback, useEffect } from 'react';

const REST_DURATION = 60;

interface TimerState {
  exerciseId: string | null;
  secondsLeft: number;
}

export function useTimer() {
  const [timer, setTimer] = useState<TimerState>({ exerciseId: null, secondsLeft: REST_DURATION });
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearTimer = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startTimer = useCallback((exerciseId: string) => {
    clearTimer();
    setTimer({ exerciseId, secondsLeft: REST_DURATION });
    intervalRef.current = setInterval(() => {
      setTimer(prev => {
        if (prev.secondsLeft <= 1) {
          clearInterval(intervalRef.current!);
          intervalRef.current = null;
          return { exerciseId: null, secondsLeft: REST_DURATION };
        }
        return { ...prev, secondsLeft: prev.secondsLeft - 1 };
      });
    }, 1000);
  }, [clearTimer]);

  const skipTimer = useCallback(() => {
    clearTimer();
    setTimer({ exerciseId: null, secondsLeft: REST_DURATION });
  }, [clearTimer]);

  useEffect(() => () => clearTimer(), [clearTimer]);

  return {
    activeExerciseId: timer.exerciseId,
    secondsLeft: timer.secondsLeft,
    totalSeconds: REST_DURATION,
    startTimer,
    skipTimer,
  };
}
