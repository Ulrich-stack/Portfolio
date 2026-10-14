export const profile = {
  name: "Ulrich COCOSSOU",
  title: "Ingénieur Développeur Full Stack",
  tagline: "Java Spring Boot · Angular · IA générative",
  email: "cocossouu1@gmail.com",
  phone: "+33 7 78 00 84 36",
  location: "Calais (62100)",
  linkedin: "https://www.linkedin.com/in/ulrich-cocossou-41a68a24a/",
  github: "https://github.com/Ulrich-stack",
  cv: "/CV_Ulrich_COCOSSOU.pdf",
  summary:
    "Ingénieur Développeur Full Stack spécialisé dans la modernisation de systèmes d'information critiques et l'intégration de l'IA. J'interviens sur tout le cycle de vie logiciel, de la conception UX et du cadrage jusqu'à l'architecture, aux tests et au déploiement, pour livrer des solutions performantes, testables et centrées sur l'utilisateur.",
};

export const experiences = [
  {
    company: "AG2R LA MONDIALE",
    role: "Ingénieur Développeur Full Stack (Alternance)",
    period: "Sept. 2024 – Sept. 2026",
    place: "Mons-en-Barœul",
    context:
      "Au sein de la DSID, programme de plateformisation des outils d'avant-vente : projet « Optimum V2 », remplacement d'une application client lourd monolithique par une solution Web cloud moderne, sécurisée et API-First.",
    missions: [
      {
        title: "Refonte technique et portage des moteurs de calcul legacy",
        role: "Développeur Backend / Architecte logiciel",
        points: [
          "Migration d'un monolithe de plus de 15 ans (C#.NET) vers Java 17 et Spring Boot.",
          "Architecture hexagonale stricte : modélisation du domaine, Value Objects, inversion de dépendances via ports et adaptateurs.",
          "Méthodologie de portage par IA générative (Claude, GitHub Copilot) : 6 « skills » qui automatisent la traduction de code, l'audit de fidélité et la documentation.",
          "Portage et exposition en API REST de trois moteurs métier complexes : Fiscal/Social, Retraite multi-régimes et Prévoyance.",
          "Tests unitaires avec oracle XML pour garantir la non-régression numérique des calculs.",
          "CI/CD sans intervention manuelle : Jenkins, SonarQube, images Docker, déploiement cloud.",
        ],
        stack: ["Java 17", "Spring Boot", "Hexagonal", "Jenkins", "SonarQube", "Docker", "SQLite"],
      },
      {
        title: "Développement Frontend et UX/UI",
        role: "Ingénieur Web Frontend & UI",
        points: [
          "Maquettes Figma conciliant densité d'information métier et modernisation visuelle (écran de saisie à 7 onglets).",
          "Harnais de test et de restitution Angular pour valider de bout en bout les moteurs (fiche de paie, charges TNS, droits à la retraite).",
          "« Ligne de Vie » : composant SVG dynamique d'analyse de revenus, construit avec D3.js.",
          "Interfaçage avec les API Spring Boot via la gestion d'état réactive (RxJS).",
        ],
        stack: ["Angular", "RxJS", "D3.js", "Figma"],
      },
      {
        title: "Cadrage fonctionnel, gestion de projet et IA",
        role: "Assistant SI / Concepteur",
        points: [
          "Rédaction du cahier des charges et des notes de cadrage du projet « Découverte universelle du besoin ».",
          "Animation d'ateliers avec les directions métiers (Business Owner, Product Manager, Business Partners).",
          "Maquettes UX du module omnicanal de vue client 360°.",
          "R&D en Prompt Engineering pour ALMIA, un assistant conversationnel de préconisation de produits basé sur les données CRM.",
        ],
        stack: ["Prompt Engineering", "LLM", "UX", "Gestion de projet"],
      },
    ],
  },
  {
    company: "Startup ALITCHA",
    role: "Développeur Web Frontend (Stage)",
    period: "Juin 2023 – Août 2023",
    place: "Bénin / Remote",
    context: "Dashboard de gestion des ventes.",
    missions: [
      {
        title: "Dashboard de gestion de ventes",
        role: "Développeur Web Frontend",
        points: [
          "Interface de gestion réactive pour les utilisateurs finaux avec Next.js.",
          "Spécifications techniques et fonctionnelles rédigées en lien direct avec les fondateurs.",
          "Intégration d'API REST pour des flux de données en temps réel et gestion de l'état global.",
        ],
        stack: ["Next.js", "REST"],
      },
    ],
  },
];

