import { Card, CardActionArea, CardContent, Stack, Typography, useMediaQuery } from '@mui/material';
import Link from 'next/link';
import { UsefulGetNpc } from './UsefulGetNpc';
import { usefulSiteList } from './UsefulSite.const';

export const UsefulSite = () => {
  const isMobile = useMediaQuery('(max-width:524px)');

  return (
    <Stack direction={isMobile ? 'column' : 'row'} gap={1}>
      {usefulSiteList.map((site) => (
        <Card sx={{ maxWidth: 320 }} key={site.code}>
          <Link href={site.url} target='_blank' rel='noopener noreferrer'>
            <CardActionArea sx={{ p: 2 }}>
              <UsefulGetNpc code={site.code} />
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
