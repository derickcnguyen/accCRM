import React from 'react';
import { LogOut, Plus } from 'lucide-react';
import { useSupabase } from '../../hooks/useSupabase';
import { SortButton } from './SortButton';

interface HeaderProps {
  onAddContact: () => void;
}

export function Header({ onAddContact }: HeaderProps) {
  const supabase = useSupabase();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
      <div>
        <h1 className="text-5xl font-black transform -rotate-2 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-6 py-2">
          Acc-CRM
        </h1>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <SortButton />
        <button
          onClick={onAddContact}
          className="bg-green-300 border-4 border-black px-4 py-2 font-bold flex items-center gap-2 hover:translate-x-1 hover:translate-y-1 active:translate-x-0 active:translate-y-0 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          <Plus size={20} />
          Add Contact
        </button>
        <button
          onClick={handleSignOut}
          className="bg-red-300 border-4 border-black px-4 py-2 font-bold flex items-center gap-2 hover:translate-x-1 hover:translate-y-1 active:translate-x-0 active:translate-y-0 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          <LogOut size={20} />
          Sign Out
        </button>
      </div>
    </div>
  );
}