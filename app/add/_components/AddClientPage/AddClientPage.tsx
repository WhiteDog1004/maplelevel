'use client';

import { createLists } from '@/actions/listActions';
import { useWriteStore } from '@/store/useWriteValueStore';
import { Close } from '@mui/icons-material';
import { Button, Card, CardActionArea, Modal, Typography } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { EmptyCard } from '../EmptyCard';
import { SelectCard } from '../SelectCard';
import { TitleInformation } from '../TitleInformation';

export const AddClientPage = () => {
  const router = useRouter();
  const { writeValues, setWriteValues, resetWriteValues } = useWriteStore();
  const [open, setOpen] = useState<{
    open: 'success' | 'delete' | undefined;
    index: number | undefined;
  }>({
    open: undefined,
    index: undefined,
  });

  const createAddMutation = useMutation({
    mutationFn: () =>
      createLists(writeValues, {
        uuid: 'test',
        nickname: 'test',
      }),

    onSuccess: () => {
      setOpen({
        open: 'success',
        index: open.index,
      });
    },
  });

  const handleCloseModal = () => {
    setOpen({ open: undefined, index: undefined });
  };

  const handleDeleteSelectCard = (index?: number) => {
    setWriteValues({
      job: writeValues.job,
      huntType: writeValues.huntType,
      title: writeValues.title,
      options: writeValues.options?.filter((_, i) => i !== index),
    });
    handleCloseModal();
  };

  const handleAddPosting = () => {
    const lastOption = writeValues.options?.slice(-1)[0];
    if (
      !writeValues.huntType ||
      !writeValues.job ||
      !writeValues.title ||
      (lastOption !== undefined &&
        (!lastOption?.mapCode ||
          !lastOption?.minLevel ||
          !lastOption?.maxLevel ||
          !lastOption?.partyType))
    ) {
      return console.log('작성실패');
    }
    createAddMutation.mutate();
  };

  return (
    <div className='w-full flex flex-col gap-6 items-center p-10 max-w-3xl'>
      <div className='flex flex-col gap-1'>
        <Typography variant='body2' color='textSecondary'>
          당신이 걸어오셨던 여정을 공유해 보세요
        </Typography>
        <Typography variant='h3'>사냥터 추천</Typography>
      </div>
      <TitleInformation />
      {writeValues.options?.map((list, index) => (
        <div className='relative w-full' key={`select-card-${list.uuid}`}>
          <Card
            sx={{
              border: 'none',
              borderStartStartRadius: 0,
              borderEndStartRadius: 0,
            }}
            variant='outlined'
            className='absolute top-0 left-full'
          >
            <CardActionArea
              color='inherit'
              onClick={() => {
                setOpen({ open: 'delete', index });
              }}
            >
              <Close />
            </CardActionArea>
          </Card>
          <SelectCard id={index} />
        </div>
      ))}

      {writeValues.options && writeValues.options?.length <= 9 && <EmptyCard />}

      <Button fullWidth variant='contained' color='success' size='large' onClick={handleAddPosting}>
        작성완료
      </Button>

      <Modal open={open.open === 'delete'} onClose={handleCloseModal}>
        <Card
          variant='outlined'
          className='flex flex-col gap-4 p-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        >
          <Typography color='error'>해당 사냥터를 삭제하시겠어요?</Typography>
          <div className='flex flex-row gap-2'>
            <Button fullWidth variant='outlined' onClick={handleCloseModal}>
              취소
            </Button>
            <Button
              fullWidth
              variant='outlined'
              color='error'
              onClick={() => handleDeleteSelectCard(open.index)}
            >
              확인
            </Button>
          </div>
        </Card>
      </Modal>

      <Modal open={open.open === 'success'} onClose={handleCloseModal}>
        <Card
          variant='outlined'
          className='flex flex-col gap-4 p-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        >
          <Typography textAlign='center'>
            작성해주셔서 감사합니다!
            <br />
            지금 바로 목록에 가서 확인해 보세요!
          </Typography>
          <div className='flex flex-row gap-2'>
            <Button
              fullWidth
              variant='outlined'
              color='success'
              onClick={() => {
                router.push('/list');
                resetWriteValues();
                handleCloseModal();
              }}
            >
              확인
            </Button>
          </div>
        </Card>
      </Modal>
    </div>
  );
};
