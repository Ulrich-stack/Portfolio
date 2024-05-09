import Image from "next/image";
import { motion } from "framer-motion";

interface Skills {
  name: string;
  image: string;
}

interface SkillsProps {
  skillsTab: Skills[];
}

export default function SkillsComponent({ skillsTab }: SkillsProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skillsTab" className="container pt-4 text-sm">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {skillsTab.map((skills) => (
          <motion.div
            key={skills.name}
            variants={cardVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex items-center bg-secondary rounded-lg p-4 shadow hover:shadow-lg transition duration-300 ease-in-out hover:cursor-pointer"
          >
            <Image
              src={skills.image}
              width={30}
              height={30}
              alt={skills.name}
            />
            <h1 className="ml-3 font-semibold text-textMain">{skills.name}</h1>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
