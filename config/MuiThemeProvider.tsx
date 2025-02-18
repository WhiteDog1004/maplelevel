"use client";
import { createTheme, ThemeProvider } from "@mui/material";

export const MuiThemeProvider = ({ children }: React.PropsWithChildren) => {
	const theme = createTheme({
		typography: {
			fontFamily: "IBM Plex Sans KR, serif",
		},
	});
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
