import { SITE_MAP } from '@/utils/sitemap';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const MainListBox = () => {
  const router = useRouter();

  return (
    <Card sx={{ maxWidth: 320, maxHeight: 280 }}>
      <CardActionArea sx={{ p: 1 }} onClick={() => router.push(SITE_MAP.LIST)}>
        <Image
          priority
          unoptimized
          width={304}
          height={152}
          src='/images/monsters.webp'
          alt='monsters'
        />
        <CardContent sx={{ p: 1, py: 2 }}>
          <Typography gutterBottom variant='h5' component='div'>
            사냥터 리스트
          </Typography>
          <Typography variant='body2' sx={{ color: 'text.secondary' }}>
            모험가분들이 작성한 사냥터들을 둘러보고
            <br />
            자신만의 사냥터를 찾아보세요!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
