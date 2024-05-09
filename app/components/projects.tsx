import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Application de développement Low-Code",
    description:
      "Création d'une interface permettant à l'utilisateur de construire et personnaliser des vues par simple glisser-déposer de balises HTML",
    technologies: ["MithrilJS", "TailwindCSS"],
    github: "https://github.com/Ulrich-stack/Views-Builder",
  },
  {
    title: "Application de Gestion de tâches",
    description:
      "Développement d'une application web pour une gestion effective des tâches",
    technologies: ["NextJS", "TailwindCSS", "PostgreSQL"],
    github: "https://github.com/Ulrich-stack/Tasks-manager",
  },
  {
    title: "Application de Gestion d'Étudiants",
    description:
      "Il s'agit d'un projet académique qui a consisté à développer une application web pour gérer les étudiants d'une classe",
    technologies: ["NextJS", "Express", "MongoDB"],
    // github: "https://github.com/your-username/student-management-app",
  },
  {
    title: "Le jeu Le démineur",
    description:
      "Le jeu le démineur en console, écrit en langage C. Il suit parfaitement les règles du jeu et possède ses fonctionnalités.",
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
      className="p-12 md:px-80 bg-primary text-sm"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInVariants}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <h2 className="text-4xl font-bold mb-8 text-center text-textMain">Projets</h2>
      <div className="w-12 h-1 bg-accentPink mx-auto mb-8 rounded"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </motion.section>
  );
}
