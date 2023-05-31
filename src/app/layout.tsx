import './globals.css';
import { fonts } from '@/fonts/fonts';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata = {
  title: 'Aloga',
  description: 'a website to promote tourism in Hawaii',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fonts.ibmPlexMono.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
