import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="about"
      className="container py-12 px-4 sm:px-8 md:px-20 lg:px-40 xl:px-80"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInVariants}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <h2 className="text-4xl font-bold mb-8 text-center text-textMain">
        À propos de moi
      </h2>
      <div className="w-12 h-1 bg-accentPink mx-auto mb-8 rounded"></div>

      <div className="space-y-4 text-sm leading-relaxed text-textMain">
        <div className="text-justify">
          Je suis actuellement en première année de cycle d'ingénieurs à l'
          <strong>École d'ingénieurs du Littoral Côte d'Opale (EILCO)</strong> et
          je recherche une alternance de deux ans en développement, avec un
          rythme souhaité de{" "}
          <strong>2 semaines de cours suivies de 2 semaines en entreprise</strong>.
        </div>
        <div className="text-justify">
          Je suis titulaire d'une <strong>licence en informatique</strong> et j'ai
          également effectué une année en
          <strong> Master 1 Data Science</strong>. Ce parcours m'a permis
          d'acquérir des connaissances solides en développement logiciel et en
          science des données. Cependant, j'ai décidé de me concentrer sur le
          développement web, une passion que j'ai cultivée tout au long de mon
          parcours académique.
        </div>
        <div className="text-justify">
          Durant mes études, j'ai appris plusieurs technologies, notamment{" "}
          <strong>ReactJS, NextJS, Angular</strong>, et <strong>Spring</strong>.
          En 2023, j'ai effectué un stage de 3 mois qui m'a permis d'améliorer mes
          techniques de développement tout en découvrant les ficelles du métier
          de développeur web au sein d'une équipe. Durant cette période, j'ai
          également développé mon esprit d'équipe.
        </div>
        <div className="text-justify">
          De plus, je suis <strong>méticuleux</strong>,{" "}
          <strong>créatif</strong> et je m'adapte rapidement aux changements, en
          particulier aux nouvelles technologies.
        </div>
        <div className="text-justify">
          Je souhaite rejoindre une entreprise dynamique où je pourrais apprendre
          auprès de développeurs confirmés et participer à des projets innovants.
          Je suis motivé à contribuer activement au succès d'une équipe tout en
          continuant à développer mes compétences en travaillant sur des projets
          stimulants et variés.
        </div>
      </div>
    </motion.section>
  );
}
