import type { Content } from "./types";

export const fr: Content = {
  meta: {
    title: "Ulrich Cocossou, ingénieur développeur Full Stack",
    description:
      "Ulrich Cocossou, ingénieur développeur Full Stack (Java Spring Boot, Angular, IA générative). Disponible en CDI.",
  },
  header: {
    aria: "Navigation principale",
    skills: "Compétences",
    journey: "Parcours",
    contact: "Contact",
    cv: "CV",
    switchLabel: "EN",
    switchTitle: "Read this site in English",
  },
  cvHref: "/CV_Ulrich_COCOSSOU.pdf",
  hero: {
    available: "Disponible en CDI",
    role: "Ingénieur Full Stack",
    text: "Ingénieur full stack passionné par le web et l'IA, je conçois des applications de bout en bout, de la maquette au déploiement. Je recherche aujourd'hui un CDI pour rejoindre une équipe et continuer à construire des produits solides.",
    ctaTalk: "Parlons CDI",
    ctaCv: "Télécharger mon CV",
    location: "Calais (62100)",
    artLink: "Voir le parcours en détail ↓",
    artLinkAria: "Voir mon parcours en détail",
  },
  art: {
    aria: "Courbe ascendante : étudiant à Porto-Novo de 2019 à 2023, étudiant ingénieur à l'EILCO de 2023 à 2026, alternance chez AG2R de 2024 à 2026, puis un CDI recherché",
    nodes: [
      { label: "Porto-Novo", status: "Étudiant", dates: "2019 – 2023" },
      { label: "EILCO", status: "Étudiant ingénieur", dates: "2023 – 2026" },
      { label: "AG2R", status: "Alternance", dates: "2024 – 2026" },
      { label: "CDI", status: "à la recherche" },
    ],
  },
  skills: {
    titlePre: "Ce que je ",
    titleEm: "maîtrise",
    groups: [
      {
        title: "Architecture & Ingénierie",
        items: ["Architecture hexagonale", "Domain-Driven Design", "API REST", "Full Stack", "Tests & non-régression"],
      },
      { title: "Langages", items: ["TypeScript", "JavaScript", "Java", "Python", "SQL", "PHP", "C / C++"] },
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
    ],
    languagesTitle: "Langues",
    languages: [
      { name: "Français", level: "Maternel" },
      { name: "Anglais", level: "C1 · TOEIC 960" },
      { name: "Italien", level: "A1" },
    ],
  },
  journey: {
    titlePre: "Mon parcours, ",
    titleEm: "en une ligne",
    intro: "Du plus récent au plus ancien. Plus la courbe monte, plus on se rapproche d'aujourd'hui.",
    legend: { job: "Expérience", school: "Formation", projects: "Projets" },
    now: "Maintenant",
    nextPre: "La suite : ",
    nextEm: "un CDI",
    nextText: "Je cherche une équipe où mettre mon expérience en Java, Angular et IA générative au service de vrais produits.",
    nextCta: "Écrivez-moi",
    schoolStatus: [
      "Étudiant ingénieur, en alternance chez AG2R de sept. 2024 à sept. 2026",
      "Formation en ligne, en cours",
      "Étudiant",
      "Étudiant",
    ],
    projectsPeriod: "2024 – 2026 · en parallèle",
    projectsTitle: "Projets personnels",
    projectsIntro: "Pour explorer l'IA générative, le RAG et les interfaces temps réel.",
    moreCodePre: "Plus de code sur",
    moreCodeMid: ", par exemple",
    and: " et ",
    experiences: [
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
    ],
    education: [
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
    ],
    projects: [
      {
        title: "Plateforme Low-code générative",
        year: "2026",
        description:
          "Génération automatique de structures de pages et de contenus à partir d'un simple prompt, puis personnalisation en temps réel dans un éditeur drag & drop. Un moteur de templates Spring Boot transforme les designs IA en HTML/CSS propre.",
        stack: ["Angular", "Spring Boot", "OpenAI"],
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
        description: "Plateforme de simulation : suivi des cours, achat/vente virtuels et analyse des tendances.",
        stack: ["Angular", "CoinGecko API"],
      },
    ],
    repos: [
      { name: "Views-Builder", href: "https://github.com/Ulrich-stack/Views-Builder", note: "Low-code drag & drop (MithrilJS)" },
      { name: "Tasks-manager", href: "https://github.com/Ulrich-stack/Tasks-manager", note: "Gestion de tâches (Next.js, PostgreSQL)" },
      { name: "minesweeper-c-eilco", href: "https://github.com/Ulrich-stack/minesweeper-c-eilco", note: "Démineur en C" },
    ],
  },
  contact: {
    titlePre: "Parlons-en",
    text: "L'envie d'échanger : écrivez-moi, je réponds vite.",
    namePlaceholder: "Votre nom",
    nameLabel: "Nom",
    emailPlaceholder: "Votre e-mail",
    emailLabel: "E-mail",
    messagePlaceholder: "Votre message",
    messageLabel: "Message",
    send: "Envoyer",
    sending: "Envoi…",
    success: "Message envoyé, merci.",
    error: "L'envoi a échoué, écrivez-moi directement par e-mail.",
  },
  footer: { top: "Retour en haut" },
};
