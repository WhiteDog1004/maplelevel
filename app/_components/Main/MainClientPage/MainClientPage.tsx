'use client';

import { MainSNB } from '../MainSNB';
import { UserInformation } from '../UserInformation';

export const MainClientPage = () => {
  return (
    <div className='flex flex-col max-w-80 w-full md:flex-row relative gap-4 justify-center'>
      <MainSNB />
      <UserInformation />
    </div>
  );
};
