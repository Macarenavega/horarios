import type { TabId } from '../types';

interface Tab {
  id: TabId;
  label: string;
  badge?: string;
}

interface TabNavProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
  completedExercises: number;
  totalExercises: number;
}

export function TabNav({ activeTab, onTabChange, completedExercises, totalExercises }: TabNavProps) {
  const tabs: Tab[] = [
    { id: 'calentamiento', label: 'Calentamiento' },
    {
      id: 'circuito',
      label: 'Circuito',
      badge: `${completedExercises}/${totalExercises}`,
    },
    { id: 'vuelta', label: 'Vuelta a la calma' },
  ];

  return (
    <nav style={{ background: 'var(--c-surface)', borderBottom: '1px solid var(--c-border)' }}
      className="sticky top-[58px] z-30 px-3 py-2 flex gap-1.5">
      {tabs.map(tab => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className="flex-1 flex items-center justify-center gap-1.5 rounded-full py-2 px-2 text-xs font-medium transition-all duration-200"
            style={{
              fontFamily: 'Inter, sans-serif',
              minHeight: '44px',
              background: isActive ? 'var(--c-accent-dim)' : 'transparent',
              color: isActive ? 'var(--c-accent)' : 'var(--c-muted)',
              border: isActive ? '1px solid rgba(167,139,250,0.35)' : '1px solid transparent',
              fontWeight: isActive ? 600 : 400,
            }}
          >
            <span className="truncate">{tab.label}</span>
            {tab.badge && (
              <span
                className="rounded-full px-1.5 py-0.5 text-[10px] font-bold tabular-nums"
                style={{
                  background: isActive ? 'var(--c-accent)' : 'var(--c-border)',
                  color: isActive ? 'var(--c-accent-text)' : 'var(--c-muted)',
                  lineHeight: 1,
                  minWidth: '28px',
                  textAlign: 'center',
                }}>
                {tab.badge}
              </span>
            )}
          </button>
        );
      })}
    </nav>
  );
}
