import { useContext } from 'react';
import { SupabaseContext } from '../contexts/SupabaseContext';

export function useSupabase() {
  const context = useContext(SupabaseContext);
  
  if (context === undefined) {
    throw new Error('useSupabase must be used within a SupabaseProvider');
  }
  
  return context.supabase;
}