import { createServerSupabaseClient } from '@/supabase/server';

export async function GET(): Promise<Response> {
  const supabase = await createServerSupabaseClient();
  const { data: posts } = await supabase.from('recommend-list').select('uuid, created_at');

  if (!posts) return new Response('', { status: 500 });

  const urls = [
    {
      loc: 'https://www.maplelevel.gg',
      lastmod: new Date().toISOString(),
    },
    {
      loc: 'https://www.maplelevel.gg/notice',
      lastmod: new Date().toISOString(),
    },
    {
      loc: 'https://www.maplelevel.gg/list',
      lastmod: new Date().toISOString(),
    },
    ...posts.map((post) => ({
      loc: `https://www.maplelevel.gg/list/${post.uuid}`,
      lastmod: post.created_at,
    })),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (url) => `
      <url>
        <loc>${url.loc}</loc>
        <lastmod>${new Date(url.lastmod).toISOString()}</lastmod>
      </url>
    `
      )
      .join('')}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
