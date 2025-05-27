import { useGetQuickSearch } from '@/hooks/api/useGetQuickSearch/useGetQuickSearch';
import { formatToKoreanUnits } from '@/utils/formatNumber';
import { SITE_MAP } from '@/utils/sitemap';
import { Report } from '@mui/icons-material';
import {
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { jobs_lists } from './ResultJobsBox.const';

interface ResultJobsBoxProps {
  mapCode: string;
}

export const ResultJobsBox = ({ mapCode }: ResultJobsBoxProps) => {
  const router = useRouter();
  const { data } = useGetQuickSearch({ map: mapCode });
  const getExpData = (jobName: string) => {
    if (!data) return;

    const timeExps = data
      .map((item) => {
        if (item.job !== jobName) return;
        const { timeExp, timeExpType } = item.map_data[0];

        if (!timeExp) return null;

        const numericExp = Number(timeExp.replace(/,/g, ''));
        const adjustedExp = timeExpType === 'minute' ? numericExp * 12 : numericExp;

        return adjustedExp;
      })
      .filter((v): v is number => typeof v === 'number');

    const min = timeExps.length > 0 ? Math.min(...timeExps) : undefined;
    const max = timeExps.length > 0 ? Math.max(...timeExps) : undefined;

    const minLevels = data
      .map((item) => item.job === jobName && item.map_data[0]?.level?.min)
      .filter((v): v is number => typeof v === 'number');

    const maxLevels = data
      .map((item) => item.job === jobName && item.map_data[0]?.level?.max)
      .filter((v): v is number => typeof v === 'number');

    const minLev = minLevels.length > 0 ? Math.min(...minLevels) : undefined;
    const maxLev = maxLevels.length > 0 ? Math.max(...maxLevels) : undefined;

    return { min, max, jobName, minLev, maxLev };
  };

  if (!data) return;
  return (
    <Paper sx={{ p: 2, width: '100%' }}>
      <Stack gap={4}>
        {data?.length > 0 && (
          <Stack direction='row' gap={1} alignItems='flex-start'>
            <Report color='disabled' />
            <Typography variant='caption' color='textDisabled'>
              데이터가 있는 목록을 클릭하면
              <br />
              해당 사냥터의 목록들을 볼 수 있어요!
            </Typography>
          </Stack>
        )}
        {data?.length > 0 ? (
          jobs_lists.map((list) => {
            const result = list.secondJobs.some((job) => {
              const exp = getExpData(job.name);
              return exp && exp.minLev !== undefined && exp.maxLev !== undefined;
            });

            if (result) {
              return (
                <Stack gap={2} key={list.value}>
                  <Stack gap={1}>
                    <Stack gap={2} direction='row' alignItems='center'>
                      <Image
                        width={40}
                        height={40}
                        unoptimized
                        src={`/images/class/${list.value}.webp`}
                        alt={list.value}
                      />
                      <Typography>{list.label}</Typography>
                    </Stack>
                    <TableContainer component={Paper} sx={{ maxWidth: 560 }}>
                      <Table>
                        <TableHead sx={{ bgcolor: 'background.default' }}>
                          <TableRow>
                            <TableCell>직업</TableCell>
                            <TableCell align='right'>레벨 범위</TableCell>
                            <TableCell align='right'>한타임 경험치</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {list.secondJobs.map((job, index) => {
                            const exp = getExpData(job.name);
                            return (
                              <TableRow
                                sx={{
                                  bgcolor: index % 2 === 0 ? 'action.hover' : 'action.selected',
                                  cursor: exp?.minLev && exp?.maxLev ? 'pointer' : 'default',
                                  ':hover': {
                                    bgcolor: exp?.minLev && exp?.maxLev ? 'Highlight' : undefined,
                                    transition: 'background-color 0.2s ease',
                                  },
                                }}
                                key={job.id}
                                onClick={() =>
                                  exp?.minLev && exp?.maxLev
                                    ? router.push(
                                        `${SITE_MAP.LIST}?map=${mapCode}&job=${job.name}&page=1`
                                      )
                                    : undefined
                                }
                              >
                                <TableCell component='th' scope='row'>
                                  {job.label}
                                </TableCell>
                                <TableCell align='right'>
                                  <Typography
                                    variant='body2'
                                    color={exp?.minLev && exp?.maxLev ? 'primary' : 'textDisabled'}
                                  >
                                    {exp?.minLev && exp?.maxLev
                                      ? `${exp?.minLev?.toLocaleString()}~${exp?.maxLev?.toLocaleString()}`
                                      : '데이터가 없습니다'}
                                  </Typography>
                                </TableCell>
                                <TableCell align='right'>
                                  <Typography
                                    variant='body2'
                                    color={exp?.min && exp?.max ? 'primary' : 'textDisabled'}
                                  >
                                    {exp?.min && exp?.max
                                      ? `${formatToKoreanUnits(
                                          exp?.min?.toLocaleString()
                                        )}~${formatToKoreanUnits(exp?.max?.toLocaleString())}`
                                      : '데이터가 없습니다'}
                                  </Typography>
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Stack>
                </Stack>
              );
            }
          })
        ) : (
          <Stack gap={1} justifyContent='center' alignItems='center' p={2}>
            <Image width={44} height={37} src={'/images/husky/cry_0.png'} alt='husky' />
            <Typography variant='body2' color='textSecondary'>
              해당 사냥터의 데이터가 없어요...
            </Typography>
          </Stack>
        )}
      </Stack>
    </Paper>
  );
};
