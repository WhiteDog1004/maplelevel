'use server';

import { createServerSupabaseClient } from '@/supabase/server';
import { SearchInfoTypes, WriteValueOptions } from '@/types/common';
import { UserType } from '@/types_db';
import { PostgrestError } from '@supabase/postgrest-js';

const handleError = (error: PostgrestError | null) => {
  if (error) {
    throw error;
  }
};

export const getLists = async (searchParams: SearchInfoTypes) => {
  const supabase = await createServerSupabaseClient();

  let queryBuilder = supabase.from('recommend-list').select('*');

  if (searchParams?.job) {
    queryBuilder = queryBuilder.eq('job', searchParams?.job);
  }

  if (searchParams?.level) {
    const level = Number(searchParams.level);
    if (!isNaN(level)) {
      const { data, error } = await queryBuilder;

      if (error) {
        return handleError(error);
      }

      let filteredData = data.filter((item) => {
        return item.map_data.some((map) => {
          const minLevel = map.level.min;
          const maxLevel = map.level.max;

          return level >= (minLevel || 0) && level <= (maxLevel || 0);
        });
      });

      if (searchParams?.type) {
        const type = searchParams.type;
        filteredData = filteredData.filter((item) => {
          if (type === 'all') return true;
          return item.hunt_type === type;
        });
      }

      return filteredData;
    }
  }

  queryBuilder = queryBuilder.order('created_at', { ascending: false });

  const { data, error } = await queryBuilder;

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
