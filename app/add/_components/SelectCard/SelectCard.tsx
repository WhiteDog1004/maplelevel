import { useDarkModeStore } from '@/store/useDarkModeStore';
import { useWriteStore } from '@/store/useWriteValueStore';
import { EditNote, FactCheck } from '@mui/icons-material';
import { Box, Button, Card, Typography } from '@mui/material';
import { Dispatch, SetStateAction, useState } from 'react';
import { RecommendMapProps } from '../../_types/add';
import { SelectInformation } from '../SelectInformation';
import { SelectMap } from '../SelectMap';
import { SelectMob } from '../SelectMob';

interface SelectCardProps {
  id: number;
  completedCard: number[];
  setCompletedCard: Dispatch<SetStateAction<SelectCardProps['completedCard']>>;
}

export const SelectCard = ({ id, completedCard, setCompletedCard }: SelectCardProps) => {
  const { darkMode } = useDarkModeStore();
  const { isEdit, setIsEdit } = useWriteStore();
  const [editNum, setEditNum] = useState<number | undefined>(undefined);
  const [recommendMap, setRecommendMap] = useState<RecommendMapProps['recommendMap']>({
    minimap: '',
    code: 0,
    label: '',
  });

  const handleClickEditCard = (num: number) => {
    setIsEdit(true);
    setEditNum(num);
    setCompletedCard(completedCard.filter((item) => item !== num));
  };

  return (
    <Card
      variant='outlined'
      sx={{ borderStartEndRadius: 0, border: darkMode ? 'none' : undefined }}
      className='flex flex-col md:flex-row gap-4 w-full justify-between p-4'
    >
      {completedCard.map(
        (num) =>
          num === id && (
            <Box
              key={num}
              className='absolute top-0 left-0 flex justify-center items-center w-full h-full bg-black/50 z-10 rounded-md'
            >
              <Box className='flex flex-col items-center gap-2 p-4 bg-green-300/20 text-white rounded-md border border-green-400'>
                <FactCheck />
                <Typography>작성 완료!</Typography>
                <Button
                  sx={{ gap: 1 }}
                  variant={darkMode ? 'outlined' : 'contained'}
                  color='warning'
                  disabled={isEdit}
                  onClick={() => handleClickEditCard(num)}
                >
                  <EditNote />
                  수정하기
                </Button>
              </Box>
            </Box>
          )
      )}
      {isEdit && id !== editNum && (
        <Box className='absolute top-0 left-0 flex justify-center items-center w-full h-full bg-black/50 z-10 rounded-md' />
      )}
      <Box className='flex-1 h-max flex flex-col gap-2'>
        <SelectMap recommendMap={recommendMap} setRecommendMap={setRecommendMap} />
        <SelectMob id={id} recommendMap={recommendMap} />
      </Box>
      <Box className='flex-1'>
        <SelectInformation
          id={id}
          recommendMap={recommendMap}
          completedCard={completedCard}
          setCompletedCard={setCompletedCard}
        />
      </Box>
    </Card>
  );
};
