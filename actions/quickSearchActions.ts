'use client';

import { createBrowserSupabaseClient } from '@/supabase/client';
import type { MapDataType } from '@/types_db';
import type { PostgrestError } from '@supabase/postgrest-js';

const handleError = (error: PostgrestError | null) => {
  if (error) {
    throw error;
  }
};

export const getQuickSearchDatas = async (map: string) => {
  const supabase = await createBrowserSupabaseClient();

  const mapCode = Number(map);

  if (mapCode) {
    const { data, error } = await supabase
      .from('recommend-list')
      .select('*')
      .filter('map_data', 'cs', JSON.stringify([{ map: mapCode }]));

    handleError(error);

    let filtered: typeof data | undefined;
    filtered = data?.map((code) => {
      const idx = code.map_data.findIndex((result: MapDataType) => result.map === Number(map));
      const resultData = { ...code, map_data: [code.map_data[idx]] };

      return resultData;
    });

    if (!filtered) throw new Error('No data returned from the database');

    return filtered;
  }
};
