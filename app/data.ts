export const profile = {
  name: "Ulrich COCOSSOU",
  email: "cocossouu1@gmail.com",
  phone: "+33 7 78 00 84 36",
  linkedin: "https://www.linkedin.com/in/ulrich-cocossou-41a68a24a/",
  github: "https://github.com/Ulrich-stack",
};

export type MilestoneKind = "cdi" | "job" | "school" | "projects";

export const milestones: { id: string; kind: MilestoneKind; level: number; ref?: number }[] = [
  { id: "cdi", kind: "cdi", level: 1 },
  { id: "ibm", kind: "school", level: 0.9, ref: 1 },
  { id: "ag2r", kind: "job", level: 0.8, ref: 0 },
  { id: "alitcha", kind: "job", level: 0.68, ref: 1 },
  { id: "projets", kind: "projects", level: 0.55 },
  { id: "eilco", kind: "school", level: 0.42, ref: 0 },
  { id: "master", kind: "school", level: 0.22, ref: 2 },
  { id: "licence", kind: "school", level: 0, ref: 3 },
];
