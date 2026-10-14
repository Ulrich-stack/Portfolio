import type { Content } from "./types";

export const en: Content = {
  meta: {
    title: "Ulrich Cocossou, Full Stack Engineer",
    description:
      "Ulrich Cocossou, Full Stack Engineer (Java Spring Boot, Angular, generative AI). Open to permanent roles.",
  },
  header: {
    aria: "Main navigation",
    skills: "Skills",
    journey: "Journey",
    contact: "Contact",
    cv: "CV",
    switchLabel: "FR",
    switchTitle: "Voir le site en français",
  },
  cvHref: "/CV_Ulrich_COCOSSOU.pdf",
  hero: {
    available: "Open to permanent roles",
    role: "Full Stack Engineer",
    text: "Full stack engineer passionate about the web and AI, I build applications end to end, from mockup to deployment. I'm now looking for a permanent position to join a team and keep building solid products.",
    ctaTalk: "Let's talk",
    ctaCv: "Download my CV (French)",
    location: "Calais, France",
    artLink: "See my journey in detail ↓",
    artLinkAria: "See my journey in detail",
  },
  art: {
    aria: "Rising curve: student in Porto-Novo from 2019 to 2023, engineering student at EILCO from 2023 to 2026, work-study at AG2R from 2024 to 2026, then a permanent role being sought",
    nodes: [
      { label: "Porto-Novo", status: "Student", dates: "2019 – 2023" },
      { label: "EILCO", status: "Engineering student", dates: "2023 – 2026" },
      { label: "AG2R", status: "Work-study", dates: "2024 – 2026" },
      { label: "Next role", status: "open to offers" },
    ],
  },
  skills: {
    titlePre: "What I ",
    titleEm: "work with",
    groups: [
      {
        title: "Architecture & Engineering",
        items: ["Hexagonal architecture", "Domain-Driven Design", "REST APIs", "Full Stack", "Testing & non-regression"],
      },
      { title: "Languages", items: ["TypeScript", "JavaScript", "Java", "Python", "SQL", "PHP", "C / C++"] },
      {
        title: "Frameworks & libraries",
        items: ["Spring Boot", "Angular", "RxJS", "React", "Next.js", "Django", "Node.js", "D3.js"],
      },
      {
        title: "AI & Data",
        items: ["Prompt Engineering", "LLM / OpenAI", "LangChain", "RAG", "Pandas", "Scikit-learn"],
      },
      {
        title: "DevOps & tools",
        items: ["Jenkins", "SonarQube", "Docker", "CI/CD", "Git", "Figma", "SQLite", "SQL Server"],
      },
    ],
    languagesTitle: "Languages",
    languages: [
      { name: "French", level: "Native" },
      { name: "English", level: "C1 · TOEIC 960" },
      { name: "Italian", level: "A1" },
    ],
  },
  journey: {
    titlePre: "My journey, ",
    titleEm: "in one line",
    intro: "From most recent to oldest. The higher the curve, the closer to today.",
    legend: { job: "Work", school: "Education", projects: "Projects" },
    now: "Now",
    nextPre: "What's next: ",
    nextEm: "a permanent role",
    nextText:
      "I'm looking for a team where I can put my experience in Java, Angular and generative AI to work on real products.",
    nextCta: "Get in touch",
    schoolStatus: [
      "Engineering student, work-study at AG2R from Sep 2024 to Sep 2026",
      "Online programme, in progress",
      "Student",
      "Student",
    ],
    projectsPeriod: "2024 – 2026 · on the side",
    projectsTitle: "Personal projects",
    projectsIntro: "To explore generative AI, RAG and real-time interfaces.",
    moreCodePre: "More code on",
    moreCodeMid: ", for example",
    and: " and ",
    experiences: [
      {
        company: "AG2R LA MONDIALE",
        role: "Full Stack Engineer (Work-study)",
        period: "Sep 2024 – Sep 2026",
        place: "Mons-en-Barœul, France",
        context:
          "Within the IT and Digital department (DSID), part of the pre-sales tools platform programme: the \"Optimum V2\" project replaces a monolithic heavy-client application with a modern, secure, API-first cloud web solution.",
        missions: [
          {
            title: "Technical overhaul and port of legacy calculation engines",
            role: "Backend Developer / Software Architect",
            points: [
              "Migration of a 15+ year-old monolith (C#.NET) to Java 17 and Spring Boot.",
              "Strict hexagonal architecture: domain modelling, Value Objects, dependency inversion through ports and adapters.",
              "Generative-AI porting methodology (Claude, GitHub Copilot): 6 custom \"skills\" automating code translation, fidelity audits and documentation.",
              "Port and REST API exposure of three complex business engines: Tax & Social Security, Multi-scheme Retirement and Protection insurance.",
              "Unit tests with an XML oracle to guarantee the numerical non-regression of the calculations.",
              "Hands-off CI/CD: Jenkins, SonarQube, Docker images, cloud deployment.",
            ],
            stack: ["Java 17", "Spring Boot", "Hexagonal", "Jenkins", "SonarQube", "Docker", "SQLite"],
          },
          {
            title: "Frontend and UX/UI development",
            role: "Frontend & UI Web Engineer",
            points: [
              "Figma mockups balancing dense business information with a modern look (data entry screen with 7 tabs).",
              "Angular test and reporting harness to validate the engines end to end (payslips, self-employed contributions, retirement rights).",
              "\"Life Line\": a dynamic SVG income-analysis component built with D3.js.",
              "Integration with the Spring Boot APIs through reactive state management (RxJS).",
            ],
            stack: ["Angular", "RxJS", "D3.js", "Figma"],
          },
          {
            title: "Functional scoping, project management and AI",
            role: "IT Analyst / Designer",
            points: [
              "Wrote the specification and scoping notes for the \"Universal needs discovery\" project.",
              "Ran workshops with business leadership (Business Owner, Product Manager, Business Partners).",
              "UX mockups for the omnichannel 360° customer view module.",
              "R&D in Prompt Engineering for ALMIA, a conversational assistant that recommends products based on CRM data.",
            ],
            stack: ["Prompt Engineering", "LLM", "UX", "Project management"],
          },
        ],
      },
      {
        company: "Startup ALITCHA",
        role: "Frontend Web Developer (Internship)",
        period: "Jun 2023 – Aug 2023",
        place: "Benin / Remote",
        context: "Sales management dashboard.",
        missions: [
          {
            title: "Sales management dashboard",
            role: "Frontend Web Developer",
            points: [
              "Responsive management interface for end users, built with Next.js.",
              "Technical and functional specifications written in direct contact with the founders.",
              "REST API integration for real-time data flows and global state management.",
            ],
            stack: ["Next.js", "REST"],
          },
        ],
      },
    ],
    education: [
      {
        school: "EILCO",
        degree: "Engineering degree in Computer Science",
        focus: "Artificial Intelligence specialisation",
        period: "Sep 2023 – Sep 2026",
        place: "Calais, France",
      },
      {
        school: "IBM (via Coursera)",
        degree: "Professional Certificate",
        focus: "Generative AI Engineering",
        period: "2026 · in progress",
        place: "Online",
      },
      {
        school: "IMSP (Benin)",
        degree: "Master's Year 1 in Data Science",
        focus: "",
        period: "Oct 2022 – Jun 2023",
        place: "Porto-Novo, Benin",
      },
      {
        school: "IMSP (Benin)",
        degree: "Preparatory classes & Bachelor's in Computer Science",
        focus: "MPSI",
        period: "Sep 2019 – Aug 2022",
        place: "Porto-Novo, Benin",
      },
    ],
    projects: [
      {
        title: "Generative low-code platform",
        year: "2026",
        description:
          "Automatically generates page structures and content from a simple prompt, then lets users customise them in real time in a drag-and-drop editor. A Spring Boot templating engine turns the AI designs into clean HTML/CSS.",
        stack: ["Angular", "Spring Boot", "OpenAI"],
      },
      {
        title: "Intelligent chatbot & RAG",
        year: "2025",
        description:
          "Conversational agent using RAG to extract and summarise precise information from a database of articles.",
        stack: ["Django", "LangChain", "RAG"],
      },
      {
        title: "Live flight tracker",
        year: "2025",
        description:
          "Real-time flight tracking interface with interactive maps and global statistics on air traffic and airports.",
        stack: ["Angular", "FlightRadar API"],
      },
      {
        title: "Crypto trading simulator",
        year: "2024",
        description: "Simulation platform: price tracking, virtual buying and selling, and trend analysis.",
        stack: ["Angular", "CoinGecko API"],
      },
    ],
    repos: [
      { name: "Views-Builder", href: "https://github.com/Ulrich-stack/Views-Builder", note: "Drag-and-drop low-code (MithrilJS)" },
      { name: "Tasks-manager", href: "https://github.com/Ulrich-stack/Tasks-manager", note: "Task manager (Next.js, PostgreSQL)" },
      { name: "minesweeper-c-eilco", href: "https://github.com/Ulrich-stack/minesweeper-c-eilco", note: "Minesweeper in C" },
    ],
  },
  contact: {
    titlePre: "Let's talk",
    text: "Want to chat? Write to me, I reply quickly.",
    namePlaceholder: "Your name",
    nameLabel: "Name",
    emailPlaceholder: "Your email",
    emailLabel: "Email",
    messagePlaceholder: "Your message",
    messageLabel: "Message",
    send: "Send",
    sending: "Sending…",
    success: "Message sent, thank you.",
    error: "Sending failed, please email me directly.",
  },
  footer: { top: "Back to top" },
};
