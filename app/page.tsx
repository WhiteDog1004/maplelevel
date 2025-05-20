import { SITE_TITLE } from '@/utils/string';
import type { Metadata } from 'next';
import { MainClientPage } from './_components/Main/MainClientPage';

export const metadata: Metadata = {
  title: `메이플랜드 - ${SITE_TITLE}`,
  description: '메이플랜드에서 사냥터가 고민될 땐? 레벨지지',
};

export default function Home() {
  return (
    <div className='w-full min-h-screen pt-24 pb-8 md:pt-0 h-full flex flex-row justify-center items-center'>
      <MainClientPage />
    </div>
  );
}
