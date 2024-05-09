"use client";

import * as React from "react";
import {
  environments,
  tools,
  frameworks,
  langages,
  databases,
} from "../../public/data";
import SkillsComponent from "./skillsComponent";

export default function Skills() {
  const [value, setValue] = React.useState({ number: 1, tab: langages });

  return (
    <section id="skills" className="py-12 px-4 md:px-20 lg:px-80 bg-primary text-sm">
      <h2 className="text-4xl font-bold mb-8 text-center text-textMain">Compétences</h2>
      <div className="w-12 h-1 bg-accentPink mx-auto mb-8 rounded"></div>

      <div className="flex flex-wrap justify-center gap-2 animate-fadeIn">
        <button
          className={`p-2 uppercase transition duration-200 ease-in-out hover:text-white ${
            value.number === 1 ? "bg-accentBlue text-white rounded-md" : "bg-secondary text-textSecondary rounded-md"
          }`}
          onClick={() => setValue({ number: 1, tab: langages })}
        >
          Langages
        </button>
        <button
          className={`p-2 uppercase transition duration-200 ease-in-out hover:text-white ${
            value.number === 2 ? "bg-accentBlue text-white rounded-md" : "bg-secondary text-textSecondary rounded-md"
          }`}
          onClick={() => setValue({ number: 2, tab: frameworks })}
        >
          Frameworks
        </button>
        <button
          className={`p-2 uppercase transition duration-200 ease-in-out hover:text-white ${
            value.number === 3 ? "bg-accentBlue text-white rounded-md" : "bg-secondary text-textSecondary rounded-md"
          }`}
          onClick={() => setValue({ number: 3, tab: databases })}
        >
          Bases de données
        </button>
        <button
          className={`p-2 uppercase transition duration-200 ease-in-out hover:text-white ${
            value.number === 4 ? "bg-accentBlue text-white rounded-md" : "bg-secondary text-textSecondary rounded-md"
          }`}
          onClick={() => setValue({ number: 4, tab: tools })}
        >
          Outils
        </button>
        <button
          className={`p-2 uppercase transition duration-200 ease-in-out hover:text-white ${
            value.number === 5 ? "bg-accentBlue text-white rounded-md" : "bg-secondary text-textSecondary rounded-md"
          }`}
          onClick={() => setValue({ number: 5, tab: environments })}
        >
          Environnements
        </button>
      </div>
      <div className="mt-4">
        <SkillsComponent skillsTab={value.tab} />
      </div>
    </section>
  );
}
