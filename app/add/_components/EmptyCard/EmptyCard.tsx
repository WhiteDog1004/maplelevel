import { useWriteStore } from '@/store/useWriteValueStore';
import { AddCircle, Lock } from '@mui/icons-material';
import { Box, Card, CardActionArea, CardContent, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const EmptyCard = () => {
  const { writeValues, setWriteValues, isEdit } = useWriteStore();
  const [isAddCard, setIsAddCard] = useState(false);

  useEffect(() => {
    const lastOption = writeValues.options?.slice(-1)[0];
    if (
      lastOption !== undefined &&
      (!lastOption?.mapCode ||
        !lastOption?.minLevel ||
        !lastOption?.maxLevel ||
        !lastOption?.place ||
        !lastOption?.partyType)
    ) {
      return setIsAddCard(true);
    }
    setIsAddCard(false);
  }, [writeValues]);

  return (
    <Card
      variant='outlined'
      className='w-full h-max'
      onClick={() => {
        if (isAddCard || isEdit) return;
        setWriteValues({
          job: writeValues.job,
          huntType: writeValues.huntType,
          title: writeValues.title,
          options: [
            ...(writeValues.options ?? []),
            {
              uuid: uuidv4(),
              minLevel: undefined,
              maxLevel: undefined,
              partyType: undefined,
              caption: undefined,
              mapCode: undefined,
            },
          ],
        });
      }}
    >
      <CardActionArea>
        <CardContent className='flex flex-col w-full px-20 py-6 gap-2 justify-center items-center'>
          <Box className="absolute inset-0 bg-[url('/images/mushroom_travel.png')] bg-[length:200px_auto] bg-no-repeat bg-right opacity-30" />
          {isAddCard || isEdit ? (
            <Lock />
          ) : (
            <AddCircle className='text-zinc-600 hover:text-zinc-800' />
          )}
          {isAddCard || isEdit ? (
            <Typography textAlign='center' variant='caption' color='textSecondary'>
              사냥터를 추가 하시려면
              <br />
              <Stack direction='row'>
                먼저 생성된 사냥터 카드에 [
                <Typography variant='caption' color='success'>
                  확정
                </Typography>
                ] 버튼을 눌러주세요
              </Stack>
            </Typography>
          ) : (
            <Typography textAlign='center' variant='caption' color='textSecondary'>
              이곳을 눌러
              <br />
              사냥터를 추가해 보세요!
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
