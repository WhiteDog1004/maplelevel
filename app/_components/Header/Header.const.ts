import { SITE_MAP } from '@/utils/sitemap';

export const MENU_LISTS = [
  {
    label: '사냥터 리스트',
    link: SITE_MAP.LIST,
  },
  {
    label: '사냥터 추천하기',
    link: SITE_MAP.ADD,
    needLogin: true,
  },
  {
    label: '사냥터 빠른검색',
    link: SITE_MAP.QUICK_SEARCH,
  },
];
