'use client';

import { useDiscordStore } from '@/store/useDiscordStore';
import { createBrowserSupabaseClient } from '@/supabase/client';
import { useEffect } from 'react';

export const SuccessClientPage = () => {
  const supabase = createBrowserSupabaseClient();
  const { setUser } = useDiscordStore();

  useEffect(() => {
    async function getUserData() {
      const { data } = await supabase.auth.getSession();
      if (data.session?.user) {
        setUser(data.session.user);
      } else {
        setUser(null);
      }
      window.location.href = '/';
    }
    getUserData();
  }, []);

  return null;
};
