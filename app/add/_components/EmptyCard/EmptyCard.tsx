import { useWriteStore } from '@/store/useWriteValueStore';
import { AddCircle, Lock } from '@mui/icons-material';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
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
          {isAddCard || isEdit ? (
            <Lock />
          ) : (
            <AddCircle className='text-zinc-600 hover:text-zinc-800' />
          )}
          <Typography variant='caption' color='textDisabled'>
            {isAddCard || isEdit
              ? '추가하시려면 먼저 생성한 사냥터를 완성해 주세요'
              : '이곳을 눌러 사냥터를 추가해 보세요'}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
