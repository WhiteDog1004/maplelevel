'use server';

import { createServerSupabaseClient } from '@/supabase/server';
import { PostgrestError } from '@supabase/postgrest-js';

interface PostLikeProps {
  postUuid: string;
  userUuid: string;
}

interface GetLikeCountProps {
  postUuid: string;
}

const handleError = (error: PostgrestError | null) => {
  if (error) {
    throw error;
  }
};

export const getLikeCount = async ({ postUuid }: GetLikeCountProps) => {
  const supabase = await createServerSupabaseClient();

  const { count, error } = await supabase
    .from('likes')
    .select('user_uuid', { count: 'exact', head: true })
    .eq('post_uuid', postUuid);

  if (error) return 'error';

  return count;
};

export const postLike = async ({ postUuid, userUuid }: PostLikeProps) => {
  const supabase = await createServerSupabaseClient();

  const { data } = await supabase
    .from('likes')
    .select('id')
    .eq('post_uuid', postUuid)
    .eq('user_uuid', userUuid)
    .single();

  if (!data) {
    const { data: success, error } = await supabase
      .from('likes')
      .insert({ post_uuid: postUuid, user_uuid: userUuid });

    handleError(error);

    return success;
  }
  return 'duplicate';
};
