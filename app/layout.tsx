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
  description: '메이플랜드에서 사냥터가 고민될 땐? 레벨지지',
  keywords: ['메렙지지', '레벨지지', '메이플레벨지지', 'levelgg'],
  creator: 'WolfDog',
  // openGraph: {
  //   title: SITE_TITLE,
  //   description: '메이플랜드에서 사냥터가 고민될 땐? 레벨지지',
  //   url: 'https://maplelevel.gg',
  //   siteName: '레벨지지',
  //   images: [
  //     {
  //       url: 'https://your-site.com/og-image.jpg',
  //       width: 1200,
  //       height: 630,
  //       alt: '이미지 설명',
  //     },
  //   ],
  //   locale: 'ko_KR',
  //   type: 'website',
  // },
  other: {
    'google-adsense-account': 'ca-pub-3851224465271826',
  },
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
