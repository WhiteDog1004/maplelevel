'use client';

import { Stack } from '@mui/material';
import { useState } from 'react';
import { ResultJobsBox } from '../ResultJobsBox';
import { SearchMapCard } from '../SearchMapCard';

export const QuickSearchClientPage = () => {
  const [mapCode, setMapCode] = useState('');
  return (
    <Stack px={2} gap={2} width='max-content'>
      <SearchMapCard setMapCode={setMapCode} />
      <ResultJobsBox mapCode={mapCode} />
    </Stack>
  );
};
