import { Loading } from '@/app/_components/Loading';
import { useMapIcon, useMinimap } from '@/hooks/api';
import type { SearchInfoTypes } from '@/types/common';
import { MAP_CODE } from '@/utils/mapCode';
import { AddCircle } from '@mui/icons-material';
import {
  Autocomplete,
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  Modal,
  Paper,
  Skeleton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import { type SyntheticEvent, useEffect, useState } from 'react';
import type { UseFormSetValue } from 'react-hook-form';

interface MapSearchProps {
  isResetting: boolean;
  setValue: UseFormSetValue<SearchInfoTypes>;
}

export const MapSearch = ({ setValue, isResetting }: MapSearchProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectMap, setSelectMap] = useState('');
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const { data: minimap, isLoading } = useMinimap({
    code: MAP_CODE.filter((map) => map.kor.includes(selectMap))[0]?.code,
    uuid: selectMap,
    enabled: !!selectMap && !!search,
  });

  const { data: mapIcon, isLoading: iconLoading } = useMapIcon({
    code: MAP_CODE.filter((map) => map.kor.includes(selectMap))[0]?.code,
    uuid: MAP_CODE.filter((map) => map.kor.includes(selectMap))[0]?.code.toString(),
    enabled: !!minimap,
  });

  const handleModal = () => {
    if (isOpen) return setIsOpen(false);
    return setIsOpen(true);
  };

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
    if (isResetting) {
      setSelectMap('');
      setSearch('');
      setSuggestions([]);
    }
  }, [isResetting]);

  return (
    <>
      <Card>
        <CardActionArea
          className='group relative w-full h-max flex flex-col justify-center items-center gap-2 px-6 py-4'
          onClick={handleModal}
        >
          {minimap ? (
            <Box className='relative w-full max-h-40 min-h-40 flex flex-col gap-4 justify-center items-center'>
              <Image
                className='object-contain h-32'
                width={160}
                height={160}
                objectFit='contain'
                unoptimized
                alt={'select_map'}
                src={minimap.url}
              />
            </Box>
          ) : (
            <div className='flex flex-col justify-center items-center gap-2 min-h-40'>
              <AddCircle className='text-zinc-600' />
              <Typography variant='caption' color='textDisabled'>
                맵 선택
              </Typography>
            </div>
          )}
        </CardActionArea>
      </Card>
      {selectMap && (
        <Stack mt={1} direction='row'>
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
                      map.code === MAP_CODE.filter((map) => map.kor.includes(selectMap))[0]?.code
                  )[0]?.kor.split(':')[0]}
              </Typography>
              <Typography color='textSecondary'>
                {selectMap && MAP_CODE.filter((map) => map.kor.includes(selectMap))[0]?.kor}
              </Typography>
            </Box>
          </Box>
        </Stack>
      )}

      <Modal open={isOpen} onClose={handleModal}>
        <Card
          variant='outlined'
          className='flex flex-col dark:bg-zinc-800 gap-4 p-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        >
          <Stack width={240}>
            <Autocomplete
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
                  label='사냥터'
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
              getOptionLabel={(option) => option.split(':')[1]?.trimStart() || option}
              options={suggestions}
            />
          </Stack>
          <Box>
            <Box className='w-full h-40 relative flex flex-col gap-4 justify-center items-center mb-4'>
              {minimap && selectMap ? (
                <Image fill objectFit='contain' unoptimized alt={'select_map'} src={minimap.url} />
              ) : (
                <Box>
                  {isLoading ? (
                    <Loading />
                  ) : (
                    <Typography variant='caption' color='textDisabled'>
                      맵을 선택해 주세요
                    </Typography>
                  )}
                </Box>
              )}
            </Box>
            <Button
              fullWidth
              variant='outlined'
              color='success'
              disabled={!minimap}
              onClick={() => {
                if (!minimap) return;
                setSearch('');
                handleModal();
                setValue(
                  'map',
                  String(MAP_CODE.filter((map) => map.kor.includes(search))[0]?.code)
                );
              }}
            >
              선택
            </Button>
          </Box>
        </Card>
      </Modal>
    </>
  );
};
