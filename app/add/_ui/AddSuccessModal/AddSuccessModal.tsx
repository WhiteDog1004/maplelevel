import { useWriteStore } from '@/store/useWriteValueStore';
import { SITE_MAP } from '@/utils/sitemap';
import { Box, Button, Card, Modal, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import type { Dispatch, SetStateAction } from 'react';

interface AddSuccessModalProps {
  uuid?: string;
  open: {
    open: 'success' | 'delete' | 'noUser' | undefined;
    index: number | undefined;
  };
  setOpen: Dispatch<SetStateAction<AddSuccessModalProps['open']>>;
}

export const AddSuccessModal = ({ uuid, open, setOpen }: AddSuccessModalProps) => {
  const router = useRouter();
  const { isEditPage, resetWriteValues } = useWriteStore();

  // 모달 핸들러
  const handleCloseModal = () => {
    router.push(isEditPage ? `${SITE_MAP.LIST}/${uuid}` : SITE_MAP.LIST);
    resetWriteValues();
    setOpen({ open: undefined, index: undefined });
  };

  return (
    <Modal open={open.open === 'success'} onClose={handleCloseModal}>
      <Card
        variant='outlined'
        className='flex flex-col items-center gap-4 px-8 py-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
      >
        <Typography variant='h5' color='success'>
          작성 완료
        </Typography>
        <Image width={44} height={37} src={'/images/husky/chat_4.png'} alt='husky' />
        <Typography variant='body2' textAlign='center'>
          작성해주셔서 감사합니다!
          <br />
          이 사냥터가 다른 모험가님께
          <br />
          많은 도움이 될 거예요!
        </Typography>
        <Box className='flex flex-row gap-2 w-full'>
          <Button
            fullWidth
            variant='outlined'
            color='success'
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
