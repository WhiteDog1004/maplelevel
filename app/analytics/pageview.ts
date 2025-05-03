export const pageview = (url: string) => {
  window.gtag?.('config', 'G-6MX8X1VL4E', {
    page_path: url,
  });
};
