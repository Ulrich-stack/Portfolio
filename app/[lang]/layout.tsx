import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";

const serif = Fraunces({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-serif" });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Ulrich Cocossou, ingénieur développeur Full Stack",
  description:
    "Ulrich Cocossou, ingénieur développeur Full Stack (Java Spring Boot, Angular, IA générative). Disponible en CDI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${serif.variable} ${body.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
