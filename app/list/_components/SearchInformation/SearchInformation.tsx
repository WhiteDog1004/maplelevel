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
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { SearchSortSwitch } from './SearchInformation.const';

export const SearchInformation = () => {
  const router = useRouter();
  const params = useSearchParams();
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
    if (
      value?.job ||
      value?.level ||
      value?.type ||
      value?.title ||
      value?.partyType ||
      value?.sort
    ) {
      const query = new URLSearchParams({
        ...(value.title && { title: value.title }),
        ...(value.job && { job: value.job }),
        ...(value.level && { level: value.level.toString() }),
        ...(value.type && { type: value.type }),
        ...(value.partyType && { partyType: value.partyType }),
        ...(value.sort === 'like' && { sort: value.sort }),
        ...(params.get('page') && { page: params.get('page') || '1' }),
      }).toString();

      setIsOpenFilter(false);
      return router.push(`/list?${query}`);
    }
    setIsOpenFilter(false);
    return router.push(`/list?page=1`);
  };

  const handleReset = () => {
    setIsOpenFilter(false);
    setSelectValue('');
    reset();
    return router.push('/list?page=1');
  };

  useEffect(() => {
    reset({
      title: params.get('title') || undefined,
      job: params.get('job') || undefined,
      level: Number(params.get('level')) || undefined,
      type: params.get('type') || undefined,
      partyType: params.get('partyType') || undefined,
      sort: params.get('sort') || undefined,
    });
  }, [isOpenFilter, params, reset]);

  useEffect(() => {
    if (params.get('job')) {
      setSelectValue(params.get('job') || '');
    }
  }, []);

  return (
    <Box className='flex justify-end w-full max-w-5xl m-auto'>
      <Button
        className='pointer-events-auto'
        sx={{ zIndex: 999 }}
        size='medium'
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
          <Box className='flex flex-col items-center'>
            <Image src='/images/husky/chat_4.png' alt='notFound' width={44} height={37} />
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
              <Box className='flex flex-col sm:flex-row gap-4 w-full'>
                <FormControl className='w-full' error={!!errors.job?.message}>
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
                  className='w-full'
                  label='레벨'
                  {...register('level')}
                  error={!!errors.level?.message}
                  placeholder='레벨을 입력해 주세요'
                />
              </Box>
              <Box className='flex flex-col whitespace-nowrap gap-4'>
                <Typography textAlign='center' variant='body2' color='textSecondary'>
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
                      <ToggleButton value='all'>모두</ToggleButton>
                      <ToggleButton value='exp'>경험치</ToggleButton>
                      <ToggleButton value='meso'>메소벌이</ToggleButton>
                    </ToggleButtonGroup>
                  )}
                />
                <Controller
                  name='partyType'
                  control={control}
                  render={({ field }) => (
                    <ToggleButtonGroup
                      className='bg-white dark:bg-transparent'
                      fullWidth
                      exclusive
                      aria-label='partyType'
                      value={field.value || ''}
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
              </Box>
              <Box className='flex justify-center'>
                <Controller
                  name='sort'
                  control={control}
                  render={({ field }) => (
                    <Stack direction='row' spacing={1} sx={{ alignItems: 'center' }}>
                      <Typography
                        width={48}
                        textAlign='end'
                        variant={!field.value ? 'body1' : 'body2'}
                        color={!field.value ? 'primary' : 'textDisabled'}
                      >
                        최신순
                      </Typography>
                      <SearchSortSwitch
                        checked={field.value === 'like'}
                        onChange={(_, value) => {
                          field.onChange(value ? 'like' : '');
                        }}
                      />
                      <Typography
                        width={48}
                        color={field.value === 'like' ? 'primary' : 'textDisabled'}
                        variant={field.value === 'like' ? 'body1' : 'body2'}
                      >
                        추천순
                      </Typography>
                    </Stack>
                  )}
                />
              </Box>
              <Box className='flex justify-between gap-4 pt-4'>
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
    </Box>
  );
};
