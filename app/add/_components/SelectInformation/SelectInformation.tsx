import { useWriteStore } from '@/store/useWriteValueStore';
import { partyTypes, RecommendMapProps } from '@/types/add';
import { MAP_CODE } from '@/utils/mapCode';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Avatar,
  Button,
  Skeleton,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { Controller, useForm } from 'react-hook-form';
import { selectInfoSchema } from './SelectInformation.const';

interface SelectInformationProps {
  recommendMap: RecommendMapProps['recommendMap'];
  id: number;
}

export const SelectInformation = ({ recommendMap, id }: SelectInformationProps) => {
  const { writeValues, setWriteValues } = useWriteStore();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(selectInfoSchema),
    mode: 'onChange',
  });

  const { data: mapIcon } = useQuery({
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
      return alert('최소레벨이 최대레벨보다 클 수 없습니다.');
    }

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
    <div className='flex flex-col gap-4 justify-center'>
      <div className='flex flex-col gap-6 justify-center'>
        <div className='flex flex-row items-center gap-2'>
          {mapIcon ? (
            <Avatar variant='rounded' src={mapIcon.url} />
          ) : (
            <Skeleton variant='rounded' animation='wave' width={40} height={40} />
          )}
          <div className='flex flex-col'>
            <Typography variant='caption' color='textDisabled'>
              {MAP_CODE.filter((map) => map.code === recommendMap.code)[0]?.kor.split(':')[0]}
            </Typography>
            <Typography color='textSecondary'>{recommendMap.label}</Typography>
          </div>
        </div>

        <div className='flex flex-row items-start gap-2'>
          <div className='flex-1 h-max'>
            <TextField
              autoComplete='off'
              fullWidth
              label='최소레벨'
              {...register('minLevel')}
              error={!!errors.minLevel?.message}
              placeholder='최소레벨 입력'
              helperText={errors.minLevel?.message}
            />
          </div>
          <div className='flex-1 h-max'>
            <TextField
              autoComplete='off'
              fullWidth
              label='최대레벨'
              {...register('maxLevel')}
              error={!!errors.maxLevel?.message}
              placeholder='최대레벨 입력'
              helperText={errors.maxLevel?.message}
            />
          </div>
        </div>
      </div>

      <div className='flex flex-col w-full gap-2'>
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
      </div>

      <div className='flex flex-col w-full gap-2'>
        <Typography variant='body2' color='primary'>
          간단한 설명
        </Typography>
        <TextField
          fullWidth
          placeholder='ex) 5분당 5만 경험치 먹어요!'
          size='small'
          {...register('caption')}
        />
      </div>

      <Button variant='outlined' onClick={onSubmit}>
        확정
      </Button>
    </div>
  );
};
