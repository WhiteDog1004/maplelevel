import { Box, Button, Card, Modal, Typography } from '@mui/material';
import Image from 'next/image';
import { type Dispatch, type SetStateAction, useEffect, useState } from 'react';
import { ModalCardStyles } from '../../_constants/constants';
import type { DeletedModalTypes } from '../../_types/types';

interface MoreConfirmModalProps {
  open: DeletedModalTypes;
  setOpen: Dispatch<SetStateAction<MoreConfirmModalProps['open']>>;
  handleDelete: () => void;
}

export const MoreConfirmModal = ({ open, setOpen, handleDelete }: MoreConfirmModalProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleCloseModal = () => {
    setOpen(undefined);
    setIsClicked(false);
  };

  useEffect(() => {
    setIsClicked(false);
  }, []);

  return (
    <Modal open={open === 'confirm'} onClose={handleCloseModal}>
      <Card variant='outlined' className={ModalCardStyles}>
        <Typography variant='h5' color='error'>
          삭제하시겠어요?
        </Typography>
        <Image width={44} height={37} src={'/images/husky/cry_0.png'} alt='husky' />
        <Typography variant='body2' textAlign='center'>
          삭제하시면 해당 게시글을
          <br />
          영영 보실 수 없어요!
        </Typography>
        <Box className='flex flex-row gap-2 w-full'>
          <Button fullWidth variant='outlined' color='info' onClick={handleCloseModal}>
            취소
          </Button>
          <Button
            loading={isClicked}
            fullWidth
            variant='outlined'
            color='error'
            onClick={() => {
              handleDelete();
              setIsClicked(true);
            }}
          >
            확인
          </Button>
        </Box>
      </Card>
    </Modal>
  );
};
