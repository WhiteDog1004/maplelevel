import { useDiscordStore } from '@/store/useDiscordStore';
import { useLoginModalStore } from '@/store/useLoginModalStore';
import { SITE_MAP } from '@/utils/sitemap';
import { Box, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const MainAddBox = () => {
  const { user } = useDiscordStore();
  const { setIsLoginModal } = useLoginModalStore();
  const router = useRouter();

  return (
    <Card sx={{ maxWidth: 320, maxHeight: 280 }}>
      <CardActionArea onClick={() => (!user ? setIsLoginModal(true) : router.push(SITE_MAP.ADD))}>
        <Box width='320px' height='160px' position='relative'>
          <Image
            priority
            fill
            unoptimized
            src='/images/orange_mushroom.webp'
            alt='orange_mushroom'
          />
        </Box>
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
