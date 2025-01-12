import { create } from 'zustand';
import type { Contact } from '../types';
import { createSupabaseClient } from '../lib/supabase';
import { useSettingsStore } from './settingsStore';

const supabase = createSupabaseClient();

interface ContactStore {
  contacts: Contact[];
  loading: boolean;
  error: string | null;
  fetchContacts: () => Promise<void>;
  addContact: (contact: Omit<Contact, 'id' | 'created_at' | 'user_id'>) => Promise<void>;
  updateContact: (id: string, contact: Partial<Omit<Contact, 'user_id'>>) => Promise<void>;
  deleteContact: (id: string) => Promise<void>;
  sortContacts: () => void; // Add new method to sort contacts
}

const sortContactsByDate = (contacts: Contact[], sortOrder: 'asc' | 'desc') => {
  return [...contacts].sort((a, b) => {
    if (!a.last_contacted) return sortOrder === 'asc' ? -1 : 1;
    if (!b.last_contacted) return sortOrder === 'asc' ? 1 : -1;
    const comparison = new Date(a.last_contacted).getTime() - new Date(b.last_contacted).getTime();
    return sortOrder === 'asc' ? comparison : -comparison;
  });
};

export const useContactStore = create<ContactStore>((set, get) => ({
  contacts: [],
  loading: false,
  error: null,

  sortContacts: () => {
    const sortOrder = useSettingsStore.getState().sortOrder;
    const contacts = get().contacts;
    set({ contacts: sortContactsByDate(contacts, sortOrder) });
  },

  fetchContacts: async () => {
    if (!supabase) return;
    
    set({ loading: true });
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('Please sign in to view contacts');

      const { data, error } = await supabase
        .from('contacts')
        .select('*')
        .eq('user_id', user.id);

      if (error) throw error;
      const sortOrder = useSettingsStore.getState().sortOrder;
      set({ contacts: sortContactsByDate(data, sortOrder), error: null });
    } catch (error) {
      set({ error: (error as Error).message });
    } finally {
      set({ loading: false });
    }
  },

  addContact: async (contact) => {
    if (!supabase) return;
    
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('Please sign in to add contacts');

      const { error, data } = await supabase
        .from('contacts')
        .insert([{ ...contact, user_id: user.id }])
        .select()
        .single();

      if (error) throw error;
      const sortOrder = useSettingsStore.getState().sortOrder;
      set((state) => ({ 
        contacts: sortContactsByDate([...state.contacts, data], sortOrder)
      }));
    } catch (error) {
      set({ error: (error as Error).message });
    }
  },

  updateContact: async (id, contact) => {
    if (!supabase) return;
    
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('Please sign in to update contacts');

      const { error, data } = await supabase
        .from('contacts')
        .update(contact)
        .eq('id', id)
        .eq('user_id', user.id)
        .select()
        .single();

      if (error) throw error;
      const sortOrder = useSettingsStore.getState().sortOrder;
      set((state) => ({
        contacts: sortContactsByDate(
          state.contacts.map((c) => (c.id === id ? data : c)),
          sortOrder
        ),
      }));
    } catch (error) {
      set({ error: (error as Error).message });
    }
  },

  deleteContact: async (id) => {
    if (!supabase) return;
    
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('Please sign in to delete contacts');

      const { error } = await supabase
        .from('contacts')
        .delete()
        .eq('id', id)
        .eq('user_id', user.id);

      if (error) throw error;
      set((state) => ({
        contacts: state.contacts.filter((c) => c.id !== id),
      }));
    } catch (error) {
      set({ error: (error as Error).message });
    }
  },
}));