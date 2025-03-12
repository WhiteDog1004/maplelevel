import { Loading } from '@/app/_components/Loading';
import { MAP_CODE } from '@/utils/mapCode';
import { AddCircle, Edit } from '@mui/icons-material';
import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardActionArea,
  Modal,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { SyntheticEvent, useEffect, useState } from 'react';
import { RecommendMapProps } from '../../_types/add';

interface SelectMapProps {
  recommendMap: RecommendMapProps['recommendMap'];
  setRecommendMap: RecommendMapProps['setRecommendMap'];
}

export const SelectMap = ({ recommendMap, setRecommendMap }: SelectMapProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectMap, setSelectMap] = useState('');
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleModal = () => {
    if (isOpen) return setIsOpen(false);
    return setIsOpen(true);
  };

  const { data: minimap, isLoading } = useQuery({
    queryKey: ['minimap', selectMap],
    queryFn: async () => {
      const response = await fetch(
        `https://maplestory.io/api/gms/62/map/${
          MAP_CODE.filter((map) => map.kor.includes(selectMap))[0].code
        }/minimap`
      );

      return response;
    },
    enabled: !!selectMap,
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

  return (
    <Card variant='outlined'>
      <CardActionArea
        className='group relative w-full flex flex-col justify-center items-center gap-2 px-6 py-4'
        onClick={handleModal}
      >
        {recommendMap.minimap && (
          <Box className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:visible invisible p-4 bg-zinc-600 bg-opacity-50 rounded-full z-10'>
            <Edit className='text-white' />
          </Box>
        )}
        {recommendMap.minimap ? (
          <Box className='relative w-full max-h-60 min-h-48 flex flex-col gap-4 justify-center items-center'>
            <Image
              className='object-contain h-60'
              width={200}
              height={200}
              objectFit='contain'
              unoptimized
              alt={'select_map'}
              src={recommendMap.minimap}
            />
          </Box>
        ) : (
          <div className='flex flex-col justify-center items-center gap-2 min-h-48'>
            <AddCircle className='text-zinc-600' />
            <Typography variant='caption' color='textDisabled'>
              사냥터 선택
            </Typography>
          </div>
        )}
      </CardActionArea>
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
              defaultValue={recommendMap.label ?? ''}
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
              {minimap ? (
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
                setRecommendMap({
                  minimap: minimap.url,
                  code: MAP_CODE.filter((map) => map.kor.includes(selectMap))[0].code,
                  label: selectMap,
                });
                handleModal();
              }}
            >
              선택
            </Button>
          </Box>
        </Card>
      </Modal>
    </Card>
  );
};
