import { SITE_MAP } from '@/utils/sitemap';
import { Badge, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const MainQuickBox = () => {
  const router = useRouter();

  return (
    <Badge
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      sx={{ cursor: 'default' }}
      color='error'
      className='w-80 md:w-full'
      badgeContent={
        <Typography variant='body2' className='text-white'>
          NEW
        </Typography>
      }
    >
      <Card className='w-80 md:w-full'>
        <CardActionArea onClick={() => router.push(SITE_MAP.QUICK_SEARCH)}>
          <Image
            priority
            fetchPriority='high'
            loading='eager'
            sizes='304px'
            width={656}
            height={140}
            src='https://www.maplelevel.gg/images/maplelevelgg.webp'
            alt='monsters'
            quality={60}
          />
          <CardContent sx={{ p: 2 }}>
            <Typography gutterBottom variant='h5' component='div'>
              사냥터 빠른 검색
            </Typography>
            <Typography variant='body2' sx={{ color: 'text.secondary' }}>
              특정 사냥터의 정보를 빠르게 알아보고
              <br />
              경험치 및 레벨을 체크하고 빠르게 레벨링을 해봐요!
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Badge>
  );
};
