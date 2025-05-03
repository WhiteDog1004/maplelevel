import type { SearchInfoTypes } from '@/types/common';
import { JOBS, getClassImages } from '@/utils/jobs';
import { ExpandMoreOutlined } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useMediaQuery,
} from '@mui/material';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { MapSearch } from '../MapSearch';
import { titleFilterList } from './SearchInformation.const';

export const SearchInformation = () => {
  const router = useRouter();
  const params = useSearchParams();
  const isMobile = useMediaQuery('(max-width:768px)');
  const [selectValue, setSelectValue] = useState('');
  const [isResetting, setIsResetting] = useState(false);
  const [accordionExpanded, setAccordionExpanded] = useState(false);
  const [selectTitleFilterValue, setSelectTitleFilterValue] = useState('title');
  const {
    control,
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<SearchInfoTypes>();

  const onSubmit = (value?: SearchInfoTypes) => {
    setAccordionExpanded(false);
    if (
      value?.map ||
      value?.job ||
      value?.level ||
      value?.type ||
      value?.title ||
      value?.partyType ||
      value?.sort
    ) {
      const query = new URLSearchParams({
        ...(value.map && { map: value.map }),
        ...(value.title &&
          (selectTitleFilterValue === 'title' ? { title: value.title } : { writer: value.title })),
        ...(value.job && { job: value.job }),
        ...(value.level && { level: value.level.toString() }),
        ...(value.type && { type: value.type }),
        ...(value.partyType && { partyType: value.partyType }),
        ...(value.sort === 'like' && { sort: value.sort }),
        ...{ page: '1' },
      }).toString();

      return router.push(`/list?${query}`);
    }
    return router.push('/list?page=1');
  };

  const handleReset = () => {
    setIsResetting(true);
    setSelectValue('');
    setSelectTitleFilterValue('title');
    reset();
    setAccordionExpanded(false);
    return router.push('/list?page=1');
  };

  useEffect(() => {
    if (isResetting) {
      setIsResetting(false);
      setValue('level', undefined as unknown as number);
      return;
    }
    reset({
      map: params.get('map') || undefined,
      titleFilter: params.get('titleFilter') || undefined,
      title: params.get('title') || undefined,
      job: params.get('job') || undefined,
      level: Number(params.get('level')) || undefined,
      type: params.get('type') || undefined,
      partyType: params.get('partyType') || undefined,
      sort: params.get('sort') || undefined,
    });
  }, [params, reset]);

  useEffect(() => {
    if (params.get('job')) {
      setSelectValue(params.get('job') || '');
    }
  }, []);

  return (
    <Accordion
      onChange={(_, expanded) => setAccordionExpanded(expanded)}
      expanded={accordionExpanded}
      elevation={3}
      sx={{ maxWidth: 720, width: '100%' }}
    >
      <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
        <Box className='flex items-center gap-2'>
          <Image src='/images/husky/chat_4.png' alt='notFound' width={44} height={37} />
          <Typography variant='h6'>검색 필터</Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          px: 4,
          pb: 4,
          pt: 1,
        }}
        className='flex justify-center w-full max-w-5xl m-auto'
      >
        <Stack width='100%' gap={2}>
          <Box className='flex flex-col items-start'>
            <Typography variant='caption' color='textDisabled'>
              원하는 항목만 입력하여 검색할 수 있습니다.
            </Typography>
          </Box>
          <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
            <FormControl className='flex w-full'>
              <Stack width='100%' gap={2} direction={isMobile ? 'column' : 'row'}>
                <Box sx={{ flex: 1 }} width='100%' height='max-content'>
                  <MapSearch isResetting={isResetting} setValue={setValue} />
                </Box>

                <Stack flex={1} gap={2} direction={'column'}>
                  <Stack gap={2} justifyContent='space-between'>
                    <Stack direction='row' gap={2}>
                      <Select
                        size='small'
                        className='min-w-[100] sm:min-w-[156]'
                        value={selectTitleFilterValue}
                        {...register('titleFilter')}
                        onChange={(e) => setSelectTitleFilterValue(e.target.value)}
                      >
                        {titleFilterList.map((filter) => (
                          <MenuItem key={filter.value} value={filter.value}>
                            <Box className='flex items-center gap-2'>{filter.label}</Box>
                          </MenuItem>
                        ))}
                      </Select>
                      <TextField
                        size='small'
                        fullWidth
                        label={selectTitleFilterValue === 'title' ? '제목' : '작성자'}
                        {...register('title')}
                      />
                    </Stack>
                    <Box className='flex flex-col sm:flex-row gap-4 w-full'>
                      <FormControl sx={{ minWidth: 156 }} error={!!errors.job?.message}>
                        <InputLabel size='small'>직업</InputLabel>
                        <Select
                          className='w-full sm:w-[156]'
                          size='small'
                          label='직업'
                          value={selectValue}
                          {...register('job')}
                          onChange={(e) => setSelectValue(e.target.value)}
                        >
                          <MenuItem value=''>
                            <Box className='flex items-center gap-2'>
                              <Image
                                width={20}
                                height={20}
                                unoptimized
                                src={'/images/class/all.png'}
                                alt={'class'}
                              />
                              전체
                            </Box>
                          </MenuItem>
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
                        size='small'
                        className='w-full'
                        label='레벨'
                        {...register('level', {
                          validate: (value) => {
                            if (value === undefined) return true;
                            return !Number.isNaN(Number(value)) || '숫자만 입력해 주세요';
                          },
                        })}
                        error={!!errors.level?.message}
                        placeholder='레벨을 입력해 주세요'
                      />
                    </Box>
                  </Stack>
                  <Box className='flex flex-col justify-between whitespace-nowrap gap-4'>
                    {/* <Typography textAlign='center' variant='body2' color='textSecondary'>
                  사냥 스타일
                </Typography> */}
                    <Controller
                      name='type'
                      control={control}
                      render={({ field }) => (
                        <ToggleButtonGroup
                          className='bg-white dark:bg-transparent'
                          fullWidth
                          exclusive
                          size='small'
                          aria-label='type'
                          value={field.value || ''}
                          onChange={(_, value) => {
                            if (!value) return;
                            field.onChange(value);
                          }}
                          sx={{ minWidth: 140, height: 40 }}
                        >
                          <ToggleButton
                            onClick={() => {
                              if (field.value === 'exp') return field.onChange('');
                            }}
                            value='exp'
                          >
                            <Typography variant='body2'>경험치</Typography>
                          </ToggleButton>
                          <ToggleButton
                            onClick={() => {
                              if (field.value === 'meso') return field.onChange('');
                            }}
                            value='meso'
                          >
                            <Typography variant='body2'>메소벌이</Typography>
                          </ToggleButton>
                        </ToggleButtonGroup>
                      )}
                    />
                    <Controller
                      name='partyType'
                      control={control}
                      render={({ field }) => (
                        <ToggleButtonGroup
                          size='small'
                          className='bg-white dark:bg-transparent'
                          fullWidth
                          exclusive
                          aria-label='partyType'
                          value={field.value || ''}
                          onChange={(_, value) => {
                            if (!value) return;
                            field.onChange(value);
                          }}
                          sx={{ minWidth: 140, height: 40 }}
                        >
                          <ToggleButton
                            onClick={() => {
                              if (field.value === 'solo') return field.onChange('');
                            }}
                            value='solo'
                          >
                            <Typography variant='body2'>솔로</Typography>
                          </ToggleButton>
                          <ToggleButton
                            onClick={() => {
                              if (field.value === 'party') return field.onChange('');
                            }}
                            value='party'
                          >
                            <Typography variant='body2'>파티</Typography>
                          </ToggleButton>
                        </ToggleButtonGroup>
                      )}
                    />
                  </Box>
                  {/* <Box className='flex justify-center'>
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
              </Box> */}
                </Stack>
              </Stack>
              <Box className='flex justify-between gap-4 pt-4'>
                <Button
                  sx={{ maxWidth: isMobile ? '100%' : 156 }}
                  color='warning'
                  variant='outlined'
                  fullWidth
                  onClick={handleReset}
                >
                  리셋
                </Button>
                <Button color='primary' variant='outlined' type='submit' fullWidth>
                  검색
                </Button>
              </Box>
            </FormControl>
          </form>
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};
