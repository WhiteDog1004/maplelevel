import { useWriteStore } from '@/store/useWriteValueStore';
import { partyTypes, RecommendMapProps } from '@/types/add';
import { MAP_CODE } from '@/utils/mapCode';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Avatar,
  Box,
  Button,
  Skeleton,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { Dispatch, SetStateAction } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { selectInfoSchema } from './SelectInformation.const';

interface SelectInformationProps {
  recommendMap: RecommendMapProps['recommendMap'];
  id: number;
  completedCard: number[];
  setCompletedCard: Dispatch<SetStateAction<SelectInformationProps['completedCard']>>;
}

export const SelectInformation = ({
  recommendMap,
  id,
  completedCard,
  setCompletedCard,
}: SelectInformationProps) => {
  const { writeValues, setWriteValues } = useWriteStore();
  const {
    control,
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(selectInfoSchema),
    mode: 'onChange',
  });

  const { data: mapIcon, isLoading } = useQuery({
    queryKey: ['minimap', recommendMap.code],
    queryFn: async () => {
      const response = await fetch(
        `https://maplestory.io/api/gms/62/map/${recommendMap.code}/icon`
      );

      return response;
    },
    enabled: !!recommendMap.minimap,
  });

  const onSubmit = handleSubmit((data) => {
    if (data.minLevel > data.maxLevel) {
      return setError('minLevel', { message: '최소 레벨이 너무 큽니다' });
    }

    setCompletedCard([...completedCard, id]);
    return setWriteValues({
      job: writeValues.job,
      huntType: writeValues.huntType,
      title: writeValues.title,
      options: (writeValues.options || []).map((option, index) => {
        if (index === id) {
          return {
            ...option,
            minLevel: data.minLevel,
            maxLevel: data.maxLevel,
            partyType: data.type as partyTypes,
            caption: data.caption,
            mapCode: recommendMap.code,
          };
        }
        return option;
      }),
    });
  });

  return (
    <Box className='flex flex-col gap-4 h-full justify-between'>
      <Box className='flex flex-col gap-4 justify-center'>
        <Box className='flex flex-col gap-6 justify-center'>
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
                {MAP_CODE.filter((map) => map.code === recommendMap.code)[0]?.kor.split(':')[0]}
              </Typography>
              <Typography color='textSecondary'>{recommendMap.label}</Typography>
            </Box>
          </Box>

          <Box className='flex flex-row items-start gap-2'>
            <Box className='flex-1 h-max'>
              <TextField
                autoComplete='off'
                fullWidth
                label='최소레벨'
                {...register('minLevel')}
                error={!!errors.minLevel?.message}
                placeholder='최소레벨 입력'
                helperText={errors.minLevel?.message}
              />
            </Box>
            <Box className='flex-1 h-max'>
              <TextField
                autoComplete='off'
                fullWidth
                label='최대레벨'
                {...register('maxLevel')}
                error={!!errors.maxLevel?.message}
                placeholder='최대레벨 입력'
                helperText={errors.maxLevel?.message}
              />
            </Box>
          </Box>
        </Box>

        <Box className='flex flex-col w-full gap-2'>
          <Typography variant='body2' color='primary'>
            사냥 방식
          </Typography>
          <Controller
            name='type'
            control={control}
            rules={{ required: '타입을 선택해주세요.' }}
            render={({ field }) => (
              <ToggleButtonGroup
                className='bg-white dark:bg-transparent'
                fullWidth
                exclusive
                aria-label='type'
                value={field.value}
                onChange={(_, value) => {
                  if (!value) return;
                  field.onChange(value);
                }}
              >
                <ToggleButton value='all'>상관없음</ToggleButton>
                <ToggleButton value='solo'>솔로</ToggleButton>
                <ToggleButton value='party'>파티</ToggleButton>
              </ToggleButtonGroup>
            )}
          />
          {errors.type && (
            <Typography variant='caption' color='error'>
              최소 하나는 선택해야 합니다.
            </Typography>
          )}
        </Box>

        <Box className='flex flex-col w-full gap-2'>
          <Typography variant='body2' color='primary'>
            간단한 설명
          </Typography>
          <TextField
            fullWidth
            placeholder='ex) 5분당 5만 경험치 먹어요!'
            size='small'
            {...register('caption')}
          />
        </Box>
      </Box>
      <Button variant='outlined' color='success' size='large' onClick={onSubmit}>
        확정
      </Button>
    </Box>
  );
};
