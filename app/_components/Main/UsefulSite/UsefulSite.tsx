import { useGetNpc } from '@/hooks/api';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import Link from 'next/link';
import { usefulSiteList } from './UsefulSite.const';

export const UsefulSite = () => {
  const isMobile = useMediaQuery('(max-width:524px)');
  const handleGetNpcIcon = (code: number) => {
    const { data } = useGetNpc({ code });

    return data?.url;
  };

  return (
    <Stack direction={isMobile ? 'column' : 'row'} gap={1}>
      {usefulSiteList.map((site) => (
        <Card sx={{ maxWidth: 320 }} key={site.code}>
          <Link href={site.url} target='_blank' rel='noopener noreferrer'>
            <CardActionArea sx={{ p: 2 }}>
              <CardMedia
                sx={{ width: 320, maxHeight: 120, objectFit: 'contain', objectPosition: 'center' }}
                component='img'
                height='140'
                image={handleGetNpcIcon(site.code)}
                alt='site.name'
              />
              <CardContent sx={{ pb: 0 }}>
                <Typography gutterBottom variant='subtitle1' textAlign='center' component='div'>
                  {site.name}
                </Typography>
                <Typography variant='subtitle2' textAlign='center' sx={{ color: 'text.secondary' }}>
                  {site.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
      ))}
    </Stack>
  );
};
