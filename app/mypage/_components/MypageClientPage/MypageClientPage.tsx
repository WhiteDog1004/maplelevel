'use client';

import { ListItemCard } from '@/app/list/_components/ListItemCard';
import { useDiscordStore } from '@/store/useDiscordStore';
import type { Database } from '@/types_db';
import { SITE_MAP } from '@/utils/sitemap';
import { Description, Favorite } from '@mui/icons-material';
import { Box, Button, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { type ReactNode, useState } from 'react';
import { MypageInfo } from '../MypageInfo';
import { MypagePagination } from '../MypagePagination';
import { MypageTabs } from '../MypageTabs/MypageTabs';

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

interface MypageProps {
  list: {
    data: Database['public']['Tables']['recommend-list']['Row'][];
    count: number | null;
  };
  likeList: {
    data: Database['public']['Tables']['recommend-list']['Row'][];
    count: number | null;
  };
}

const MypageTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <Box hidden={value !== index} width='100%' minHeight={480} {...other}>
      {value === index && (
        <Stack
          height='100%'
          justifyContent='center'
          alignItems='center'
          gap={4}
          sx={{ px: 3, py: 4 }}
        >
          {children}
        </Stack>
      )}
    </Box>
  );
};

export const MypageClientPage = ({ list, likeList }: MypageProps) => {
  const { data, count } = list;
  const { data: likeData, count: likeCount } = likeList;
  const router = useRouter();
  const { user } = useDiscordStore();
  const [tabValue, setTabValue] = useState(0);

  const tabItems = [
    {
      value: 0,
      icon: <Description />,
      label: '작성한 글',
      data: data,
      count: count,
      emptyLabel: '사냥터 작성하러 가기',
      emptyLink: SITE_MAP.ADD,
      emptyData: ['작성하신 사냥터가 없어요.', '다른 모험가를 위해\n작성해 보시는 건 어떠신가요?'],
    },
    {
      value: 1,
      icon: <Favorite />,
      label: '좋아요 누른 글',
      data: likeData,
      count: likeCount,
      emptyLabel: '리스트 보러 가기',
      emptyLink: SITE_MAP.LIST,
      emptyData: [
        '좋아요를 누른 사냥터가 없어요.',
        '다른 모험가가 작성한 사냥터를\n좋아요 해보시는 건 어떤가요?',
      ],
    },
  ];

  if (!user) return;
  return (
    <Stack gap={3} alignItems='center' width='100%' py={4}>
      <MypageInfo user={user} />

      <MypageTabs tabItems={tabItems} tabValue={tabValue} setTabValue={setTabValue} />

      {tabItems.map((items) => (
        <MypageTabPanel value={tabValue} index={items.value} key={items.value}>
          {items.data.length ? (
            <>
              <Box className='grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] justify-items-center w-full h-max gap-8'>
                {items.data.map((item) => (
                  <ListItemCard key={item.uuid} data={item || []} />
                ))}
              </Box>

              <MypagePagination count={count || 1} />
            </>
          ) : (
            <Stack gap={2} alignItems='center' justifyContent='center'>
              <Image width={44} height={37} src={'/images/husky/hungry_0.png'} alt='husky' />
              <Stack textAlign='center' gap={1}>
                <Typography variant='body2' color='textDisabled'>
                  {items.emptyData[0]}
                </Typography>
                <Typography whiteSpace='pre-wrap' variant='body2' color='textDisabled'>
                  {items.emptyData[1]}
                </Typography>
              </Stack>
              <Button
                variant='outlined'
                color='success'
                onClick={() => router.push(items.emptyLink)}
              >
                {items.emptyLabel}
              </Button>
            </Stack>
          )}
        </MypageTabPanel>
      ))}
    </Stack>
  );
};
