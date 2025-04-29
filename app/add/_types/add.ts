import type { Dispatch, SetStateAction } from 'react';

export interface RecommendMapProps {
  recommendMap: {
    minimap: string;
    code: number;
    label: string;
    isJms?: boolean;
  };
  setRecommendMap: Dispatch<SetStateAction<RecommendMapProps['recommendMap']>>;
}
