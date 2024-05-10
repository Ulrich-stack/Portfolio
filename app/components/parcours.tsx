import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import { motion } from 'framer-motion';

export default function Parcours() {
  const timelineItems = [
    {
      period: "Depuis SEPTEMBRE 2023",
      title: "Étudiant en école d'ingénieurs",
      company: "Ecole d'ingénieurs du Littoral Côte d'Opale (EILCO)",
      icon: <SchoolIcon />,
      details: [
        "Préparation du diplôme d'ingénieur option Développement logiciel pour 2026",
        "Création d'une application Web de gestion d'étudiants avec NextJS, Express, SQL",
        "Écriture du jeu Démineur en terminal avec le C",
      ],
      technologies: ["NextJS", "Express", "SQL", "C"],
    },
    {
      period: "Juin 2023 à Août 2023",
      title: "Développeur Front-End en Stage",
      company: "Startup ALITCHA",
      icon: <WorkIcon />,
      details: [
        "Analyse des besoins du client",
        "Participation à la rédaction du cahier des charges",
        "Développement d'application Web avec ReactJS, TailwindCSS",
        "Création d'un Dashboard de gestion des ventes et des employés",
        "Collaboration avec une équipe de développeurs backend et DevOps",
      ],
      technologies: ["ReactJS", "TailwindCSS"],
    },
    {
      period: "Octobre 2022 à Juin 2023",
      title: "Étudiant en Master 1 Data Science",
      company: "IMSP Bénin",
      icon: <SchoolIcon />,
      details: [
        "Découverte de l'IA en général",
        "Création de modèles de prédiction avec Python et Scikit-learn",
        "Découverte du langage R",
        "Réalisation d'un robot capable de sortir tout seul d'un labyrinthe",
        "Écriture d'algorithmes avec le langage C++",
      ],
      technologies: ["Python", "Scikit-learn", "C", "ReactJS", "R", "C++"],
    },
    {
      period: "Septembre 2021 à Août 2022",
      title: "Diplômé d'une Licence en Informatique",
      company: "IMSP Bénin",
      icon: <SchoolIcon />,
      details: [
        "Apprentissage et maîtrise du HTML, CSS, JavaScript, PHP, SQL",
        "Formation autoditacte sur les frameworks JavaScript",
        "Découverte et adoption du Test-Driven-Development TDD",
        "Création de bases de données avec PostgreSQL et MySQL",
        "Création d'une application graphique de gestion d'étudiants avec Java et MySQL",
        "Créations d'images Docker et orchestrations avec Docker Compose",
        "Découverte des diagrammes UML",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "SQL", "Java", "MySQL", "Docker", "ReactJS", "Bootstrap", "MithrilJS"],
    },
    {
      period: "Septembre 2019 à Août 2021",
      title: "Étudiant en Classes Préparatoires MPSI",
      company: "IMSP Bénin",
      icon: <SchoolIcon />,
      details: [
        "Suivi d'un cursus alliant Mathématiques, Physiques et Informatiques",
        "Découverte des algorithmes avec le langage C",
        "Écriture du jeu Échecs en console avec le C",
      ],
      technologies: ["C"],
    },
  ];

  const cardVariants = {
    offscreen: { opacity: 0, x: -50 },
    onscreen: { opacity: 1, x: 0 },
  };

  const dotVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 0.5 } },
  };

  const colors = {
    ReactJS:"bg-[#102C57]",
    NextJS: "bg-[#61dafb]",
    TailwindCSS: "bg-[#06b6d4]",
    PostgreSQL: "bg-[#336791]",
    MongoDB: "bg-[#4db33d]",
    Express: "bg-[#303030]",
    C: "bg-[#14213d]",
    CPlusPlus: "bg-[#00599C]",
    Python: "bg-[#306998]",
    ScikitLearn: "bg-[#F7931E]",
    R: "bg-[#276DC3]",
    HTML: "bg-[#E34F26]",
    CSS: "bg-[#1572B6]",
    JavaScript: "bg-[#F7DF1E]",
    Java: "bg-[#007396]",
    MySQL: "bg-[#4479A1]",
    Docker: "bg-[#0db7ed]",
    SQL:"bg-[#121481]",
    Bootstrap:"bg-[#4D869C]",
    MithrilJS:"bg-[#151515]",
    Default: "bg-secondary text-textSecondary",
  };

  const getBadgeColor = (tech: string) => colors[tech as keyof typeof colors] || colors.Default;

  return (
    <section id="parcours" className="p-12 md:px-80 text-sm bg-primary">
      <h2 className="text-4xl font-bold mb-8 text-center text-textMain">Parcours</h2>
      <div className="w-12 h-1 bg-accentPink mx-auto mb-8 rounded"></div>

      <Timeline>
        {timelineItems.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent className="hidden md:block text-right text-textSecondary font-medium pr-2 w-32">
              {item.period}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={dotVariants}
              >
                <TimelineDot className="bg-accentPink text-white">
                  {item.icon}
                </TimelineDot>
              </motion.div>
              {index < timelineItems.length - 1 && (
                <TimelineConnector className="bg-accentPink" />
              )}
            </TimelineSeparator>
            <TimelineContent>
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                variants={cardVariants}
              >
                <div className="bg-secondary p-6 rounded-lg shadow-lg border border-secondary max-w-xl hover:cursor-pointer mx-4 hover:shadow-2xl transition-shadow duration-300">
                  <h3 className="text-accentPink font-bold text-lg">{item.title}</h3>
                  <p className="text-textSecondary font-bold mb-2">{item.company}</p>
                  <ul className="list-disc ml-6 text-textSecondary">
                    {item.details.map((detail, i) => (
                      <li key={i} className="mb-1">{detail}</li>
                    ))}
                  </ul>
                  <ul className="flex flex-wrap gap-2 mt-4">
                    {item.technologies.map((tech, index) => (
                      <li
                        key={index}
                        className={`text-xs font-semibold px-2 py-1 rounded-full text-textMain ${getBadgeColor(tech)}`}
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </section>
  );
}
