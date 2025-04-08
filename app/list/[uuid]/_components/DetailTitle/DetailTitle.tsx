import { deleteList } from '@/actions/listActions';
import { useDiscordStore } from '@/store/useDiscordStore';
import { ListDetailOptions } from '@/types/common';
import { getClassImages, getLabelByJobs } from '@/utils/jobs';
import { Delete, Edit, Favorite, MoreVert } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Chip,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from '@mui/material';
import dayjs from 'dayjs';
import Image from 'next/image';
import { Dispatch, SetStateAction, useState } from 'react';
import { DeletedModalTypes } from '../../_types/types';
import { DeletedModal } from '../../_ui/DeletedModal';
import { DeleteFailedModal } from '../../_ui/DeleteFailedModal';
import { MoreConfirmModal } from '../../_ui/MoreConfirmModal';

export const DetailTitle = ({ list }: ListDetailOptions) => {
  const { user } = useDiscordStore();
  const [moreOpen, setMoreOpen] = useState<HTMLElement | null>(null);
  const [isDeletedModal, setIsDeletedModal] = useState<DeletedModalTypes>(undefined);

  const handleClick =
    (setState: Dispatch<SetStateAction<HTMLElement | null>>) =>
    (event: React.MouseEvent<HTMLElement>) => {
      setState(event.currentTarget);
    };

  const handleMenuListClose = (setState: Dispatch<SetStateAction<HTMLElement | null>>) => {
    setState(null);
  };

  const handleDelete = (uuid: string) => {
    deleteList(uuid)
      .then(() => {
        setIsDeletedModal('success');
      })
      .catch(() => {
        setIsDeletedModal('failed');
      });
  };

  return (
    <Box className='flex gap-4 justify-between items-end w-full'>
      <Box className='flex flex-col gap-8 w-10/12'>
        <Box className='flex flex-col gap-1'>
          <Typography noWrap variant='h4'>
            {list.title}
          </Typography>
          <Box className='flex items-center gap-2'>
            <Image
              width={20}
              height={20}
              unoptimized
              src={`/images/class/${getClassImages(getLabelByJobs(list.job)?.id || 0)}.webp`}
              alt='class'
            />
            <Typography variant='body1'>{getLabelByJobs(list.job)?.label}</Typography>
            <Divider flexItem variant='middle' orientation='vertical' />
            <Box className='flex gap-1 items-center justify-end'>
              <Typography variant='body1'>
                레벨 : {Math.min(...list.map_data.map((item) => item.level.min || 0))}
              </Typography>
              <Typography variant='caption' color='textDisabled'>
                ~
              </Typography>
              <Typography
                sx={{
                  lineHeight: 1,
                }}
                variant='body1'
              >
                {Math.max(...list.map_data.map((item) => item.level.max || 0))}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box className='flex items-end gap-2'>
          <Chip
            sx={{
              gap: 0.5,
              width: 'max-content',
              maxWidth: 150,
            }}
            color='default'
            size='medium'
            avatar={<Avatar alt='avatar' src={list.user.avatar_url || '/images/mushroom.png'} />}
            label={
              <Typography noWrap variant='caption'>
                {list.user.nickname || '익명의 모험가'}
              </Typography>
            }
            variant='outlined'
          />
          <Typography color='textDisabled'>{dayjs(list.created_at).format('YY.MM.DD')}</Typography>
        </Box>
      </Box>
      <Stack
        height='100%'
        direction='column'
        alignItems='end'
        justifyContent={
          user?.user_metadata.provider_id === list.user.uuid ? 'space-between' : 'end'
        }
      >
        {user?.user_metadata.provider_id === list.user.uuid && (
          <Box>
            <IconButton onClick={handleClick(setMoreOpen)}>
              <MoreVert />
            </IconButton>
            <Menu
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              open={!!moreOpen}
              anchorEl={moreOpen}
              onClose={() => handleMenuListClose(setMoreOpen)}
              onClick={() => handleMenuListClose(setMoreOpen)}
            >
              <MenuItem className='gap-2'>
                <Edit />
                <Typography>수정하기</Typography>
              </MenuItem>
              <MenuItem className='gap-2' onClick={() => setIsDeletedModal('confirm')}>
                <Delete color='error' />
                <Typography color='error'>삭제하기</Typography>
              </MenuItem>
            </Menu>
          </Box>
        )}
        <Box className='flex items-center gap-1'>
          <Typography>{list.like || 0}</Typography>
          <IconButton>
            <Favorite />
          </IconButton>
        </Box>
      </Stack>

      <DeletedModal open={isDeletedModal} setOpen={setIsDeletedModal} />
      <DeleteFailedModal open={isDeletedModal} setOpen={setIsDeletedModal} />
      <MoreConfirmModal
        open={isDeletedModal}
        setOpen={setIsDeletedModal}
        handleDelete={() => handleDelete(list.uuid)}
      />
    </Box>
  );
};
