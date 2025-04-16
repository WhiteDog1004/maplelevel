'use client';

import { createLists } from '@/actions/listActions';
import { useDarkModeStore } from '@/store/useDarkModeStore';
import { useDiscordStore } from '@/store/useDiscordStore';
import { useWriteStore } from '@/store/useWriteValueStore';
import { Close } from '@mui/icons-material';
import { Box, Button, Card, CardActionArea, Typography } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { AddDeleteModal } from '../../_ui/AddDeleteModal/AddDeleteModal';
import { AddNoUserModal } from '../../_ui/AddNoUserModal';
import { AddSuccessModal } from '../../_ui/AddSuccessModal';
import { FailedSnackBar } from '../../_ui/FailedSnackBar';
import { EmptyCard } from '../EmptyCard';
import { SelectCard } from '../SelectCard';
import { TitleInformation } from '../TitleInformation';

export const AddClientPage = () => {
  const { darkMode } = useDarkModeStore();
  const { writeValues, isEdit } = useWriteStore();
  const { user } = useDiscordStore();
  const [isSnackBar, setIsSnackBar] = useState(false);
  const [completedCard, setCompletedCard] = useState<number[]>([]);
  const [open, setOpen] = useState<{
    open: 'success' | 'delete' | 'noUser' | undefined;
    index: number | undefined;
  }>({
    open: undefined,
    index: undefined,
  });

  const createAddMutation = useMutation({
    mutationFn: () =>
      createLists(writeValues, {
        id: user?.id,
        uuid: user?.user_metadata.provider_id,
        nickname: user?.user_metadata.custom_claims.global_name,
        avatar_url: user?.user_metadata.avatar_url,
      }),

    onSuccess: () => {
      setOpen({
        open: 'success',
        index: open.index,
      });
    },
  });

  const handleAddPosting = () => {
    if (!user) return setOpen({ open: 'noUser', index: undefined });
    const lastOption = writeValues.options?.slice(-1)[0];

    if (
      isEdit ||
      !writeValues.huntType ||
      !writeValues.job ||
      !writeValues.title ||
      (lastOption !== undefined &&
        (!lastOption?.mapCode ||
          !lastOption?.minLevel ||
          !lastOption?.maxLevel ||
          !lastOption?.partyType ||
          !lastOption?.place))
    ) {
      return setIsSnackBar(true);
    }
    createAddMutation.mutate();
  };

  return (
    <Box className='w-full flex flex-col gap-6 items-center p-10 max-w-3xl'>
      <Box className='flex flex-col gap-1'>
        <Typography variant='body2' color='textSecondary'>
          당신이 걸어오셨던 여정을 공유해 보세요
        </Typography>
        <Typography variant='h3'>사냥터 추천</Typography>
      </Box>
      <TitleInformation />
      {writeValues.options?.map((list, index) => (
        <Box className='relative w-full' key={`select-card-${list.uuid}`}>
          <Card
            sx={{
              border: darkMode ? 'none' : undefined,
              borderLeftColor: 'white',
              borderStartStartRadius: 0,
              borderEndStartRadius: 0,
            }}
            variant='outlined'
            className='absolute top-0 left-full -ml-px'
          >
            <CardActionArea
              disabled={isEdit}
              color='inherit'
              onClick={() => {
                setOpen({ open: 'delete', index });
              }}
            >
              <Close />
            </CardActionArea>
          </Card>
          <SelectCard
            id={index}
            setCompletedCard={setCompletedCard}
            completedCard={completedCard}
          />
        </Box>
      ))}

      {writeValues.options && writeValues.options?.length <= 9 && <EmptyCard />}

      <Button
        fullWidth
        loading={createAddMutation.isPending}
        variant='contained'
        color='success'
        size='large'
        disabled={isEdit}
        onClick={handleAddPosting}
      >
        {isEdit ? '수정모드' : '작성완료'}
      </Button>

      <AddDeleteModal
        open={open}
        setOpen={setOpen}
        setCompletedCard={setCompletedCard}
        completedCard={completedCard}
      />

      <AddSuccessModal open={open} setOpen={setOpen} />

      <AddNoUserModal open={open} setOpen={setOpen} />

      <FailedSnackBar isSnackBar={isSnackBar} setIsSnackBar={setIsSnackBar} />
    </Box>
  );
};
