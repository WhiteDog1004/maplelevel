"use client";
import { useDarkModeStore } from "@/store/useDarkModeStore";
import { createTheme, ThemeProvider } from "@mui/material";

export const MuiThemeProvider = ({ children }: React.PropsWithChildren) => {
	const { darkMode } = useDarkModeStore();

	const theme = createTheme({
		palette: {
			mode: darkMode ? "dark" : "light",
		},
	});
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
