"use client";
import { createTheme, ThemeProvider } from "@mui/material";

export const MuiThemeProvider = ({ children }: React.PropsWithChildren) => {
	const theme = createTheme({
		palette: {
			mode: "dark",
		},
	});
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
