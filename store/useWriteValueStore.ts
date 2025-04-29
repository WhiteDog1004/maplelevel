import type { WriteValueOptions } from '@/types/common';
import { v4 as uuidv4 } from 'uuid';
import { create } from 'zustand';

interface WriteStore {
  isEdit: boolean;
  isEditPage: boolean;
  writeValues: WriteValueOptions;
  setWriteValues: (newWriteValues: Partial<WriteValueOptions>) => void;
  setIsEdit: (edit: boolean) => void;
  setIsEditPage: (edit: boolean) => void;
  resetWriteValues: () => void;
}

const initialValues: WriteValueOptions = {
  title: undefined,
  job: undefined,
  huntType: undefined,
  options: [
    {
      uuid: uuidv4(),
      minLevel: undefined,
      maxLevel: undefined,
      partyType: undefined,
      place: undefined,
      timeExpType: undefined,
      timeExp: undefined,
      caption: undefined,
      mapCode: undefined,
      mobs: undefined,
    },
  ],
};

export const useWriteStore = create<WriteStore>((set) => ({
  isEdit: false,
  isEditPage: false,
  writeValues: initialValues,
  setWriteValues: (newWriteValues) =>
    set((state) => ({ writeValues: { ...state.writeValues, ...newWriteValues } })),
  resetWriteValues: () => set({ writeValues: initialValues }),
  setIsEdit: (edit) => set(() => ({ isEdit: edit })),
  setIsEditPage: (edit) => set(() => ({ isEditPage: edit })),
}));
