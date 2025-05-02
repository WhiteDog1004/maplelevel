import { Box, Card, CardActionArea, CardContent, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { UsefulGetNpc } from './UsefulGetNpc';
import { usefulSiteList } from './UsefulSite.const';

export const UsefulSite = () => {
  return (
    <Stack className='flex-col md:!flex-row' gap={1}>
      {usefulSiteList.map((site) => (
        <Card sx={{ width: 320, height: 224 }} key={site.code}>
          <Link href={site.url} target='_blank' rel='noopener noreferrer'>
            <CardActionArea sx={{ p: 2 }}>
              <Box width={320} height={120}>
                <UsefulGetNpc code={site.code} />
              </Box>
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
