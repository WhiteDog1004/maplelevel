import { useDiscordStore } from '@/store/useDiscordStore';
import { useLoginModalStore } from '@/store/useLoginModalStore';
import { SITE_MAP } from '@/utils/sitemap';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const MainAddBox = () => {
  const { user } = useDiscordStore();
  const { setIsLoginModal } = useLoginModalStore();
  const router = useRouter();

  return (
    <Card sx={{ width: 320, height: 280 }}>
      <CardActionArea onClick={() => (!user ? setIsLoginModal(true) : router.push(SITE_MAP.ADD))}>
        <Image
          priority
          fetchPriority='high'
          width={320}
          height={160}
          sizes='320px'
          src='https://www.maplelevel.gg/images/orange_mushroom.webp'
          quality={60}
          alt='orange_mushroom'
          loading='eager'
        />
        <CardContent sx={{ pb: 3 }}>
          <Typography gutterBottom variant='h5' component='div'>
            게시글 작성
          </Typography>
          <Typography variant='body2' sx={{ color: 'text.secondary' }}>
            메이플랜드에서 걸어왔던 여정을
            <br />
            다른 모험가들에게 공유해 보세요!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
