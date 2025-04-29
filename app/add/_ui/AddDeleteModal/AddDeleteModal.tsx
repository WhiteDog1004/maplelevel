import { useWriteStore } from '@/store/useWriteValueStore';
import { Box, Button, Card, Modal, Typography } from '@mui/material';
import Image from 'next/image';
import type { Dispatch, SetStateAction } from 'react';

interface AddDeleteModalProps {
  open: {
    open: 'success' | 'delete' | 'noUser' | undefined;
    index: number | undefined;
  };
  setOpen: Dispatch<SetStateAction<AddDeleteModalProps['open']>>;
  completedCard: number[];
  setCompletedCard: Dispatch<SetStateAction<AddDeleteModalProps['completedCard']>>;
}

export const AddDeleteModal = ({
  open,
  setOpen,
  setCompletedCard,
  completedCard,
}: AddDeleteModalProps) => {
  // 모달 핸들러
  const handleCloseModal = () => {
    setOpen({ open: undefined, index: undefined });
  };

  const { writeValues, setWriteValues } = useWriteStore();
  const handleDeleteSelectCard = (index?: number) => {
    setCompletedCard(
      completedCard
        .filter((num) => num !== index)
        .map((item) => (item > (index || 0) ? item - 1 : item))
    );
    setWriteValues({
      job: writeValues.job,
      huntType: writeValues.huntType,
      title: writeValues.title,
      options: writeValues.options?.filter((_, i) => i !== index),
    });
    handleCloseModal();
  };

  return (
    <Modal open={open.open === 'delete'} onClose={handleCloseModal}>
      <Card
        variant='outlined'
        className='flex flex-col items-center gap-4 p-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
      >
        <Image width={44} height={37} src={'/images/husky/hungry_0.png'} alt='husky' />
        <Typography color='error'>해당 사냥터를 삭제하시겠어요?</Typography>
        <Box className='flex flex-row w-full gap-2'>
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
        </Box>
      </Card>
    </Modal>
  );
};
