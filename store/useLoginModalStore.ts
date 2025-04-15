import { create } from 'zustand';

type LoginModalState = {
  isLoginModal: boolean;
  setIsLoginModal: (value: boolean) => void;
};

export const useLoginModalStore = create<LoginModalState>((set) => ({
  isLoginModal: false,
  setIsLoginModal: (value) => set({ isLoginModal: value }),
}));
