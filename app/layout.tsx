import AnalyticsProvider from '@/config/AnalyticsProvider';
import { DarkMode } from '@/config/DarkMode';
import { MuiThemeProvider } from '@/config/MuiThemeProvider';
import ReactQueryClientProvider from '@/config/ReactQueryClientProvider';
import { SITE_TITLE } from '@/utils/string';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Script from 'next/script';
import { Header } from './_components/Header';
import { LoginModal } from './_components/LoginModal';
import './globals.css';

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: `메이플랜드 - ${SITE_TITLE}`,
  description: '메이플랜드에서 사냥터가 고민될 땐? 레벨지지',
  keywords: ['메렙지지', '레벨지지', '메이플레벨지지', 'levelgg'],
  creator: 'WolfDog',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: `메이플랜드 - ${SITE_TITLE}`,
    description: '메이플랜드에서 사냥터가 고민될 땐? 레벨지지',
    url: 'https://maplelevel.gg',
    siteName: '레벨지지',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: 'https://maplelevel.gg/images/maplelevelgg.png',
        width: 1200,
        height: 630,
        alt: '레벨지지 메인 이미지',
      },
    ],
  },
  other: {
    'google-adsense-account': 'ca-pub-3851224465271826',
    'naver-site-verification': '0f6e3554f8d87a1e28b285181233e892020cb2a1',
    'google-site-verification': '03X0baq7nvptAptB-A_EYMNwF_9tEfa_FxSutHHSyMA',
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
        <link rel='preconnect' href='https://maplestory.io' />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css'
          integrity='sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=='
          crossOrigin='anonymous'
          referrerPolicy='no-referrer'
        />
      </head>
      <body className={pretendard.className}>
        <AnalyticsProvider />
        <DarkMode>
          <MuiThemeProvider>
            <ReactQueryClientProvider>
              <div className='dark:from-zinc-700 dark:to-zinc-800 bg-gradient-to-br from-gray-50 to-gray-300 dark:text-white min-w-96'>
                <Header />
                {children}
                <LoginModal />
              </div>
            </ReactQueryClientProvider>
          </MuiThemeProvider>
        </DarkMode>

        <Script async src='https://www.googletagmanager.com/gtag/js?id=G-6MX8X1VL4E'></Script>
        <Script id='google-analytics'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-6MX8X1VL4E');
          `}
        </Script>
      </body>
    </html>
  );
}
