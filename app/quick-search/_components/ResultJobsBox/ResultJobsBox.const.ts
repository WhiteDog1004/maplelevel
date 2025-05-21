import { JOBS } from '@/utils/jobs';

export const jobs_lists = [
  {
    value: 'warrior',
    label: '전사',
    secondJobs: JOBS.filter((job) => job.id > 100 && job.id < 200),
  },
  {
    value: 'magician',
    label: '마법사',
    secondJobs: JOBS.filter((job) => job.id > 200 && job.id < 300),
  },
  {
    value: 'bowman',
    label: '궁수',
    secondJobs: JOBS.filter((job) => job.id > 300 && job.id < 400),
  },
  {
    value: 'thief',
    label: '도적',
    secondJobs: JOBS.filter((job) => job.id > 400 && job.id < 500),
  },
];
