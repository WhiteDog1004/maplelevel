import { useMapIcon } from '@/hooks/api';
import { useWriteStore } from '@/store/useWriteValueStore';
import { partyTypes } from '@/types/common';
import { MAP_CODE } from '@/utils/mapCode';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Avatar,
  Box,
  Button,
  Paper,
  Skeleton,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { RecommendMapProps } from '../../_types/add';
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
  const { writeValues, setWriteValues, setIsEdit, isEditPage } = useWriteStore();
  const {
    control,
    register,
    setValue,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(selectInfoSchema),
    mode: 'onChange',
    defaultValues: {
      type: (isEditPage && writeValues.options?.[id]?.partyType) || '',
      place: (isEditPage && writeValues.options?.[id]?.place) || undefined,
    },
  });

  const { data: mapIcon, isLoading } = useMapIcon({
    code: recommendMap.code,
    uuid: recommendMap.code.toString(),
    enabled: !!recommendMap.minimap,
  });

  const onSubmit = handleSubmit((data) => {
    if (data.minLevel > data.maxLevel) {
      return setError('minLevel', { message: '최소 레벨이 너무 큽니다' });
    }

    setIsEdit(false);
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
            place: Number(data.place),
            partyType: data.type as partyTypes,
            caption: data.caption,
            mapCode: recommendMap.code,
            mobs: option.mobs,
            uuid: option.uuid,
          };
        }
        return option;
      }),
    });
  });

  useEffect(() => {
    if (completedCard[id] !== undefined) {
      setValue('caption', writeValues.options?.[id].caption);
      setValue('maxLevel', writeValues.options?.[id].maxLevel || 0);
      setValue('minLevel', writeValues.options?.[id].minLevel || 0);
      setValue('place', writeValues.options?.[id].place || 0);
      setValue('type', writeValues.options?.[id].partyType || '');
    }
  }, [completedCard]);

  return (
    <Box className='flex flex-col gap-4 h-full justify-between'>
      <Box className='flex flex-col gap-4 justify-center'>
        <Box className='flex flex-col gap-4 justify-center'>
          <Box className='flex flex-row items-center gap-2'>
            {mapIcon ? (
              <Avatar variant='rounded' src={mapIcon.url} />
            ) : isLoading ? (
              <Skeleton variant='rounded' animation='wave' width={40} height={40} />
            ) : (
              <Paper sx={{ width: 40, height: 40 }} />
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
                defaultValue={(isEditPage && writeValues.options?.[id]?.minLevel) || undefined}
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
                defaultValue={(isEditPage && writeValues.options?.[id]?.maxLevel) || undefined}
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
                size='small'
                color='primary'
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
            자리 혼잡도
          </Typography>
          <Controller
            name='place'
            control={control}
            rules={{ required: '타입을 선택해주세요.' }}
            render={({ field }) => (
              <ToggleButtonGroup
                className='bg-white dark:bg-transparent'
                fullWidth
                exclusive
                size='small'
                color='primary'
                aria-label='type'
                value={field.value}
                onChange={(_, value) => {
                  if (!value) return;
                  field.onChange(value);
                }}
              >
                <ToggleButton value={1}>원활</ToggleButton>
                <ToggleButton value={2}>보통</ToggleButton>
                <ToggleButton value={3}>혼잡</ToggleButton>
                <ToggleButton value={4}>매우혼잡</ToggleButton>
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
            multiline
            maxRows={4}
            defaultValue={(isEditPage && writeValues.options?.[id]?.partyType) || ''}
            {...register('caption')}
            error={!!errors.caption?.message}
          />
          {errors.caption && (
            <Typography variant='caption' color='error'>
              {errors.caption.message}
            </Typography>
          )}
        </Box>
      </Box>
      <Button variant='outlined' color='success' size='large' onClick={onSubmit}>
        확정
      </Button>
    </Box>
  );
};
