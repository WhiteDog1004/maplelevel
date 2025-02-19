import { MuiThemeProvider } from "@/config/MuiThemeProvider";
import ReactQueryClientProvider from "@/config/ReactQueryClientProvider";
import { SITE_TITLE } from "@/utils/string";
import type { Metadata } from "next";
import { IBM_Plex_Sans_KR } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans_KR({
	weight: ["300", "400", "700"],
	display: "swap",
});

export const metadata: Metadata = {
	title: SITE_TITLE,
	description: "maple-level",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko">
			<head>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
					integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
					crossOrigin="anonymous"
					referrerPolicy="no-referrer"
				/>
			</head>
			<body className={ibmPlexSans.className}>
				<MuiThemeProvider>
					<ReactQueryClientProvider>
						<div className="bg-zinc-700">{children}</div>
					</ReactQueryClientProvider>
				</MuiThemeProvider>
			</body>
		</html>
	);
}
