import { NextResponse } from 'next/server';

export function GET() {
  return new NextResponse(
    `
User-agent: *
Allow: /
Disallow: /wolfdog/

Sitemap: https://www.maplelevel.gg/sitemap.xml
  `.trim(),
    {
      headers: {
        'Content-Type': 'text/plain',
      },
    }
  );
}
