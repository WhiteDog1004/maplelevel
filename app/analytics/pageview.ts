export const pageview = (url: string) => {
  window.gtag?.('config', 'G-XXXXXXXXXX', {
    page_path: url,
  });
};
