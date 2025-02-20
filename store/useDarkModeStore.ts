import { create } from "zustand";

type DarkModeState = {
	darkMode: boolean;
	toggleDarkMode: () => void;
	setDarkMode: (value: boolean) => void;
};

export const useDarkModeStore = create<DarkModeState>((set) => ({
	darkMode: true,
	toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
	setDarkMode: (value) => set({ darkMode: value }),
}));
