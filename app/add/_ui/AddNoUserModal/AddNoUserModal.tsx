import { Box, Button, Card, Modal, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import type { Dispatch, SetStateAction } from 'react';

interface AddNouserModalProps {
  open: {
    open: 'success' | 'delete' | 'noUser' | undefined;
    index: number | undefined;
  };
  setOpen: Dispatch<SetStateAction<AddNouserModalProps['open']>>;
}

export const AddNoUserModal = ({ open, setOpen }: AddNouserModalProps) => {
  const router = useRouter();
  const handleCloseModal = () => {
    setOpen({ open: undefined, index: undefined });
  };

  return (
    <Modal open={open.open === 'noUser'} onClose={handleCloseModal}>
      <Card
        variant='outlined'
        className='flex flex-col items-center gap-4 px-8 py-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
      >
        <Typography variant='h5' color='error'>
          로그인이 되어있지 않아요!
        </Typography>
        <Image width={44} height={37} src={'/images/husky/cry_0.png'} alt='husky' />
        <Typography variant='body2' textAlign='center'>
          로그인을 시도하신 후에
          <br />글 작성을 부탁드릴게요!
        </Typography>
        <Box className='flex flex-row gap-2 w-full'>
          <Button
            fullWidth
            variant='outlined'
            color='warning'
            onClick={() => {
              router.push('/');
            }}
          >
            확인
          </Button>
        </Box>
      </Card>
    </Modal>
  );
};
