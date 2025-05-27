import { postLike } from '@/actions/likeActions';
import { deleteList } from '@/actions/listActions';
import { useGetLike } from '@/hooks/api/useGetLike/useGetLike';
import { useDiscordStore } from '@/store/useDiscordStore';
import { useLoginModalStore } from '@/store/useLoginModalStore';
import type { ListDetailOptions } from '@/types/common';
import { getTimeAgo, isSameDay } from '@/utils/getTimeAgo';
import { getClassImages, getLabelByJobs } from '@/utils/jobs';
import { SITE_MAP } from '@/utils/sitemap';
import { Delete, Edit, Favorite, MoreVert } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import dayjs from 'dayjs';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { type Dispatch, type SetStateAction, useEffect, useState } from 'react';
import type { DeletedModalTypes } from '../../_types/types';
import { DeleteFailedModal } from '../../_ui/DeleteFailedModal';
import { DeletedModal } from '../../_ui/DeletedModal';
import { LikedSnackBar } from '../../_ui/FailedSnackBar';
import { MoreConfirmModal } from '../../_ui/MoreConfirmModal';

export const DetailTitle = ({ list }: ListDetailOptions) => {
  const router = useRouter();
  const { user } = useDiscordStore();
  const { setIsLoginModal } = useLoginModalStore();
  const isMobile = useMediaQuery('(max-width:640px)');
  const [moreOpen, setMoreOpen] = useState<HTMLElement | null>(null);
  const [isDeletedModal, setIsDeletedModal] = useState<DeletedModalTypes>(undefined);
  const [isLiked, setIsLiked] = useState(false);
  const [isClickedCopy, setIsClickedCopy] = useState(false);
  const isUpdated = !!list.updated_at;

  const {
    data: getLike,
    error,
    isPending,
    refetch,
  } = useGetLike({
    postUuid: list.uuid,
    enabled: !!list.uuid,
  });

  const handleClick =
    (setState: Dispatch<SetStateAction<HTMLElement | null>>) =>
    (event: React.MouseEvent<HTMLElement>) => {
      setState(event.currentTarget);
    };

  const handleMenuListClose = (setState: Dispatch<SetStateAction<HTMLElement | null>>) => {
    setState(null);
  };

  const createLikePost = useMutation({
    mutationFn: () => postLike({ postUuid: list.uuid, userUuid: user?.user_metadata.provider_id }),
    onSuccess: (data) => {
      if (data === 'duplicate' || !!data) return setIsLiked(true);

      return refetch();
    },
  });
  const deletePost = useMutation({
    mutationFn: (uuid: string) => deleteList(uuid),
    onSuccess: () => {
      setIsDeletedModal('success');
    },
    onError: () => {
      setIsDeletedModal('failed');
    },
  });

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setIsClickedCopy(true);
    } catch (err) {
      console.error(`${err} : 주소복사 실패`);
    }
  };

  const handleLike = () => {
    if (!user) return setIsLoginModal(true);
    if (isLiked) return;

    createLikePost.mutate();
  };

  const handleEdit = () => {
    if (list.writer_uuid === user?.id) {
      router.push(`${SITE_MAP.EDIT}/${list.uuid}`);
    }
  };

  const handleDelete = (uuid: string) => {
    deletePost.mutate(uuid);
  };

  useEffect(() => {
    if (!isClickedCopy) return;
    setTimeout(() => {
      setIsClickedCopy(false);
    }, 1500);
  }, [handleCopy]);

  return (
    <Stack gap={4} width='100%' justifyContent='space-between' alignItems='flex-end'>
      <Stack width='100%' direction='row' alignItems='flex-start' justifyContent='space-between'>
        <Stack width='88%' className='gap-1'>
          <Typography noWrap variant={isMobile ? 'h5' : 'h4'}>
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
        </Stack>

        {(user?.user_metadata.provider_id === list.user.uuid ||
          user?.user_metadata.role === 'admin') && (
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
              <MenuItem className='gap-2' onClick={handleEdit}>
                <Edit />
                <Typography>수정하기</Typography>
              </MenuItem>
              <Divider orientation='horizontal' />
              <MenuItem className='gap-2' onClick={() => setIsDeletedModal('confirm')}>
                <Delete color='error' />
                <Typography color='error'>삭제하기</Typography>
              </MenuItem>
            </Menu>
          </Box>
        )}
      </Stack>

      <Stack
        height='100%'
        direction='row'
        alignItems='space-between'
        width='100%'
        justifyContent={
          user?.user_metadata.provider_id === list.user.uuid || user?.user_metadata.role === 'admin'
            ? 'space-between'
            : 'end'
        }
      >
        <Box className='flex items-center gap-2'>
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
          <Stack direction='row' alignItems='flex-end' gap={0.5}>
            <Tooltip
              arrow
              placement='top'
              title={dayjs(list.updated_at ?? list.created_at).format('YY-MM-DD HH:mm')}
            >
              <Typography color='textSecondary' variant='body2' sx={{ lineHeight: 1 }}>
                {getTimeAgo(list.created_at)}
              </Typography>
            </Tooltip>
            {isUpdated && (
              <>
                <Typography color='textDisabled' variant='caption' sx={{ lineHeight: 1 }}>
                  ·
                </Typography>
                <Typography color='textDisabled' variant='caption' sx={{ lineHeight: 1 }}>
                  {isSameDay(list.created_at, list.updated_at) ? '' : getTimeAgo(list.updated_at)}{' '}
                  업데이트 됨
                </Typography>
              </>
            )}
          </Stack>
        </Box>

        <Stack gap={1} direction='row'>
          <Box className='flex items-center'>
            {!isPending && <Typography>{(!error && getLike?.toLocaleString()) || 0}</Typography>}
            <IconButton onClick={handleLike}>
              <Favorite />
            </IconButton>
          </Box>
          <Tooltip
            slotProps={{
              tooltip: {
                sx: {
                  bgcolor: 'success.dark',
                  color: 'white',
                },
              },
              arrow: {
                sx: {
                  color: 'success.dark',
                },
              },
            }}
            arrow
            placement='top'
            open={isClickedCopy}
            title={'주소복사 완료!'}
          >
            <Button onClick={handleCopy} color='success' size='small' variant='outlined'>
              <Typography variant='body2' noWrap>
                주소복사
              </Typography>
            </Button>
          </Tooltip>
        </Stack>
      </Stack>

      <DeletedModal open={isDeletedModal} setOpen={setIsDeletedModal} />
      <DeleteFailedModal open={isDeletedModal} setOpen={setIsDeletedModal} />
      <MoreConfirmModal
        open={isDeletedModal}
        setOpen={setIsDeletedModal}
        handleDelete={() => handleDelete(list.uuid)}
      />
      <LikedSnackBar isSnackBar={isLiked} setIsSnackBar={setIsLiked} />
    </Stack>
  );
};
