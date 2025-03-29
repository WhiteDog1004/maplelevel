import { create } from 'zustand';

interface ListPaginationProps {
  page: number;
  setPage: (page: number) => void;
}

export const useListPaginationStore = create<ListPaginationProps>((set) => ({
  page: 1,
  setPage: (page) => set({ page }),
}));
