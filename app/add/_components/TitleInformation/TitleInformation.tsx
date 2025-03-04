import { useWriteStore } from '@/store/useWriteValueStore';
import { getClassImages, JOBS } from '@/utils/jobs';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Card,
  CardContent,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import { Controller, useForm } from 'react-hook-form';
import { titleInfoSchema } from './TitleInformation.const';

export const TitleInformation = () => {
  const { writeValues, setWriteValues } = useWriteStore();
  const {
    control,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(titleInfoSchema),
    mode: 'onChange',
  });

  return (
    <Card className='w-full' variant='outlined'>
      <CardContent className='flex flex-col gap-4 justify-between p-4'>
        <Box className='flex flex-col w-full gap-4'>
          <Box className='flex gap-4'>
            <TextField
              label='제목'
              className='flex-1'
              {...register('title', {
                onBlur: (e) => setWriteValues({ ...writeValues, title: e.currentTarget.value }),
              })}
            />
          </Box>
          <Box className='flex flex-col sm:flex-row gap-4'>
            <FormControl fullWidth className='flex-1' error={!!errors.job?.message}>
              <InputLabel>직업</InputLabel>
              <Select
                label='직업'
                value={writeValues.job || ''}
                {...register('job')}
                onChange={(e) => setWriteValues({ ...writeValues, job: e.target.value })}
              >
                {JOBS.map((job) => (
                  <MenuItem key={job.id} value={job.name}>
                    <Box className='flex items-center gap-2'>
                      <Image
                        width={20}
                        height={20}
                        unoptimized
                        src={`/images/class/${getClassImages(job.id)}.webp`}
                        alt={'class'}
                      />
                      {job.label}
                    </Box>
                  </MenuItem>
                ))}
              </Select>
              {errors.job?.message && <FormHelperText>{errors.job.message}</FormHelperText>}
            </FormControl>
            <Box className='flex w-full flex-1 gap-2'>
              <Controller
                name='type'
                control={control}
                rules={{ required: '타입을 선택해주세요.' }}
                render={() => (
                  <ToggleButtonGroup
                    sx={{ height: 56 }}
                    className='bg-white dark:bg-transparent'
                    fullWidth
                    exclusive
                    aria-label='type'
                    value={writeValues.huntType}
                    onChange={(_, value) => {
                      if (!value) return;
                      setWriteValues({ ...writeValues, huntType: value });
                    }}
                  >
                    <ToggleButton value='all'>둘다</ToggleButton>
                    <ToggleButton value='exp'>경험치</ToggleButton>
                    <ToggleButton value='meso'>메소벌이</ToggleButton>
                  </ToggleButtonGroup>
                )}
              />
              {errors.type && (
                <Typography variant='caption' color='error'>
                  최소 하나는 선택해야 합니다.
                </Typography>
              )}
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
