import { getDetailNotice } from '@/actions/noticeActions';
import { Box } from '@mui/material';
import { NoticeDetailClientPage } from './_components/NoticeDetailClientPage';

type Params = Promise<{ uuid: string }>;

const NoticeDetailPage = async ({ params }: { params: Params }) => {
  const { uuid } = await params;
  const post = await getDetailNotice(uuid);

  return (
    <Box className='w-full min-h-screen relative max-w-3xl m-auto h-full flex flex-row'>
      {post && <NoticeDetailClientPage post={post} />}
    </Box>
  );
};

export default NoticeDetailPage;
