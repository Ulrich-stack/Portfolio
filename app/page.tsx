/* eslint-disable react/no-unescaped-entities */


'use client'
import { motion } from "framer-motion";
import Skills from "./components/skills";
import Parcours from "./components/parcours";
import Projects from "./components/projects";
import Contact from "./components/contact";
import About from "./components/about";

export default function Home() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="bg-primary text-textMain">
      <header
        className="relative h-screen bg-fixed bg-cover bg-center text-white"
        style={{
          backgroundImage: "url(/images/image.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative flex p-4 justify-end z-10">
          {/* <a className="font-bold" href="/">
            <strong>COCOSSOU Ulrich</strong>
          </a> */}
          <div className="flex gap-x-2">
            <a href="#about" className="uppercase hover:text-accentPink transition-colors duration-200 ease-in-out">
              À propos
            </a>
            <a href="#skills" className="uppercase hover:text-accentPink transition-colors duration-200 ease-in-out">
              Compétences
            </a>
            <a href="#parcours" className="uppercase hover:text-accentPink transition-colors duration-200 ease-in-out">
              Parcours
            </a>
            <a href="#projects" className="uppercase hover:text-accentPink transition-colors duration-200 ease-in-out">
              Projets
            </a>
            <a href="#contact" className="uppercase hover:text-accentPink transition-colors duration-200 ease-in-out">
              Contacter
            </a>
          </div>
        </div>
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
      </header>
      <About/>
      <Skills />
      <Parcours />
      <Projects />
      <Contact/>
    </main>
  );
}
