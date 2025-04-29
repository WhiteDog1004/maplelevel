import { Box, Button, Card, Modal, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import type { Dispatch, SetStateAction } from 'react';
import { ModalCardStyles } from '../../_constants/constants';
import type { DeletedModalTypes } from '../../_types/types';

interface DeletedModalProps {
  open: DeletedModalTypes;
  setOpen: Dispatch<SetStateAction<DeletedModalProps['open']>>;
}

export const DeletedModal = ({ open, setOpen }: DeletedModalProps) => {
  const router = useRouter();
  const handleCloseModal = () => {
    router.push('/list');
    setOpen(undefined);
  };

  return (
    <Modal open={open === 'success'} onClose={handleCloseModal}>
      <Card variant='outlined' className={ModalCardStyles}>
        <Typography variant='h5' color='warning'>
          삭제 완료
        </Typography>
        <Image width={44} height={37} src={'/images/husky/hungry_0.png'} alt='husky' />
        <Typography variant='body2' textAlign='center'>
          쪼~금 아쉽지만
          <br />
          삭제가 완료됐어요!
          <br />더 멋있는 추천글 기대할게요!
        </Typography>
        <Box className='flex flex-row gap-2 w-full'>
          <Button
            fullWidth
            variant='outlined'
            color='info'
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
