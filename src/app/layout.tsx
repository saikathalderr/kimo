import "./globals.css";
import { IBM_Plex_Mono } from "next/font/google";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin-ext", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Aloga",
  description: "a website to promote tourism in Hawaii",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ibmPlexMono.className}>{children}</body>
    </html>
  );
}
