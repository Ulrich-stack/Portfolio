/* eslint-disable react/no-unescaped-entities */

'use client'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Skills from "./components/skills";
import Parcours from "./components/parcours";
import Projects from "./components/projects";
import Contact from "./components/contact";
import About from "./components/about";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="bg-primary text-textMain">
      <nav
        className={`fixed top-0 left-0 w-full z-10 p-4 transition-all duration-300 ease-in-out ${
          scrolled ? "bg-black/70 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="flex justify-end gap-x-4 text-sm uppercase tracking-wide">
          <a
            href="#about"
            className="hover:text-accentPink transition-colors duration-200 ease-in-out"
          >
            À propos
          </a>
          <a
            href="#skills"
            className="hover:text-accentPink transition-colors duration-200 ease-in-out"
          >
            Compétences
          </a>
          <a
            href="#parcours"
            className="hover:text-accentPink transition-colors duration-200 ease-in-out"
          >
            Parcours
          </a>
          <a
            href="#projects"
            className="hover:text-accentPink transition-colors duration-200 ease-in-out"
          >
            Projets
          </a>
          <a
            href="#contact"
            className="hover:text-accentPink transition-colors duration-200 ease-in-out"
          >
            Contacter
          </a>
        </div>
      </nav>
      <section
        className="relative h-screen bg-fixed bg-cover bg-center text-white"
        style={{
          backgroundImage: "url(/images/image.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          className="relative gap-y-3 h-full flex flex-col justify-center items-center text-center z-10"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <h1 className="text-5xl font-extrabold uppercase tracking-wider">
            Salut, Je suis <span className="text-accentPink">COCOSSOU ULRICH</span>
          </h1>
          <h2 className="text-5xl mt-4">Développeur Web Fullstack</h2>
          <a
            href="#contact"
            className="mt-6 px-6 py-2 bg-primary hover:bg-secondary text-white font-bold uppercase rounded-md shadow-lg hover:shadow-xl transition-shadow duration-200"
          >
            Contacter
          </a>
        </motion.div>
      </section>
      <About />
      <Skills />
      <Parcours />
      <Projects />
      <Contact />
    </main>
  );
}
