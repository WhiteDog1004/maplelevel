'use server';

import { createServerSupabaseClient } from '@/supabase/server';
import type { Database } from '@/types_db';
import { MYPAGE_PAGE_SIZE } from '@/utils/pageSize';
import type { PostgrestError } from '@supabase/postgrest-js';

const handleError = (error: PostgrestError | null) => {
  if (error) {
    throw error;
  }
};

export const getMyLists = async (
  page: string
): Promise<{
  data: Database['public']['Tables']['recommend-list']['Row'][];
  count: number | null;
}> => {
  const supabase = await createServerSupabaseClient();
  const offset = ((Number(page) || 1) - 1) * MYPAGE_PAGE_SIZE;

  const {
    data: { user },
    error: sessionError,
  } = await supabase.auth.getUser();

  if (sessionError) {
    throw sessionError;
  }

  const { data, error, count } = await supabase
    .from('recommend-list')
    .select('*', { count: 'exact' })
    .eq('writer_uuid', user?.id)
    .order('created_at', { ascending: false });

  handleError(error);

  if (!data) {
    throw new Error('No data returned from the database');
  }

  return {
    data:
      data.filter((_, index) => offset <= index && offset + MYPAGE_PAGE_SIZE - 1 >= index) ?? [],
    count,
  };
};

export const getMyLikeLists = async (
  page: string
): Promise<{
  data: Database['public']['Tables']['recommend-list']['Row'][];
  count: number | null;
}> => {
  const supabase = await createServerSupabaseClient();
  const offset = ((Number(page) || 1) - 1) * MYPAGE_PAGE_SIZE;

  const {
    data: { user },
    error: sessionError,
  } = await supabase.auth.getUser();

  if (sessionError) {
    throw sessionError;
  }

  const { data, error, count } = await supabase
    .from('likes')
    .select('*', { count: 'exact' })
    .eq('user_uuid', user?.user_metadata.provider_id)
    .order('created_at', { ascending: false });

  handleError(error);

  if (!data) {
    throw new Error('No data returned from the database');
  }

  const postUuids = data.map((item) => item.post_uuid);

  const {
    data: list,
    error: listError,
    count: listCount,
  } = await supabase.from('recommend-list').select('*', { count: 'exact' }).in('uuid', postUuids);

  handleError(listError);

  if (!list) {
    throw new Error('No data returned from the database');
  }

  const sortedList = postUuids
    .map((uuid) => list.find((post) => post.uuid === uuid))
    .filter(Boolean);

  return {
    data:
      sortedList.filter((_, index) => offset <= index && offset + MYPAGE_PAGE_SIZE - 1 >= index) ??
      [],
    count: listCount,
  };
};
