import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Fraunces, DM_Sans } from "next/font/google";
import { getContent, isLang, locales } from "../content";
import "../globals.css";

const serif = Fraunces({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-serif" });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body" });

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  if (!isLang(params.lang)) return {};
  const t = getContent(params.lang);
  return {
    metadataBase: new URL("https://ulrichcocossou.dev"),
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: params.lang === "fr" ? "/" : "/en",
      languages: { fr: "/", en: "/en", "x-default": "/" },
    },
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      type: "website",
      locale: params.lang === "fr" ? "fr_FR" : "en_US",
    },
  };
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  if (!isLang(params.lang)) notFound();
  return (
    <html lang={params.lang} className={`${serif.variable} ${body.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
