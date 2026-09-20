interface HeaderProps {
  completedExercises: number;
  totalSetsCompleted: number;
  totalSets: number;
  totalExercises: number;
}

export function Header({ completedExercises, totalSetsCompleted, totalSets, totalExercises }: HeaderProps) {
  const progress = totalSets > 0 ? totalSetsCompleted / totalSets : 0;

  return (
    <header style={{ background: 'var(--c-surface)', borderBottom: '1px solid var(--c-border)' }}
      className="sticky top-0 z-40">
      <div className="px-4 pt-4 pb-2 flex items-center justify-between">
        <h1 className="font-display text-xl font-bold" style={{ color: 'var(--c-text)', letterSpacing: '-0.3px' }}>
          Tu Rutina
        </h1>
        <span className="text-xs font-medium tabular-nums"
          style={{ color: 'var(--c-accent)', fontFamily: 'Inter, sans-serif', letterSpacing: '0.02em' }}>
          {completedExercises} / {totalExercises} ejercicios
        </span>
      </div>
      {/* Progress bar */}
      <div style={{ background: 'var(--c-border)', height: '3px', width: '100%' }}>
        <div
          style={{
            height: '100%',
            width: `${progress * 100}%`,
            background: 'linear-gradient(90deg, var(--c-accent), #C4B5FD)',
            transition: 'width 0.5s cubic-bezier(0.4,0,0.2,1)',
            borderRadius: '0 2px 2px 0',
          }}
        />
      </div>
    </header>
  );
}
