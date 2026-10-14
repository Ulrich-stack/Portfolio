export type Lang = "fr" | "en";

export interface Mission {
  title: string;
  role: string;
  points: string[];
  stack: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  place: string;
  context: string;
  missions: Mission[];
}

export interface Project {
  title: string;
  year: string;
  description: string;
  stack: string[];
}

export interface Repo {
  name: string;
  href: string;
  note: string;
}

export interface Education {
  school: string;
  degree: string;
  focus: string;
  period: string;
  place: string;
}

export interface Content {
  meta: { title: string; description: string };
  header: { aria: string; skills: string; journey: string; contact: string; cv: string; switchLabel: string; switchTitle: string };
  cvHref: string;
  hero: {
    available: string;
    role: string;
    text: string;
    ctaTalk: string;
    ctaCv: string;
    location: string;
    artLink: string;
    artLinkAria: string;
  };
  art: { aria: string; nodes: { label: string; status: string; dates?: string }[] };
  skills: {
    titlePre: string;
    titleEm: string;
    groups: { title: string; items: string[] }[];
    languagesTitle: string;
    languages: { name: string; level: string }[];
  };
  journey: {
    titlePre: string;
    titleEm: string;
    intro: string;
    legend: { job: string; school: string; projects: string };
    now: string;
    nextPre: string;
    nextEm: string;
    nextText: string;
    nextCta: string;
    schoolStatus: string[];
    projectsPeriod: string;
    projectsTitle: string;
    projectsIntro: string;
    moreCodePre: string;
    moreCodeMid: string;
    and: string;
    experiences: Experience[];
    education: Education[];
    projects: Project[];
    repos: Repo[];
  };
  contact: {
    titlePre: string;
    text: string;
    namePlaceholder: string;
    nameLabel: string;
    emailPlaceholder: string;
    emailLabel: string;
    messagePlaceholder: string;
    messageLabel: string;
    send: string;
    sending: string;
    success: string;
    error: string;
  };
  footer: { top: string };
}
