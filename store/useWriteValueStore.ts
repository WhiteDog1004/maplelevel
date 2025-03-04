import { WriteValueOptions } from '@/types/add';
import { v4 as uuidv4 } from 'uuid';
import { create } from 'zustand';

interface WriteStore {
  writeValues: WriteValueOptions;
  setWriteValues: (newWriteValues: Partial<WriteValueOptions>) => void;
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
      caption: undefined,
      mapCode: undefined,
      mobs: undefined,
    },
  ],
};

export const useWriteStore = create<WriteStore>((set) => ({
  writeValues: initialValues,
  setWriteValues: (newWriteValues) =>
    set((state) => ({ writeValues: { ...state.writeValues, ...newWriteValues } })),
  resetWriteValues: () => set({ writeValues: initialValues }),
}));
