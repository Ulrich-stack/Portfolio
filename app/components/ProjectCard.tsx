import { FaExternalLinkAlt, FaFolder, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  link?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const colors = {
    NextJS: "bg-[#61dafb]",
    TailwindCSS: "bg-[#06b6d4]",
    PostgreSQL: "bg-[#336791]",
    MongoDB: "bg-[#4db33d]",
    Express: "bg-[#303030]",
    MithrilJS: "bg-[#1abc9c]",
    C: "bg-[#14213d]",
    Default: "bg-secondary text-textSecondary",
  };

  const getBadgeColor = (tech: string) =>
    colors[tech as keyof typeof colors] || colors.Default;

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="bg-secondary p-6 rounded-lg shadow-lg hover:cursor-pointer hover:shadow-2xl hover:bg-primary transition-all duration-300 w-full max-w-xs h-80 flex flex-col justify-between overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mt-4">
        <div className="flex justify-between items-center mb-4">
          <FaFolder className="text-accentPink text-3xl" />
          <div className="flex space-x-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-textSecondary hover:text-accentPink text-xl"
              >
                <FaGithub />
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-textSecondary hover:text-accentPink text-xl"
              >
                <FaExternalLinkAlt />
              </a>
            )}
          </div>
        </div>
        <motion.h3
          className={`text-textMain text-xl font-bold mb-2 ${
            isHovered ? "opacity-0 invisible" : "opacity-100 visible"
          } transition-opacity duration-200 ease-in-out`}
          animate={{ height: isHovered ? 0 : "auto" }}
        >
          {project.title}
        </motion.h3>
        <motion.p
          className={`text-textSecondary mb-4 ${
            isHovered ? "line-clamp-none" : "line-clamp-3"
          } transition-all duration-200 ease-in-out`}
          initial={false}
          animate={{
            y: isHovered ? -24 : 0,
            opacity: isHovered ? 1 : 0.6,
            height: isHovered ? "auto" : "3.6rem",
          }}
        >
          {project.description}
        </motion.p>
      </div>
      <ul className="flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
          <li
            key={index}
            className={`text-xs font-semibold px-2 py-1 rounded-full text-textMain ${getBadgeColor(
              tech
            )}`}
          >
            {tech}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ProjectCard;