export const skillGroups = [
  {
    title: "Architecture & Ingénierie",
    items: ["Architecture hexagonale", "Domain-Driven Design", "API REST", "Full Stack", "Tests & non-régression"],
  },
  {
    title: "Langages",
    items: ["TypeScript", "JavaScript", "Java", "Python", "SQL", "PHP", "C / C++"],
  },
  {
    title: "Frameworks & librairies",
    items: ["Spring Boot", "Angular", "RxJS", "React", "Next.js", "Django", "Node.js", "D3.js"],
  },
  {
    title: "IA & Data",
    items: ["Prompt Engineering", "LLM / OpenAI", "LangChain", "RAG", "Pandas", "Scikit-learn"],
  },
  {
    title: "DevOps & outils",
    items: ["Jenkins", "SonarQube", "Docker", "CI/CD", "Git", "Figma", "SQLite", "SQL Server"],
  },
];

export const projects = [
  {
    title: "Plateforme Low-code générative",
    year: "2026",
    description:
      "Génération automatique de structures de pages et de contenus à partir d'un simple prompt, puis personnalisation en temps réel dans un éditeur drag & drop. Un moteur de templates Spring Boot transforme les designs IA en HTML/CSS propre.",
    stack: ["Angular", "Spring Boot", "OpenAI"],
    featured: true,
  },
  {
    title: "Chatbot intelligent & RAG",
    year: "2025",
    description:
      "Agent conversationnel qui utilise la technique RAG pour extraire et synthétiser des informations précises à partir d'une base d'articles.",
    stack: ["Django", "LangChain", "RAG"],
  },
  {
    title: "Suivi de vols en direct",
    year: "2025",
    description:
      "Interface de suivi de vols en temps réel avec cartes interactives et statistiques mondiales sur le trafic aérien et les aéroports.",
    stack: ["Angular", "FlightRadar API"],
  },
  {
    title: "Simulateur de trading crypto",
    year: "2024",
    description:
      "Plateforme de simulation : suivi des cours, achat/vente virtuels et analyse des tendances.",
    stack: ["Angular", "CoinGecko API"],
  },
];

export const otherRepos = [
  { name: "Views-Builder", href: "https://github.com/Ulrich-stack/Views-Builder", note: "Low-code drag & drop (MithrilJS)" },
  { name: "Tasks-manager", href: "https://github.com/Ulrich-stack/Tasks-manager", note: "Gestion de tâches (Next.js, PostgreSQL)" },
  { name: "minesweeper-c-eilco", href: "https://github.com/Ulrich-stack/minesweeper-c-eilco", note: "Démineur en C" },
];

export const education = [
  {
    school: "EILCO",
    degree: "Diplôme d'Ingénieur en Informatique",
    focus: "Spécialité Intelligence Artificielle",
    period: "Sept. 2023 – Sept. 2026",
    place: "Calais",
  },
  {
    school: "IBM (via Coursera)",
    degree: "Certificat professionnel",
    focus: "Generative AI Engineering",
    period: "2026 · en cours",
    place: "En ligne",
  },
  {
    school: "IMSP (Bénin)",
    degree: "Master 1 en Data Science",
    focus: "",
    period: "Oct. 2022 – Juin 2023",
    place: "Porto-Novo",
  },
  {
    school: "IMSP (Bénin)",
    degree: "Classes préparatoires & Licence Informatique",
    focus: "MPSI",
    period: "Sept. 2019 – Août 2022",
    place: "Porto-Novo",
  },
];

export const languages = [
  { name: "Français", level: "Maternel" },
  { name: "Anglais", level: "C1 · TOEIC 960" },
  { name: "Italien", level: "A1" },
];

export type MilestoneKind = "cdi" | "job" | "school" | "projects";

export const milestones: { id: string; kind: MilestoneKind; level: number; ref?: number }[] = [
  { id: "cdi", kind: "cdi", level: 1 },
  { id: "ibm", kind: "school", level: 0.9, ref: 1 },
  { id: "ag2r la mondiale", kind: "job", level: 0.8, ref: 0 },
  { id: "alitcha", kind: "job", level: 0.68, ref: 1 },
  { id: "projets", kind: "projects", level: 0.55 },
  { id: "eilco", kind: "school", level: 0.42, ref: 0 },
  { id: "master", kind: "school", level: 0.22, ref: 2 },
  { id: "licence", kind: "school", level: 0, ref: 3 },
];
