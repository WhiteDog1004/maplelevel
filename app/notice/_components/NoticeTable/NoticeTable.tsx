import { useGetNotice } from '@/hooks/api/useGetNotice/useGetNotice';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import dayjs from 'dayjs';
import Link from 'next/link';

export const NoticeTable = () => {
  const { data } = useGetNotice();

  return (
    <TableContainer component={Paper} className='max-w-3xl w-full mx-auto my-8'>
      <Table>
        <TableHead sx={{ bgcolor: 'ThreeDDarkShadow' }}>
          <TableRow>
            <TableCell width={60} align='center'>
              번호
            </TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>제목</TableCell>
            <TableCell width={120} align='center' sx={{ fontWeight: 'bold' }}>
              작성일
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((notice) => (
            <TableRow key={notice.id} hover>
              <TableCell align='center'>{notice.id}</TableCell>
              <TableCell>
                <Link href={`/notice/${notice.uuid}`} className='hover:underline'>
                  {notice.title}
                </Link>
              </TableCell>
              <TableCell align='center'>{dayjs(notice.created_at).format('YY-MM-DD')}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
