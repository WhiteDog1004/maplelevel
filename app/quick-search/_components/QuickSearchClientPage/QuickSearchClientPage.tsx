'use client';

import { Stack } from '@mui/material';
import { Suspense, useState } from 'react';
import { ResultJobsBox } from '../ResultJobsBox';
import { SearchMapCard } from '../SearchMapCard';

export const QuickSearchClientPage = () => {
  const [mapCode, setMapCode] = useState('');
  return (
    <Stack px={2} gap={2} maxWidth={520} width='100%'>
      <Suspense>
        <SearchMapCard setMapCode={setMapCode} />
      </Suspense>
      <ResultJobsBox mapCode={mapCode} />
    </Stack>
  );
};
