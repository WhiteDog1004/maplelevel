import type { Database } from '@/types_db';
import { SITE_MAP } from '@/utils/sitemap';
import { Avatar, Card, CardActionArea, Divider, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { type Dispatch, Fragment, type ReactNode, type SetStateAction } from 'react';

interface MypageTabsProps {
  tabItems: {
    value: number;
    icon: ReactNode;
    label: string;
    data: Database['public']['Tables']['recommend-list']['Row'][];
    count: number | null;
    emptyLabel: string;
    emptyLink: string;
    emptyData: string[];
  }[];
  tabValue: number;
  setTabValue: Dispatch<SetStateAction<number>>;
}

export const MypageTabs = ({ tabItems, tabValue, setTabValue }: MypageTabsProps) => {
  const router = useRouter();
  const handleChange = (newValue: number) => {
    const query = new URLSearchParams({
      page: '1',
    }).toString();
    router.replace(`${SITE_MAP.MYPAGE}?${query}`);
    setTabValue(newValue);
  };

  return (
    <Stack gap={1} alignItems='center'>
      <Stack direction='row' alignItems='center' gap={2}>
        {tabItems.map((item) => (
          <Fragment key={item.value}>
            <Card
              key={item.value}
              sx={{
                '&[data-active]': {
                  backgroundColor: 'action.selected',
                  '&:hover': {
                    backgroundColor: 'action.selectedHover',
                  },
                },
              }}
              data-active={tabValue === item.value ? '' : undefined}
              elevation={4}
            >
              <CardActionArea onClick={() => handleChange(item.value)}>
                <Stack alignItems='center' p={2} gap={2} direction='row'>
                  <Avatar>{item.icon}</Avatar>
                  <Stack alignItems='center'>
                    <Typography>{item.label}</Typography>
                    <Typography color='textSecondary' variant='body2'>
                      {item.count}개
                    </Typography>
                  </Stack>
                </Stack>
              </CardActionArea>
            </Card>
            {item.value === 0 && <Divider sx={{ height: '80%' }} orientation='vertical' />}
          </Fragment>
        ))}
      </Stack>
      <Typography color='textDisabled' variant='caption'>
        버튼을 눌러 글들을 확인하실 수 있어요!
      </Typography>
    </Stack>
  );
};
