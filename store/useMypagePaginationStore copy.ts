import { create } from 'zustand';

interface MypagePaginationProps {
  page: number;
  setPage: (page: number) => void;
}

export const useMypagePaginationStore = create<MypagePaginationProps>((set) => ({
  page: 1,
  setPage: (page) => set({ page }),
}));
