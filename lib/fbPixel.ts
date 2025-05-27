export const FB_PIXEL_ID = '1247537073474403';

declare global {
  interface Window {
    fbq: any;
  }
}



export const contact = () => {
  window.fbq('track', 'Contact');
};