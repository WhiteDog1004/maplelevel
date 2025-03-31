import { Loading } from '@/app/_components/Loading';
import { useMapIcon, useMinimap, useMobs } from '@/hooks/api';
import { MAP_CODE } from '@/utils/mapCode';
import { Avatar, Box, Button, Card, CardMedia, Skeleton, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

interface DetailContentGetMapProps {
  code: number;
  mobs: number[];
}

export const DetailContentGetMap = ({ code, mobs }: DetailContentGetMapProps) => {
  const { data, error, isPending, refetch } = useMinimap({
    code,
    uuid: code.toString(),
  });

  const { data: mapIcon, isLoading } = useMapIcon({
    code,
    uuid: code.toString(),
    enabled: !!data,
  });

  const queries = useMobs({
    mobs,
    code,
  });

  return (
    <Card elevation={4} className='w-full sm:max-w-80 p-4'>
      {isPending ? (
        <Box className='flex justify-center items-center h-full'>
          <Loading />
        </Box>
      ) : (
        <>
          {error ? (
            <Box className='flex flex-col gap-1 w-full h-full justify-center items-center'>
              <CardMedia
                sx={{ width: '100%', height: 37, backgroundSize: 'contain' }}
                image={'/images/husky/cry_0.png'}
              />
              <Typography>불러오지 못했어요..</Typography>
              <Button variant='outlined' onClick={() => refetch()}>
                다시 불러오기
              </Button>
            </Box>
          ) : (
            <CardMedia
              sx={{ width: 'auto', height: 140, backgroundSize: 'contain' }}
              image={data.url}
            />
          )}
          {data && (
            <Box className='flex flex-col gap-4 py-4 '>
              <Box className='flex flex-row items-center gap-2'>
                {mapIcon ? (
                  <Avatar variant='rounded' src={mapIcon.url} />
                ) : isLoading ? (
                  <Skeleton variant='rounded' animation='wave' width={40} height={40} />
                ) : (
                  <Box width={40} height={40} />
                )}
                <Box className='flex flex-col'>
                  <Typography variant='caption' color='textDisabled'>
                    {MAP_CODE.filter((map) => map.code === code)[0]?.kor.split(':')[0]}
                  </Typography>
                  <Typography color='textSecondary'>
                    {MAP_CODE.filter((map) => map.code === code)[0]?.kor.split(':')[1]}
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Typography variant='body2' color='textSecondary'>
                  등장 몬스터
                </Typography>
                <Box className='grid grid-cols-[repeat(3,1fr)] justify-items-center gap-1 max-h-40 overflow-y-auto'>
                  {mobs.length > 0 &&
                    queries.map((mob, index) => (
                      <Box className='w-max h-max m-h-16 max-w-16' key={index}>
                        {mob.isLoading || isLoading ? (
                          <Loading />
                        ) : (
                          <Link
                            href={`https://mapledb.kr/search.php?q=${
                              mob.data?.split('mob/')[1].split('/')[0]
                            }&t=mob`}
                            target='_blank'
                          >
                            <Image
                              onClick={() => console.log(mob.data?.split('mob/')[1])}
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
                </Box>
              </Box>
            </Box>
          )}
        </>
      )}
    </Card>
  );
};
