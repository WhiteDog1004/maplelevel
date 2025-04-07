import type { User } from '@supabase/supabase-js';
import { create } from 'zustand';

type UserStore = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const useDiscordStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
