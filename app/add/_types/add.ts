import { huntTypes, partyTypes } from '@/types/common';
import { Dispatch, SetStateAction } from 'react';

export interface RecommendMapProps {
  recommendMap: {
    minimap: string;
    code: number;
    label: string;
  };
  setRecommendMap: Dispatch<SetStateAction<RecommendMapProps['recommendMap']>>;
}

export interface WriteValueOptions {
  job?: string;
  title?: string;
  huntType?: huntTypes;
  options?: {
    uuid?: string;
    mapCode?: number;
    minLevel?: number;
    maxLevel?: number;
    partyType?: partyTypes;
    caption?: string;
    mobs?: number[];
  }[];
}
