import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "COCOSSOU Ulrich",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
      <link rel="icon" href="/images/logo.png" type="image/x-icon"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
