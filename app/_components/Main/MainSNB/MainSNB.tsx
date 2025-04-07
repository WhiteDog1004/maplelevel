import { useDiscordStore } from '@/store/useDiscordStore';
import { SITE_MAP } from '@/utils/sitemap';
import { SITE_SUB_TITLE, SITE_TITLE } from '@/utils/string';
import { Typography } from '@mui/material';
import Link from 'next/link';
import { lists } from './MainSNB.const';

export const MainSNB = () => {
  const { user } = useDiscordStore();

  return (
    <div className='relative md:absolute md:right-full'>
      <div className='px-8 py-6 flex flex-col md:items-end md:justify-end dark:bg-zinc-800 bg-zinc-100 border-zinc-200 border-2 dark:border-opacity-0 w-full md:w-max rounded-lg mr-2 gap-6'>
        <div className='flex flex-col items-end'>
          <Typography color='textDisabled' variant='caption'>
            {SITE_SUB_TITLE}
          </Typography>
          <Typography className='text-center' variant='h4'>
            {SITE_TITLE}
          </Typography>
        </div>
        <div className='flex flex-col gap-4 w-full md:items-end'>
          {lists.map((list) => (
            <Link
              key={list.href}
              href={list.isLogin && !user ? SITE_MAP.AUTH_LOGIN : list.href}
              className='hover:text-blue-400 transition'
            >
              <div className='flex flex-row'>
                <Typography className='w-full text-center md:text-right' variant='body1'>
                  {list.label}
                </Typography>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
