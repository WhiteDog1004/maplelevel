import { createServerSupabaseClient } from '@/supabase/server';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const supabase = await createServerSupabaseClient();
  const { data: posts } = await supabase.from('recommend-list').select('uuid, created_at');

  if (!posts) return [];

  return [
    {
      url: 'https://www.maplelevel.gg',
      lastModified: new Date().toISOString(),
    },
    {
      url: 'https://www.maplelevel.gg/notice',
      lastModified: new Date().toISOString(),
    },
    {
      url: 'https://www.maplelevel.gg/list',
      lastModified: new Date().toISOString(),
    },
    ...posts.map((post) => ({
      url: `https://www.maplelevel.gg/list/${post.uuid}`,
      lastModified: post.created_at,
    })),
  ];
}
