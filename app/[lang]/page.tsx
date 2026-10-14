import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Parcours from "./components/Parcours";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Parcours />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
