export type huntTypes = 'all' | 'meso' | 'exp';
export type partyTypes = 'all' | 'party' | 'solo';

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

export type SearchInfoTypes = {
  title?: string;
  job: string;
  level: number;
  type: string;
  partyType?: string;
  sort?: string;
};
