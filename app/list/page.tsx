import { getLists } from '@/actions/listActions';
import { SearchInfoTypes } from '@/types/common';
import { SITE_TITLE } from '@/utils/string';
import { Metadata } from 'next';
import { ListClientPage } from './_components/ListClientPage';

export const metadata: Metadata = {
  title: `${SITE_TITLE} - 사냥터 목록`,
  description: 'maple-level',
};

const List = async ({ searchParams }: { searchParams: SearchInfoTypes }) => {
  const lists = await getLists(searchParams);

  return (
    <div className='w-full min-h-screen max-w-5xl m-auto h-full flex flex-row'>
      <ListClientPage lists={lists || []} />
    </div>
  );
};

export default List;
