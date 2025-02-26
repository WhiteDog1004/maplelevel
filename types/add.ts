import { Dispatch, SetStateAction } from 'react';

export type huntTypes = 'all' | 'meso' | 'exp';
export type partyTypes = 'all' | 'party' | 'solo';

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
    mapCode?: number;
    minLevel?: number;
    maxLevel?: number;
    partyType?: partyTypes;
    caption?: string;
  }[];
}
