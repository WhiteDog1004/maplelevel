import { Loading } from '@/app/_components/Loading';
import { useGetMap, useMobs } from '@/hooks/api';
import { MAP_CODE } from '@/utils/mapCode';
import { Box, Paper, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface SelectedMobsProps {
  selectMap: string;
}

export const SelectedMobs = ({ selectMap }: SelectedMobsProps) => {
  const [mobs, setMobs] = useState<number[]>([]);

  const { data: getMap } = useGetMap({
    code: MAP_CODE.filter((map) => map.kor.includes(selectMap))[0]?.code,
    enabled: !!selectMap,
  });

  const queries = useMobs({
    mobs: mobs || [],
    code: MAP_CODE.filter((map) => map.kor.includes(selectMap))[0]?.code || 0,
  });

  useEffect(() => {
    setMobs([]);
    if (!getMap) return;

    setMobs(Array.from(new Set(getMap.mobs.map((mob: { id: string }) => mob.id))));
  }, [getMap, selectMap]);

  return (
    mobs.length > 0 && (
      <Box className='w-full flex flex-col justify-start gap-2'>
        {selectMap && (
          <Box className='flex flex-col gap-1'>
            <Typography noWrap variant='body2' color='textSecondary'>
              등장 몬스터
            </Typography>
            <Paper
              variant='outlined'
              className={
                (mobs || []).length > 0
                  ? 'grid grid-cols-[repeat(3,1fr)] gap-y-4 justify-items-center gap-1 max-h-40 px-2 py-4 overflow-y-auto'
                  : 'flex flex-col gap-2 p-2'
              }
            >
              {(mobs || []).length > 0 ? (
                <>
                  {queries.map((mob, index) => (
                    <Box className='w-max h-max m-h-16 max-w-16' key={index}>
                      {mob.isLoading ? (
                        <Loading />
                      ) : (
                        <Link
                          href={`https://mapledb.kr/search.php?q=${
                            mob.data?.split('mob/')[1].split('/')[0]
                          }&t=mob`}
                          target='_blank'
                        >
                          <Image
                            className='h-16 object-contain'
                            width={64}
                            height={64}
                            src={mob.data as string}
                            alt='mob'
                          />
                        </Link>
                      )}
                    </Box>
                  ))}
                </>
              ) : (
                <Stack alignItems='center' gap={0.5}>
                  <Image width={140} height={58} src={'/images/die1_7.png'} alt='lycan' />
                  <Typography variant='caption' color='textSecondary'>
                    등장하는 몬스터가 없어요!
                  </Typography>
                </Stack>
              )}
            </Paper>
            <Box className='flex flex-col'>
              <Typography variant='caption' color='textSecondary'>
                몬스터를 클릭하면 정보를 확인할 수 있어요!
              </Typography>
              <Typography variant='caption' color='textDisabled'>
                src. 메랜디비
              </Typography>
            </Box>
          </Box>
        )}
      </Box>
    )
  );
};
