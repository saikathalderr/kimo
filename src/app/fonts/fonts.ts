import { IBM_Plex_Mono } from 'next/font/google';
import localFont from 'next/font/local';

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin-ext', 'vietnamese'],
  weight: ['300', '400', '500', '600', '700'],
});

const greycliffCF = localFont({
  src: './greycliffcf-bold.otf',
  display: 'swap',
});

export const fonts = {
  ibmPlexMono,
  greycliffCF,
};
