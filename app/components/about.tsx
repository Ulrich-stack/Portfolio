import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaFilePdf} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
export default function About() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => alert(`Copié : ${text}`),
      () => alert(`Erreur : Impossible de copier ${text}`)
    );
  };

  return (
    <motion.section
      id="about"
      className="container py-12 px-4 sm:px-8 md:px-20 lg:px-40 xl:px-80 bg-primary text-textMain"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInVariants}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <h2 className="text-4xl font-bold mb-8 text-center">À propos de moi</h2>
      <div className="w-12 h-1 bg-accentPink mx-auto mb-8 rounded"></div>
      <div className="flex flex-col md:flex-row gap-y-8 md:gap-y-0 md:gap-x-8">
        <div className="space-y-4 text-sm leading-relaxed text-textMain md:w-2/3">
          <div className="text-justify">
            Je suis actuellement en première année de cycle d'ingénieurs à l'
            <strong>
              École d'ingénieurs du Littoral Côte d'Opale (EILCO)
            </strong>{" "}
            et je recherche une alternance de deux ans en développement, avec un
            rythme souhaité de{" "}
            <strong>2 semaines de cours suivies de 2 semaines en entreprise</strong>.
          </div>
          <div className="text-justify">
            Je suis titulaire d'une <strong>licence en informatique</strong> et
            j'ai également effectué une année en <strong>Master 1 Data Science</strong>.
            Ce parcours m'a permis d'acquérir des connaissances solides en développement
            logiciel et en science des données. Cependant, j'ai décidé de me concentrer
            sur le développement web, une passion que j'ai cultivée tout au long de mon
            parcours académique.
          </div>
          <div className="text-justify">
            Durant mon parcours académique et personnel, j'ai appris plusieurs langages et technologies.
            En 2023, j'ai effectué un <strong>stage de 3 mois</strong> en tant que développeur qui m'a permis d'améliorer mes techniques
            de développement tout en découvrant les ficelles du métier de développeur web
            au sein d'une équipe.
          </div>
          <div className="text-justify">
            De plus, je suis <strong>méticuleux</strong>, <strong>créatif</strong> et
            je m'adapte rapidement aux changements, en particulier aux nouvelles technologies.
          </div>
          <div className="text-justify">
            Je souhaite rejoindre une entreprise dynamique où je pourrais apprendre auprès
            de développeurs confirmés et participer à des projets innovants. Je suis motivé
            à contribuer activement au succès d'une équipe tout en continuant à développer
            mes compétences en travaillant sur des projets stimulants et variés.
          </div>
        </div>
        <div className="md:w-1/3 flex flex-col gap-y-4">
          <div
            className="bg-secondary p-4 rounded-lg shadow-lg flex flex-col items-center space-y-2 cursor-pointer hover:bg-primary transition-all duration-200 ease-in-out"
            onClick={() => copyToClipboard('+33 6 30 96 21 02')}
          >
            <FaPhoneAlt className="text-accentPink text-4xl" />
            <span className="text-accentPink font-semibold">+33 7 78 00 84 36</span>
          </div>
          <div
            className="bg-secondary p-4 rounded-lg shadow-lg flex flex-col items-center space-y-2 cursor-pointer hover:bg-primary transition-all duration-200 ease-in-out"
            onClick={() => copyToClipboard('cocossouu1@gmail.com')}
          >
            <FaEnvelope className="text-accentPink text-4xl" />
            <span className="text-accentPink font-semibold">cocossouu1@gmail.com</span>
          </div>
          <div
            className="bg-secondary p-4 rounded-lg shadow-lg flex flex-col items-center space-y-2 cursor-pointer hover:bg-primary transition-all duration-200 ease-in-out"
          >
            <MdLocationOn className="text-accentPink text-4xl" />
            <span className="text-accentPink font-semibold text-center">
              Calais (62100), Evry-Courcouronnes (91000)
            </span>
          </div>
          <a
            href="/COCOSSOU Ulrich CV 2.pdf" // Assurez-vous que le chemin est correct
            download="COCOSSOU_Ulrich_CV.pdf" // Nom sous lequel le fichier sera téléchargé
            className="bg-secondary p-4 rounded-lg shadow-lg flex flex-col items-center space-y-2 cursor-pointer hover:bg-primary transition-all duration-200 ease-in-out"
          >
            <FaFilePdf className="text-accentPink text-4xl" />
            <span className="text-accentPink font-semibold text-center">
              Télécharger mon CV
            </span>
          </a>
        </div>
      </div>
    </motion.section>
  );
}
