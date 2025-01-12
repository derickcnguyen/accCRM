import React, { useEffect } from 'react';
import { SortAsc, SortDesc } from 'lucide-react';
import { useSettingsStore } from '../../store/settingsStore';
import { useContactStore } from '../../store/contactStore';

export function SortButton() {
  const { sortOrder, toggleSortOrder } = useSettingsStore();
  const { sortContacts } = useContactStore();

  // Re-sort contacts when sort order changes
  useEffect(() => {
    sortContacts();
  }, [sortOrder, sortContacts]);

  return (
    <button
      onClick={toggleSortOrder}
      className="bg-white border-4 border-black px-4 py-2 font-bold flex items-center gap-2 hover:translate-x-1 hover:translate-y-1 active:translate-x-0 active:translate-y-0 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
      title={`Sort by ${sortOrder === 'asc' ? 'oldest' : 'newest'} first`}
    >
      {sortOrder === 'asc' ? <SortAsc size={20} /> : <SortDesc size={20} />}
      {sortOrder === 'asc' ? 'Oldest First' : 'Newest First'}
    </button>
  );
}