'use client';

import { ListItemCard } from '@/app/list/_components/ListItemCard';
import { useDiscordStore } from '@/store/useDiscordStore';
import type { Database } from '@/types_db';
import { SITE_MAP } from '@/utils/sitemap';
import { Box, Button, Stack, Tab, Tabs, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { type ReactNode, type SyntheticEvent, useState } from 'react';
import { MypagePagination } from '../MypagePagination';

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
    <Box
      role='tabpanel'
      hidden={value !== index}
      id={`mypage-tabpanel-${index}`}
      aria-labelledby={`mypage-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Stack gap={4} sx={{ px: 3, py: 4 }}>
          {children}
        </Stack>
      )}
    </Box>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `mypage-tab-${index}`,
    'aria-controls': `mypage-tabpanel-${index}`,
  };
};

export const MypageClientPage = ({ list, likeList }: MypageProps) => {
  const { data, count } = list;
  const { data: likeData, count: likeCount } = likeList;
  const router = useRouter();
  const { user } = useDiscordStore();
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    const query = new URLSearchParams({
      page: '1',
    }).toString();
    router.replace(`${SITE_MAP.MYPAGE}?${query}`);
    setTabValue(newValue);
  };

  if (!user) return;
  return (
    <Stack width='100%' py={4}>
      <Box mx={3} sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabValue} onChange={handleChange} aria-label='mypage tabs'>
          <Tab label={`작성한 글 : ${count || 0}`} {...a11yProps(0)} />
          <Tab label={`좋아요한 글 : ${likeList.count || 0}`} {...a11yProps(1)} />
        </Tabs>
      </Box>

      <MypageTabPanel value={tabValue} index={0}>
        {data.length ? (
          <>
            <Box className='grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] justify-items-center w-full h-max gap-8'>
              {data.map((item) => (
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
                작성하신 사냥터가 없어요.
              </Typography>
              <Typography variant='body2' color='textDisabled'>
                다른 모험가를 위해
                <br />
                작성해 보시는 건 어떠신가요?
              </Typography>
            </Stack>
            <Button variant='outlined' color='success' onClick={() => router.push(SITE_MAP.ADD)}>
              사냥터 작성하러 가기
            </Button>
          </Stack>
        )}
      </MypageTabPanel>
      <MypageTabPanel value={tabValue} index={1}>
        {likeData.length ? (
          <>
            <Box className='grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] justify-items-center w-full h-max gap-8'>
              {likeData.map((item) => (
                <ListItemCard key={item.uuid} data={item || []} />
              ))}
            </Box>

            <MypagePagination count={likeCount || 1} />
          </>
        ) : (
          <Stack gap={2} alignItems='center' justifyContent='center'>
            <Image width={44} height={37} src={'/images/husky/hungry_0.png'} alt='husky' />
            <Stack textAlign='center' gap={1}>
              <Typography variant='body2' color='textDisabled'>
                좋아요를 누른 사냥터가 없어요.
              </Typography>
              <Typography variant='body2' color='textDisabled'>
                다른 모험가가 작성한 사냥터를
                <br />
                좋아요 해보시는 건 어떤가요?
              </Typography>
            </Stack>
            <Button variant='outlined' color='success' onClick={() => router.push(SITE_MAP.LIST)}>
              리스트 보러 가기
            </Button>
          </Stack>
        )}
      </MypageTabPanel>
    </Stack>
  );
};
