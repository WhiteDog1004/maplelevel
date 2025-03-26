import { Loading } from '@/app/_components/Loading';
import { useWriteStore } from '@/store/useWriteValueStore';
import { Box, Card, Typography } from '@mui/material';
import { useQueries, useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { RecommendMapProps } from '../../_types/add';

interface SelectMobProps {
  recommendMap: RecommendMapProps['recommendMap'];
  id: number;
}

export const SelectMob = ({ recommendMap, id }: SelectMobProps) => {
  const { writeValues, setWriteValues } = useWriteStore();
  const [mobs, setMobs] = useState<number[]>([]);

  const { data: getMap, isLoading } = useQuery({
    queryKey: ['selectmap', recommendMap.code],
    queryFn: async () => {
      const response = await fetch(
        `https://maplestory.io/api/${recommendMap.isJms ? 'jms/393' : 'gms/62'}/map/${
          recommendMap.code
        }`
      );

      return response.json();
    },
    enabled: !!recommendMap.code,
  });

  const queries = useQueries({
    queries: mobs.map((mob) => ({
      enabled: mobs.length > 0,
      queryKey: ['getmob', mob],
      queryFn: async () => {
        const response = await fetch(
          `https://maplestory.io/api/${recommendMap.isJms ? 'jms/393' : 'gms/62'}/mob/${mob}/icon`
        );

        if (!response.ok) {
          return '/images/husky/cry_0.png';
        }

        return response.url;
      },
    })),
  });
  useEffect(() => {
    setMobs([]);
    if (!getMap) return;

    setMobs(Array.from(new Set(getMap.mobs.map((mob: { id: string }) => mob.id))));
  }, [getMap, recommendMap]);

  useEffect(() => {
    if (mobs.length === 0) return;

    setWriteValues({
      ...writeValues,
      options: writeValues.options?.map((option, index) =>
        id === index ? { ...option, mobs } : option
      ),
    });
  }, [mobs]);

  return (
    mobs.length > 0 && (
      <Box className='flex flex-col gap-1'>
        <Typography color='textDisabled'>등장 몬스터</Typography>
        <Card variant='outlined'>
          {recommendMap.code ? (
            <Box className='grid grid-cols-[repeat(auto-fit,minmax(80px,1fr))] justify-items-center gap-1 px-1 py-3 max-h-40 overflow-y-auto'>
              {queries.map((mob, index) => (
                <Box className='w-max h-max m-h-16 max-w-16' key={index}>
                  {mob.isLoading || isLoading ? (
                    <Loading />
                  ) : (
                    <Image
                      className='h-16 object-contain'
                      width={48}
                      height={48}
                      src={mob.data as string}
                      alt='mob'
                    />
                  )}
                </Box>
              ))}
            </Box>
          ) : (
            <Typography>{recommendMap.code}</Typography>
          )}
        </Card>
      </Box>
    )
  );
};
