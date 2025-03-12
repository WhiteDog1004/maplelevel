'use server';

import { createServerSupabaseClient } from '@/supabase/server';
import { WriteValueOptions } from '@/types/common';
import { UserType } from '@/types_db';
import { PostgrestError } from '@supabase/postgrest-js';

const handleError = (error: PostgrestError | null) => {
  if (error) {
    throw error;
  }
};

export const getLists = async () => {
  const supabase = await createServerSupabaseClient();

  const { data, error } = await supabase
    .from('recommend-list')
    .select('*')
    .order('like', { ascending: false });

  handleError(error);

  return data;
};

export const createLists = async (list: WriteValueOptions, user: UserType) => {
  const supabase = await createServerSupabaseClient();

  const { data, error } = await supabase.from('recommend-list').insert({
    title: list.title || '',
    hunt_type: list.huntType,
    job: list.job || '',
    map_data:
      list.options?.map((option) => ({
        level: {
          min: option.minLevel,
          max: option.maxLevel,
        },
        map: option.mapCode,
        partyType: option.partyType,
        caption: option.caption,
      })) ?? [],
    user: {
      uuid: user.uuid,
      nickname: user.nickname || undefined,
    },
  });

  handleError(error);

  return data;
};
