import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SettingsStore {
  sortOrder: 'asc' | 'desc';
  toggleSortOrder: () => void;
}

export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      sortOrder: 'asc',
      toggleSortOrder: () => set((state) => ({ 
        sortOrder: state.sortOrder === 'asc' ? 'desc' : 'asc' 
      })),
    }),
    {
      name: 'settings-storage',
    }
  )
);