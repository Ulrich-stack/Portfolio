/* eslint-disable react/no-unescaped-entities */


'use client'
import { motion } from "framer-motion";
import Skills from "./components/skills";
import Parcours from "./components/parcours";
import Projects from "./components/projects";
import Contact from "./components/contact";

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
            className="mt-6 px-6 py-2 bg-primary text-white font-bold uppercase rounded-md shadow-lg hover:shadow-xl transition-shadow duration-200"
          >
            Contacter
          </a>
        </motion.div>
      </header>
      <motion.section
        id="about"
        className="container p-12 w-screen md:px-80"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInVariants}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <h2 className="text-4xl font-bold mb-8 text-center">À propos de moi</h2>
      <div className="w-12 h-1 bg-accentPink mx-auto mb-8 rounded"></div>

        <div className="space-y-4 text-sm leading-relaxed">
          <div className="text-justify">
            Je suis actuellement en première année de cycle d'ingénieurs à l'
            <strong>École d'ingénieurs du Littoral Côte d'Opale (EILCO)</strong>
            et je recherche une alternance de deux ans en développement, avec un
            rythme souhaité de{" "}
            <strong>
              2 semaines de cours suivies de 2 semaines en entreprise
            </strong>.
          </div>
          <div className="text-justify">
            Je suis titulaire d'une <strong>licence en informatique</strong> et
            j'ai également effectué une année en
            <strong> Master 1 Data Science</strong>. Ce parcours m'a permis
            d'acquérir des connaissances solides en développement logiciel et en
            science des données. Cependant, j'ai décidé de me concentrer sur le
            développement web, une passion que j'ai cultivée tout au long de mon
            parcours académique.
          </div>
          <div className="text-justify">
            Durant mes études, j'ai appris plusieurs technologies, notamment{" "}
            <strong>ReactJS, NextJS, Angular</strong>, et{" "}
            <strong>Spring</strong>. En 2023, j'ai effectué un stage de 3 mois
            qui m'a permis d'améliorer mes techniques de développement tout en
            découvrant les ficelles du métier de développeur web au sein d'une
            équipe. Durant cette période, j'ai également développé mon esprit
            d'équipe.
          </div>
          <div className="text-justify">
            De plus, je suis <strong>méticuleux</strong>,{" "}
            <strong>créatif</strong> et je m'adapte rapidement aux changements,
            en particulier aux nouvelles technologies.
          </div>
          <div className="text-justify">
            Je souhaite rejoindre une entreprise dynamique où je pourrais
            apprendre auprès de développeurs confirmés et participer à des
            projets innovants. Je suis motivé à contribuer activement au succès
            d'une équipe tout en continuant à développer mes compétences en
            travaillant sur des projets stimulants et variés.
          </div>
        </div>
      </motion.section>
      <Skills />
      <Parcours />
      <Projects />
      <Contact/>
    </main>
  );
}
