import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Ulrich COCOSSOU · Ingénieur Développeur Full Stack",
  description:
    "Portfolio d'Ulrich COCOSSOU, ingénieur développeur Full Stack (Java Spring Boot, Angular, IA générative). Disponible en CDI.",
  icons: { icon: "/images/logo.png" },
  openGraph: {
    title: "Ulrich COCOSSOU · Ingénieur Développeur Full Stack",
    description: "Java Spring Boot, Angular, IA générative. Disponible en CDI.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${display.variable} ${mono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
