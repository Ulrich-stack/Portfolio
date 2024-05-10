/* eslint-disable react/no-unescaped-entities */

'use client'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import Skills from "./components/skills";
import Parcours from "./components/parcours";
import Projects from "./components/projects";
import Contact from "./components/contact";
import About from "./components/about";
import Footer from "./components/footer";
import "./globals.css";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <main className="bg-primary text-textMain">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-20 p-4 transition-all duration-300 ease-in-out ${
          scrolled ? "bg-black/70 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center">
          <a href="/" className="font-bold text-xl text-accentPink">
            COCOSSOU Ulrich
          </a>
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-3xl text-white hover:text-accentPink focus:outline-none"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          {/* Full-size Navbar */}
          <div className="hidden sm:flex gap-x-4 text-sm uppercase tracking-wide">
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
        </div>
        {/* Dropdown Menu */}
        <motion.div
          className={`mt-4 p-4 flex flex-col bg-black/80 sm:hidden rounded-lg ${
            menuOpen ? "block" : "hidden"
          }`}
          initial="hidden"
          animate={menuOpen ? "visible" : "hidden"}
          variants={menuVariants}
        >
          <a
            href="#about"
            className="py-2 uppercase hover:text-accentPink transition-colors duration-200 ease-in-out"
            onClick={closeMenu}
          >
            À propos
          </a>
          <a
            href="#skills"
            className="py-2 uppercase hover:text-accentPink transition-colors duration-200 ease-in-out"
            onClick={closeMenu}
          >
            Compétences
          </a>
          <a
            href="#parcours"
            className="py-2 uppercase hover:text-accentPink transition-colors duration-200 ease-in-out"
            onClick={closeMenu}
          >
            Parcours
          </a>
          <a
            href="#projects"
            className="py-2 uppercase hover:text-accentPink transition-colors duration-200 ease-in-out"
            onClick={closeMenu}
          >
            Projets
          </a>
          <a
            href="#contact"
            className="py-2 uppercase hover:text-accentPink transition-colors duration-200 ease-in-out"
            onClick={closeMenu}
          >
            Contacter
          </a>
        </motion.div>
      </nav>

      {/* Section d'introduction */}
      <section
        className="relative h-screen bg-cover bg-center text-white"
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
          <h1 className=" text-3xl lg:text-3xl">Salut, Je suis </h1>
          <h1 className="text-5xl font-extrabold uppercase tracking-wider">
            <span className="text-accentPink">COCOSSOU ULRICH</span>
          </h1>
          <div className="text-3xl mt-4 animation">
            <div className="first">
              <div>Développeur Fullstack</div>
              <div>Développeur Front-end</div>
            </div>
          </div>
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
      <Footer />
    </main>
  );
}
