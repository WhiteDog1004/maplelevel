'use server';

import { createServerSupabaseClient } from '@/supabase/server';
import { SearchInfoTypes, WriteValueOptions } from '@/types/common';
import { Database, UserType } from '@/types_db';
import { PAGE_SIZE } from '@/utils/pageSize';
import { PostgrestError } from '@supabase/postgrest-js';

const handleError = (error: PostgrestError | null) => {
  if (error) {
    throw error;
  }
};

export const getLists = async (
  searchParams: SearchInfoTypes
): Promise<{ data: Database['public']['Tables']['recommend-list']['Row'][]; count: number }> => {
  const supabase = await createServerSupabaseClient();

  const offset = ((searchParams.page || 1) - 1) * PAGE_SIZE;

  let queryBuilder = supabase.from('recommend-list').select('*', { count: 'exact' });

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

  if (searchParams.sort) {
    queryBuilder = queryBuilder
      .order('like', { ascending: false, nullsFirst: false })
      .order('created_at', { ascending: false });
  } else {
    queryBuilder = queryBuilder.order('created_at', { ascending: false });
  }

  if (searchParams.level) {
    const level = Number(searchParams.level);

    if (!isNaN(level)) {
      const { data, error } = await queryBuilder;

      handleError(error);

      const filteredData = data?.filter((item) => {
        return item.map_data.some((map) => {
          const minLevel = map.level.min;
          const maxLevel = map.level.max;

          return level >= (minLevel || 0) && level <= (maxLevel || 0);
        });
      });

      return {
        data:
          filteredData?.filter((_, index) => offset <= index && offset + PAGE_SIZE - 1 >= index) ??
          [],
        count: filteredData?.length ?? 0,
      };
    }
  }

  const { data, count, error } = await queryBuilder.range(offset, offset + PAGE_SIZE - 1);

  handleError(error);

  return { data: data ?? [], count: count ?? 0 };
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
        mobs: option.mobs,
        uuid: option.uuid,
      })) ?? [],
    user: {
      uuid: user.uuid,
      nickname: user.nickname || undefined,
    },
  });

  handleError(error);

  return data;
};

export const getDetailList = async (uuid: string) => {
  const supabase = await createServerSupabaseClient();

  const { data, error } = await supabase
    .from('recommend-list')
    .select('*')
    .eq('uuid', uuid)
    .single();

  handleError(error);

  return data;
};
