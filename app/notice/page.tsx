import { SITE_TITLE } from '@/utils/string';
import type { Metadata } from 'next';
import { NoticeClientPage } from './_components/NoticeClientPage';

export const metadata: Metadata = {
  title: `${SITE_TITLE} - 공지사항`,
  description: '메이플랜드 레벨지지 공지사항',
};

const NoticePage = async () => {
  return <NoticeClientPage />;
};

export default NoticePage;
