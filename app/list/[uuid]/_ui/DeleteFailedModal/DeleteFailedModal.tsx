import { Box, Button, Card, Modal, Typography } from '@mui/material';
import Image from 'next/image';
import type { Dispatch, SetStateAction } from 'react';
import { ModalCardStyles } from '../../_constants/constants';
import type { DeletedModalTypes } from '../../_types/types';

interface DeleteFailedModalProps {
  open: DeletedModalTypes;
  setOpen: Dispatch<SetStateAction<DeleteFailedModalProps['open']>>;
}

export const DeleteFailedModal = ({ open, setOpen }: DeleteFailedModalProps) => {
  const handleCloseModal = () => {
    setOpen(undefined);
  };

  return (
    <Modal open={open === 'failed'} onClose={handleCloseModal}>
      <Card variant='outlined' className={ModalCardStyles}>
        <Typography variant='h5' color='error'>
          삭제 실패
        </Typography>
        <Image width={44} height={37} src={'/images/husky/cry_0.png'} alt='husky' />
        <Typography variant='body2' textAlign='center'>
          비정상적으로 접근했거나
          <br />
          서버에 문제가 생긴 것 같아요!
        </Typography>
        <Box className='flex flex-row gap-2 w-full'>
          <Button
            fullWidth
            variant='outlined'
            color='warning'
            onClick={() => {
              handleCloseModal();
            }}
          >
            확인
          </Button>
        </Box>
      </Card>
    </Modal>
  );
};
