'use client';

import { pageview } from '@/app/analytics/pageview';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function AnalyticsProvider() {
  const pathname = usePathname();

  useEffect(() => {
    pageview(pathname);
  }, [pathname]);

  return null;
}
