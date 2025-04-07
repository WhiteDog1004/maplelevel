import { Box } from '@mui/material';
import { PrivacyClientPage } from './_components/PrivacyClientPage';

const PrivacyPage = () => {
  return (
    <Box className='w-full min-h-screen relative max-w-5xl m-auto h-full flex flex-row justify-center'>
      <PrivacyClientPage />
    </Box>
  );
};

export default PrivacyPage;
