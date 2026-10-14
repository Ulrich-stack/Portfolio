import { notFound } from "next/navigation";
import { getContent, isLang } from "../content";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Parcours from "../components/Parcours";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home({ params }: { params: { lang: string } }) {
  if (!isLang(params.lang)) notFound();
  const lang = params.lang;
  const t = getContent(lang);

  return (
    <>
      <Header lang={lang} t={t} />
      <main>
        <Hero t={t} />
        <Skills t={t} />
        <Parcours t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
