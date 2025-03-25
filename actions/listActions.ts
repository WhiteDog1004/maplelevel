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

  if (searchParams.title) {
    queryBuilder = queryBuilder.ilike('title', `%${searchParams?.title}%`);
  }

  if (searchParams.job) {
    queryBuilder = queryBuilder.eq('job', searchParams?.job);
  }

  if (searchParams.type && searchParams.type !== 'all') {
    queryBuilder = queryBuilder.or(`hunt_type.eq.all,hunt_type.eq.${searchParams.type}`);
  }

  if (searchParams.partyType && searchParams.partyType !== 'all') {
    queryBuilder = queryBuilder.filter(
      'map_data',
      'cs',
      JSON.stringify([{ partyType: searchParams.partyType }])
    );
  }

  if (searchParams.level) {
    const level = Number(searchParams.level);
    if (!isNaN(level)) {
      const { data, error } = await queryBuilder;

      if (error) {
        return handleError(error);
      }

      const filteredData = data.filter((item) => {
        return item.map_data.some((map) => {
          const minLevel = map.level.min;
          const maxLevel = map.level.max;

          return level >= (minLevel || 0) && level <= (maxLevel || 0);
        });
      });
      return filteredData;
    }
  }

  if (searchParams.sort) {
    queryBuilder = queryBuilder
      .order('like', { ascending: false, nullsFirst: false })
      .order('created_at', { ascending: false });
  } else {
    queryBuilder = queryBuilder.order('created_at', { ascending: false });
  }

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
