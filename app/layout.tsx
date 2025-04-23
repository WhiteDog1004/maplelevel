import { DarkMode } from '@/config/DarkMode';
import { MuiThemeProvider } from '@/config/MuiThemeProvider';
import ReactQueryClientProvider from '@/config/ReactQueryClientProvider';
import { SITE_TITLE } from '@/utils/string';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Header } from './_components/Header';
import { LoginModal } from './_components/LoginModal';
import './globals.css';

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: 'maple-level',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css'
          integrity='sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=='
          crossOrigin='anonymous'
          referrerPolicy='no-referrer'
        />
      </head>
      <body className={pretendard.className}>
        <DarkMode>
          <MuiThemeProvider>
            <ReactQueryClientProvider>
              <div className='dark:bg-zinc-700 bg-white dark:text-white min-w-96'>
                <Header />
                {children}
                <LoginModal />
              </div>
            </ReactQueryClientProvider>
          </MuiThemeProvider>
        </DarkMode>
      </body>
    </html>
  );
}
