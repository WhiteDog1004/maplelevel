import { ErrorCard } from '@/app/_components/ErrorCard';
import { Loading } from '@/app/_components/Loading';
import { useMapIcon, useMinimap } from '@/hooks/api';
import { MAP_CODE } from '@/utils/mapCode';
import { SITE_MAP } from '@/utils/sitemap';
import {
  Autocomplete,
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  Paper,
  Skeleton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  type Dispatch,
  type SetStateAction,
  type SyntheticEvent,
  useEffect,
  useState,
} from 'react';
import { SelectedMobs } from '../SelectedMobs';

interface SearchMapCardProps {
  setMapCode: Dispatch<SetStateAction<string>>;
}

export const SearchMapCard = ({ setMapCode }: SearchMapCardProps) => {
  const router = useRouter();
  const params = useSearchParams();
  const [selectMap, setSelectMap] = useState('');
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const {
    data: minimap,
    isLoading,
    isError,
  } = useMinimap({
    code: MAP_CODE.filter((map) => map.kor.includes(selectMap))[0]?.code,
    uuid: selectMap,
    enabled: !!selectMap && !!search,
  });

  const { data: mapIcon, isLoading: iconLoading } = useMapIcon({
    code: MAP_CODE.filter((map) => map.kor.includes(selectMap))[0]?.code,
    uuid: MAP_CODE.filter((map) => map.kor.includes(selectMap))[0]?.code.toString(),
    enabled: !!minimap,
  });

  const handleInputChange = (e: SyntheticEvent<Element, Event>, value: string) => {
    setSearch(value);
  };

  useEffect(() => {
    if (search) {
      const queryArray = search.split('');

      const filteredSuggestions = MAP_CODE.filter((item) => {
        const itemLabel = item.kor.split(':')[1]?.trimStart() || item.kor;
        const itemArray = itemLabel.split('');
        return queryArray.every((char) => itemArray.includes(char));
      });

      setSuggestions([...new Set(filteredSuggestions.map((item) => item.kor))]);
    } else {
      setSuggestions([]);
    }
  }, [search]);

  useEffect(() => {
    if (!params.get('map')) {
      setMapCode('');
    }
    if (!selectMap) return;
    router.replace(
      `${SITE_MAP.QUICK_SEARCH}?map=${String(
        MAP_CODE.filter((map) => map.kor.includes(selectMap))[0]?.code
      )}`
    );
  }, [selectMap]);

  useEffect(() => {
    if (params.get('map')) {
      const map = MAP_CODE.find((map) => String(map.code) === params.get('map'));
      if (map) {
        setTimeout(() => {
          setMapCode(params.get('map') || '');
          setSearch(map.kor.split(':')[1]?.trimStart() || '');
          setSelectMap(map.kor?.split(':')[1]?.trimStart() || '');
        }, 0);
      }
    }
  }, [params]);

  return (
    <Card sx={{ p: 2 }} className='w-full'>
      <Box className='relative w-full h-max min-h-40 flex flex-col gap-4 justify-center items-center'>
        {isError ? (
          <ErrorCard />
        ) : minimap ? (
          <Box className='relative w-full h-max min-h-40 md:min-h-60 flex flex-col gap-4 justify-center items-center'>
            <Image
              className='object-contain h-60'
              width={240}
              height={240}
              objectFit='contain'
              unoptimized
              alt={'select_map'}
              src={minimap.url}
            />
          </Box>
        ) : isLoading ? (
          <Loading />
        ) : (
          <Box className='flex flex-col justify-center items-center gap-2 min-h-40 md:min-h-60'>
            <Image width={44} height={37} src={'/images/husky/chat_4.png'} alt='husky' />
            <Typography variant='caption' color='textDisabled'>
              맵을 선택하지 않았어요.
            </Typography>
          </Box>
        )}
      </Box>
      <CardContent>
        {selectMap ? (
          <Stack gap={1}>
            <Stack my={1} direction='row'>
              <Box className='flex flex-row items-center gap-2'>
                {mapIcon ? (
                  <Avatar variant='rounded' src={mapIcon.url} />
                ) : iconLoading ? (
                  <Skeleton variant='rounded' animation='wave' width={40} height={40} />
                ) : (
                  <Paper sx={{ width: 40, height: 40 }} />
                )}
                <Box className='flex flex-col'>
                  <Typography variant='caption' color='textDisabled'>
                    {selectMap &&
                      MAP_CODE.filter(
                        (map) =>
                          map.code ===
                          MAP_CODE.filter((map) => map.kor.includes(selectMap))[0]?.code
                      )[0]?.kor.split(':')[0]}
                  </Typography>
                  <Typography color='textSecondary'>
                    {selectMap &&
                      MAP_CODE.filter((map) => map.kor.includes(selectMap))[0]?.kor.replace(
                        /\s*\[[^\]]*\]/g,
                        ''
                      )}
                  </Typography>
                </Box>
              </Box>
            </Stack>
            <SelectedMobs selectMap={selectMap} />
          </Stack>
        ) : (
          <>
            <Typography gutterBottom variant='h5' component='div'>
              빠른 검색
            </Typography>
            <Typography variant='body2' sx={{ color: 'text.secondary' }}>
              사냥터의 정보를 빠르게 알고 싶다면
              <br />
              빠른검색을 이용해 보세요!
            </Typography>
          </>
        )}
      </CardContent>
      <CardActions>
        <Autocomplete
          fullWidth
          freeSolo
          onInputChange={handleInputChange}
          filterOptions={(list) => {
            return list.filter((item) => {
              return item;
            });
          }}
          renderInput={(params) => (
            <TextField
              enterKeyHint='search'
              {...params}
              label='사냥터 검색'
              slotProps={{
                input: {
                  ...params.InputProps,
                },
              }}
            />
          )}
          onChange={(e, value) => {
            setSelectMap(value?.split(':')[1]?.trimStart() || '');
          }}
          groupBy={(option) => option.split(':')[0].trimEnd()}
          getOptionLabel={(option) => {
            const label = option.split(':')[1]?.trimStart() || option;
            return label.replace(/\s*\[[^\]]*\]/g, '');
          }}
          options={suggestions}
        />
      </CardActions>
    </Card>
  );
};
