"use client";
import { useDarkModeStore } from "@/store/useDarkModeStore";
import { createTheme, ThemeProvider } from "@mui/material";

export const MuiThemeProvider = ({ children }: React.PropsWithChildren) => {
	const { darkMode } = useDarkModeStore();

	const theme = createTheme({
		typography: {
			fontFamily: "IBM Plex Sans KR, sans-serif", // ✅ 기본 폰트 변경
		},
		palette: {
			mode: darkMode ? "dark" : "light",
		},
	});
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
