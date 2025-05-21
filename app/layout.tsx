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
  src: '../fonts/Pretendard-Regular.subset.woff2',
  display: 'swap',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: `메이플랜드 - ${SITE_TITLE}`,
  description: '메이플랜드에서 사냥터가 고민될 땐? 레벨지지',
  keywords: [
    '메렙지지',
    '레벨지지',
    '메이플레벨지지',
    'levelgg',
    '메이플랜드',
    '메이플랜드 사냥터',
    '메랜 사냥터',
    '메랜 레벨업',
    '메랜 레벨',
    '메랜 육성법',
  ],
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
    // 'google-adsense-account': 'ca-pub-3851224465271826',
    'naver-site-verification': '0f6e3554f8d87a1e28b285181233e892020cb2a1',
    'google-site-verification': '03X0baq7nvptAptB-A_EYMNwF_9tEfa_FxSutHHSyMA',
    preloadFont: '../fonts/Pretendard-Regular.subset.woff2',
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
          rel='preconnect'
          as='image'
          href='https://www.maplelevel.gg/images/orange_mushroom.webp'
          crossOrigin='anonymous'
        />
        <link rel='preconnect' href='https://maplestory.io' crossOrigin='anonymous' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: '레벨지지',
              url: 'https://maplelevel.gg',
            }),
          }}
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

        <Script async src='https://www.googletagmanager.com/gtag/js?id=G-6MX8X1VL4E' />
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
