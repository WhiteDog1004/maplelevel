import { SearchInfoTypes } from '@/types/common';
import { getClassImages, JOBS } from '@/utils/jobs';
import { ManageSearch } from '@mui/icons-material';
import {
  Box,
  Button,
  Dialog,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

export const SearchInformation = () => {
  const router = useRouter();
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [selectValue, setSelectValue] = useState('');
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SearchInfoTypes>();

  const onSubmit = (value?: SearchInfoTypes) => {
    if (value?.job || value?.level || value?.type || value?.title) {
      const query = new URLSearchParams({
        ...(value.title && { title: value.title }),
        ...(value.job && { job: value.job }),
        ...(value.level && { level: value.level.toString() }),
        type: value.type || 'all',
      }).toString();

      setIsOpenFilter(false);
      return router.replace(`/list?${query}`);
    }
    setIsOpenFilter(false);
    return router.replace('/list');
  };

  const handleReset = () => {
    setIsOpenFilter(false);
    setSelectValue('');
    reset();
    return router.replace('/list');
  };

  return (
    <>
      <Button
        sx={{ zIndex: 999 }}
        size='medium'
        color='inherit'
        variant='contained'
        onClick={() => setIsOpenFilter(true)}
      >
        <ManageSearch />
        <Typography variant='body2'>필터</Typography>
      </Button>
      <Dialog
        fullWidth
        maxWidth='xs'
        transitionDuration={{ enter: 200, exit: 200 }}
        open={isOpenFilter}
        onClose={() => setIsOpenFilter(false)}
      >
        <Box className='flex flex-col gap-4 py-6 px-8'>
          <Box className='flex flex-col'>
            <Typography variant='h6' textAlign='center'>
              필터 검색
            </Typography>
            <Typography variant='caption' color='textDisabled' textAlign='center'>
              원하는 항목만 입력하여 검색할 수 있습니다.
            </Typography>
          </Box>
          <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
            <FormControl className='flex flex-col w-full gap-4'>
              <TextField fullWidth label='제목' {...register('title')} />
              <FormControl error={!!errors.job?.message}>
                <InputLabel>직업</InputLabel>
                <Select
                  label='직업'
                  value={selectValue}
                  {...register('job')}
                  onChange={(e) => setSelectValue(e.target.value)}
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
              </FormControl>
              <TextField
                label='레벨'
                {...register('level')}
                error={!!errors.level?.message}
                placeholder='레벨을 입력해 주세요'
              />
              <Box className='flex flex-col whitespace-nowrap gap-2'>
                <Typography variant='body2' color='primary'>
                  사냥 스타일
                </Typography>
                <Controller
                  name='type'
                  control={control}
                  render={({ field }) => (
                    <ToggleButtonGroup
                      className='bg-white dark:bg-transparent'
                      fullWidth
                      exclusive
                      aria-label='type'
                      value={field.value || ''}
                      onChange={(_, value) => {
                        if (!value) return;
                        field.onChange(value);
                      }}
                    >
                      <ToggleButton value='all'>둘다</ToggleButton>
                      <ToggleButton value='exp'>경험치</ToggleButton>
                      <ToggleButton value='meso'>메소벌이</ToggleButton>
                    </ToggleButtonGroup>
                  )}
                />
              </Box>
              <Box className='flex justify-between gap-4 pt-6'>
                <Button color='warning' variant='outlined' fullWidth onClick={handleReset}>
                  리셋
                </Button>
                <Button color='success' variant='outlined' type='submit' fullWidth>
                  검색
                </Button>
              </Box>
            </FormControl>
          </form>
        </Box>
      </Dialog>
    </>
  );
};
