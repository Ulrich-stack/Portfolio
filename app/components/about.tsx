import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaFilePdf } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

export default function About() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => setCopiedText(`Copié : ${text}`),
      () => setCopiedText(`Erreur : Impossible de copier ${text}`)
    );
  };

  const handleMouseEnter = (cardId: string) => {
    setHoveredCard(cardId);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  useEffect(() => {
    const timer = setTimeout(() => setCopiedText(null), 2000);
    return () => clearTimeout(timer);
  }, [copiedText]);

  return (
    <motion.section
      id="about"
      className="py-12 px-4 sm:px-8 md:px-20 lg:px-40 xl:px-80 bg-primary text-textMain"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInVariants}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <h2 className="text-4xl font-bold mt-8 mb-8 text-center">À propos de moi</h2>
      <div className="w-12 h-1 bg-accentPink mx-auto mb-8 rounded"></div>

      {copiedText && (
        <motion.div
          initial={{ opacity: 0, x: 20, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 20, y: 20 }}
          className="fixed bottom-8 right-8 bg-accentPink text-primary text-sm px-4 py-2 rounded shadow-lg z-50"
        >
          {copiedText}
        </motion.div>
      )}

      <div className="flex flex-col md:flex-row gap-y-8 md:gap-y-0 md:gap-x-8">
        <div className="space-y-4 text-sm leading-relaxed text-textMain md:w-2/3">
          <div className="text-justify">
            Je suis actuellement en première année de Cycle d'ingénieurs à l'
            <strong>
              <a href="https://eilco.univ-littoral.fr/" target="_blank" className="underline">
                École d'Ingénieurs du Littoral Côte d'Opale (EILCO)
              </a>
            </strong>{" "}
            et je recherche une alternance de 2 ans en développement informatique, avec un
            rythme souhaité de{" "}
            <strong>2 semaines en entreprise suivies de 2 semaines de cours</strong>.
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
            En 2023, j'ai effectué un <strong>stage de 3 mois</strong> en tant que développeur frontend qui m'a permis d'améliorer mes techniques
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
            onClick={() => copyToClipboard('+33 7 78 00 84 36')}
            onMouseEnter={() => handleMouseEnter('phone')}
            onMouseLeave={handleMouseLeave}
          >
            <FaPhoneAlt className="text-accentPink text-4xl" />
            <span className="text-accentPink font-semibold">+33 7 78 00 84 36</span>
            {hoveredCard === 'phone' && (
              <span className="text-sm text-accentPink">Cliquez pour copier</span>
            )}
          </div>
          <div
            className="bg-secondary p-4 rounded-lg shadow-lg flex flex-col items-center space-y-2 cursor-pointer hover:bg-primary transition-all duration-200 ease-in-out"
            onClick={() => copyToClipboard('cocossouu1@gmail.com')}
            onMouseEnter={() => handleMouseEnter('email')}
            onMouseLeave={handleMouseLeave}
          >
            <FaEnvelope className="text-accentPink text-4xl" />
            <span className="text-accentPink font-semibold">cocossouu1@gmail.com</span>
            {hoveredCard === 'email' && (
              <span className="text-sm text-accentPink">Cliquez pour copier</span>
            )}
          </div>
          <div
            className="bg-secondary p-4 rounded-lg shadow-lg flex flex-col items-center space-y-2"
          >
            <MdLocationOn className="text-accentPink text-4xl" />
            <span className="text-accentPink font-semibold text-center">
              Calais (62100), Evry-Courcouronnes (91000)
            </span>
          </div>
          <a
            href="/COCOSSOU Ulrich CV 2.pdf"
            download="COCOSSOU_Ulrich_CV.pdf"
            className="bg-secondary p-4 rounded-lg shadow-lg flex flex-col items-center space-y-2 cursor-pointer hover:bg-primary transition-all duration-200 ease-in-out"
          >
            <FaFilePdf className="text-accentPink text-4xl" />
            <span className="text-accentPink font-semibold text-center">
              Curriculum Vitae
            </span>
          </a>
        </div>
      </div>
    </motion.section>
  );
}
