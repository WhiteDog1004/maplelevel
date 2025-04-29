'use server';

import { createServerSupabaseClient } from '@/supabase/server';
import type { MapDataType } from '@/types_db';
import type { PostgrestError } from '@supabase/postgrest-js';

type getPercentMapType = {
  level: { min: number; max: number };
  job: string;
  mapCode: number;
};

const handleError = (error: PostgrestError | null) => {
  if (error) {
    throw error;
  }
};

export const getPercentMap = async (params: getPercentMapType) => {
  const supabase = await createServerSupabaseClient();

  const { data, error } = await supabase
    .from('recommend-list')
    .select('map_data, job')
    .eq('job', params.job);

  handleError(error);

  if (!data) {
    throw new Error('No data returned from the database');
  }

  const filteredData = data?.filter((item) => {
    return item.map_data.some((map: MapDataType) => {
      const minLevel = map.level.min;
      const maxLevel = map.level.max;
      const averageLevel = (params.level.min + params.level.max) / 2;

      return (
        averageLevel >= (minLevel || 0) &&
        averageLevel <= (maxLevel || 0) &&
        map.map === params.mapCode
      );
    });
  });

  const total = data?.filter((item) => {
    return item.map_data.some((map: MapDataType) => {
      const minLevel = map.level.min;
      const maxLevel = map.level.max;
      const averageLevel = (params.level.min + params.level.max) / 2;

      return averageLevel >= (minLevel || 0) && averageLevel <= (maxLevel || 0);
    });
  });

  const percentage = Math.round((filteredData.length / total.length) * 100);

  return percentage;
};
