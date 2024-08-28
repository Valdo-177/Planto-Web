import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Planto Web",
  description: "Breath Natural",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/HADA%2Fplanto-Preview.png?alt=media&token=5b555c36-d262-45fa-bdba-4c47c0a66807"></meta>
        <meta property="og:site_name" content="Link preview site name"></meta>
        <meta property="og:title" content="Planto Web"></meta>
        <meta property="og:description" content="Breath Natural" />
        <meta property="og:url" content="https://framer-website-ten.vercel.app/"></meta>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
