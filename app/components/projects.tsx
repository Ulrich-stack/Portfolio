import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Application de développement Low-Code",
    description:
      "Cette application web permet aux utilisateurs de construire des interfaces utilisateur via un système de glisser-déposer. Elle accélère la création de vues HTML grâce à l'intégration de MithrilJS pour sa légèreté et sa rapidité d'exécution.",
    technologies: ["MithrilJS", "TailwindCSS"],
    github: "https://github.com/Ulrich-stack/Views-Builder",
  },
  {
    title: "Application de Gestion de tâches",
    description:
      "Cette application web optimise le suivi et la gestion des tâches quotidiennes. Elle permet aux utilisateurs de créer, modifier, et suivre l'avancement des tâches, intégrant des fonctionnalités comme des notifications et la gestion des priorités. Développée avec NextJS et TailwindCSS pour une interface utilisateur moderne et réactive, elle utilise PostgreSQL pour une gestion robuste des données.",
    technologies: ["NextJS", "TailwindCSS", "PostgreSQL"],
    github: "https://github.com/Ulrich-stack/Tasks-manager",
  },
  {
    title: "Application de Gestion d'Étudiants",
    description:
      "Projet académique visant à faciliter la gestion administrative des étudiants pour les établissements d'enseignement. L'application offre des fonctionnalités comme l'inscription, le suivi des performances, et la gestion des cours. Utilisant NextJS pour le frontend et Express avec MongoDB pour la gestion des données, ce système est conçu pour être sécurisé et évolutif.",
    technologies: ["NextJS", "Express", "MongoDB"],
  },
  {
    title: "Le Démineur",
    description:
      "Réimplémentation du classique jeu de démineur en console. Ce projet respecte les règles traditionnelles du jeu tout en ajoutant des fonctionnalités telles que différents niveaux de difficulté et un compteur de temps. Développé en C, il met en œuvre des algorithmes efficaces pour la génération de grilles et la gestion des événements utilisateur.",
    technologies: ["C"],
    github: "https://github.com/Ulrich-stack/minesweeper-c-eilco",
  },
];


export default function Projects() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="projects"
      className="py-12 px-4 sm:px-8 md:px-20 lg:px-40 xl:px-80 bg-primary text-sm mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInVariants}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <h2 className="text-4xl font-bold mb-8 text-center text-textMain">
        Projets
      </h2>
      <div className="w-12 h-1 bg-accentPink mx-auto mb-8 rounded"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </motion.section>
  );
}
