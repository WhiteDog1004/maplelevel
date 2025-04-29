import type { Database } from '@/types_db';

export type huntTypes = 'all' | 'meso' | 'exp';
export type partyTypes = 'all' | 'party' | 'solo';

export interface WriteValueOptions {
  job?: string;
  title?: string;
  huntType?: huntTypes;
  options?: {
    uuid?: string;
    minimap?: string;
    mapCode?: number;
    minLevel?: number;
    maxLevel?: number;
    place?: number;
    partyType?: partyTypes;
    caption?: string;
    mobs?: number[];
  }[];
}

export type SearchInfoTypes = {
  titleFilter?: string;
  title?: string;
  writer?: string;
  job: string;
  level: number;
  type: string;
  partyType?: string;
  sort?: string;
  page?: number;
};

export interface ListDetailOptions {
  list: Database['public']['Tables']['recommend-list']['Row'];
}

export interface NoticeOptions {
  id: number;
  uuid: string;
  writer: {
    uuid: string;
    avatar_url: string;
    nickname: string;
  };
  created_at: string;
  type: string;
  isTop: boolean;
  title: string;
  content: string;
  updated_at?: string;
}
