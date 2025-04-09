'use server';

import { createServerSupabaseAdminClient } from '@/supabase/server';

export const getAdmin = async () => {
  const supabase = await createServerSupabaseAdminClient();

  const { error } = await supabase.auth.admin.updateUserById(
    process.env.WOLFDOG_USER_ID?.toString() || '',
    {
      user_metadata: {
        role: 'admin',
      },
    }
  );

  if (error) {
    console.error('어드민 부여 실패:', error);
  } else {
    console.log('🎉 어드민 권한 부여 완료');
  }
};
