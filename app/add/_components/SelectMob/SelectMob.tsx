import { Loading } from '@/app/_components/Loading';
import { useWriteStore } from '@/store/useWriteValueStore';
import { RecommendMapProps } from '@/types/add';
import { Card, Typography } from '@mui/material';
import { useQueries, useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useEffect, useState } from 'react';

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
      const response = await fetch(`https://maplestory.io/api/gms/62/map/${recommendMap.code}`);

      return response.json();
    },
    enabled: !!recommendMap.code,
  });

  const queries = useQueries({
    queries: mobs.map((mob) => ({
      enabled: mobs.length > 0,
      queryKey: ['getmob', mob],
      queryFn: async () => {
        const response = await fetch(`https://maplestory.io/api/gms/62/mob/${mob}/icon`);

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

  console.log(writeValues);

  return (
    mobs.length > 0 && (
      <div className='flex flex-col gap-1'>
        <Typography>등장 몬스터</Typography>
        <Card variant='outlined'>
          {recommendMap.code ? (
            <div className='grid grid-cols-[repeat(auto-fit,minmax(80px,1fr))] justify-items-center gap-1 p-1 max-h-36 overflow-y-auto'>
              {queries.map((mob, index) => (
                <div className='w-max h-max m-h-16 max-w-16' key={index}>
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
                </div>
              ))}
            </div>
          ) : (
            <Typography>{recommendMap.code}</Typography>
          )}
        </Card>
      </div>
    )
  );
};
