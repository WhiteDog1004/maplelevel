import { useMinimap } from '@/hooks/api';
import { useDarkModeStore } from '@/store/useDarkModeStore';
import { useWriteStore } from '@/store/useWriteValueStore';
import { MAP_CODE } from '@/utils/mapCode';
import { EditNote, FactCheck } from '@mui/icons-material';
import { Box, Button, Card, Typography } from '@mui/material';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
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
  const { writeValues, isEditPage, isEdit, setIsEdit } = useWriteStore();
  const [editNum, setEditNum] = useState<number | undefined>(undefined);
  const [recommendMap, setRecommendMap] = useState<RecommendMapProps['recommendMap']>({
    minimap: writeValues.options?.[id].minimap || '',
    code:
      (isEditPage && writeValues?.options?.[id]?.mapCode) ||
      writeValues?.options?.[id]?.mapCode ||
      0,
    label:
      (isEditPage &&
        MAP_CODE.find((map) => map.code === writeValues?.options?.[id]?.mapCode)
          ?.kor.split(':')[1]
          ?.trimStart()) ||
      '',
  });

  const handleClickEditCard = (num: number) => {
    setIsEdit(true);
    setEditNum(num);
    setCompletedCard(completedCard.filter((item) => item !== num));
  };

  const { data: minimap, refetch } = useMinimap({
    code: isEditPage ? MAP_CODE.filter((map) => map.kor.includes(recommendMap.label))[0].code : 0,
    uuid: recommendMap.label,
    enabled: false,
  });

  useEffect(() => {
    if (!isEditPage || !minimap || recommendMap.code === 0) return;
    setRecommendMap({
      ...recommendMap,
      minimap: minimap.url,
    });
  }, [minimap]);

  useEffect(() => {
    if (id !== completedCard.length) {
      refetch();
    }
  }, []);

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
        <SelectMap id={id} recommendMap={recommendMap} setRecommendMap={setRecommendMap} />
        {minimap && <SelectMob id={id} recommendMap={recommendMap} />}
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
