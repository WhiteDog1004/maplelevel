import { getDetailList } from '@/actions/listActions';
import { getLabelByJobs } from '@/utils/jobs';
import { Box } from '@mui/material';
import { Metadata } from 'next';
import { ListDetailClientPage } from './_components/ListDetailClientPage';

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { uuid } = await params;
  const post = await getDetailList(uuid);

  return {
    title: `${post.title} - 레벨지지`,
    description: `${getLabelByJobs(post.job)?.label} ${
      post.map_data[0].level.min
    }레벨 사냥터 - 레벨지지`,
    openGraph: {
      title: post.title,
      description: `${getLabelByJobs(post.job)?.label} ${
        post.map_data[0].level.min
      }레벨 사냥터 - 레벨지지`,
      images: [
        {
          url: 'https://maplelevel.gg/images/maplelevelgg.png',
          width: 1200,
          height: 630,
          alt: '레벨지지',
        },
      ],
    },
  };
}

type Params = Promise<{ uuid: string }>;

const ListDetail = async ({ params }: { params: Params }) => {
  const { uuid } = await params;
  const list = await getDetailList(uuid);

  return (
    <Box className='w-full min-h-screen relative max-w-5xl m-auto h-full flex flex-row'>
      {list && <ListDetailClientPage list={list} />}
    </Box>
  );
};

export default ListDetail;
