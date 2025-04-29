'use server';

import { createServerSupabaseClient } from '@/supabase/server';
import type { PostgrestError } from '@supabase/postgrest-js';

const handleError = (error: PostgrestError | null) => {
  if (error) {
    throw error;
  }
};

export const getNotice = async () => {
  const supabase = await createServerSupabaseClient();

  const { data, error } = await supabase.from('notice').select('*');

  handleError(error);

  return data;
};

export const getDetailNotice = async (uuid: string) => {
  const supabase = await createServerSupabaseClient();

  const { data, error } = await supabase.from('notice').select('*').eq('uuid', uuid).single();

  handleError(error);

  return data;
};
