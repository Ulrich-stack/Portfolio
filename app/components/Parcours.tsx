import type { ReactNode } from "react";
import { milestones, profile, type MilestoneKind } from "../data";
import type { Content } from "../content";
import LifeLine from "./LifeLine";

type J = Content["journey"];

const tone: Record<MilestoneKind, string> = {
  cdi: "text-ember",
  job: "text-ember",
  school: "text-navy",
  projects: "text-moss",
};

function Period({ kind, children }: { kind: MilestoneKind; children: ReactNode }) {
  return <p className={`text-sm font-medium uppercase tracking-wide ${tone[kind]}`}>{children}</p>;
}

function Job({ j, index }: { j: J; index: number }) {
  const exp = j.experiences[index];
  return (
    <>
      <Period kind="job">{exp.period}</Period>
      <h3 className="mt-1 font-serif text-3xl font-semibold leading-tight sm:text-4xl">{exp.company}</h3>
      <p className="mt-1 text-lg italic">
        {exp.role} · {exp.place}
      </p>
      <p className="mt-4 max-w-prose leading-relaxed text-navy/80">{exp.context}</p>

      <div className="mt-8 space-y-8">
        {exp.missions.map((m) => (
          <div key={m.title} className="border-l-4 border-peach pl-5">
            <h4 className="font-serif text-xl font-semibold">{m.title}</h4>
            <p className="text-sm italic text-navy/70">{m.role}</p>
            <ul className="mt-3 max-w-prose list-disc space-y-1.5 pl-5 leading-relaxed marker:text-orange">
              {m.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <p className="mt-3 text-sm font-medium text-ember">{m.stack.join(" · ")}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function School({ j, index }: { j: J; index: number }) {
  const e = j.education[index];
  return (
    <>
      <Period kind="school">{e.period}</Period>
      <p className="mt-0.5 text-sm font-medium text-ember">{j.schoolStatus[index]}</p>
      <h3 className="mt-1 font-serif text-2xl font-semibold leading-tight sm:text-3xl">{e.school}</h3>
      <p className="mt-1 text-lg">
        {e.degree}
        {e.focus && <span className="italic text-ember">, {e.focus}</span>}
      </p>
      <p className="text-sm text-navy/70">{e.place}</p>
    </>
  );
}

function Projects({ j }: { j: J }) {
  return (
    <>
      <Period kind="projects">{j.projectsPeriod}</Period>
      <h3 className="mt-1 font-serif text-3xl font-semibold leading-tight sm:text-4xl">{j.projectsTitle}</h3>
      <p className="mt-2 max-w-prose text-navy/80">{j.projectsIntro}</p>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        {j.projects.map((p, i) => (
          <article
            key={p.title}
            className={`p-5 ${i === 0 ? "bg-moss text-cream lg:col-span-2" : "bg-sand"}`}
          >
            <p className={`font-serif text-3xl italic ${i === 0 ? "text-peach" : "text-orange"}`}>{p.year}</p>
            <h4 className="mt-1 font-serif text-xl font-semibold">{p.title}</h4>
            <p className={`mt-2 leading-relaxed ${i === 0 ? "max-w-prose text-cream/90" : "text-navy/80"}`}>
              {p.description}
            </p>
            <p className={`mt-3 text-sm font-medium ${i === 0 ? "text-sage" : "text-moss"}`}>{p.stack.join(" · ")}</p>
          </article>
        ))}
      </div>

      <p className="mt-6 text-sm text-navy/80">
        {j.moreCodePre}{" "}
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="link font-medium">
          GitHub
        </a>
        {j.moreCodeMid}{" "}
        {j.repos.map((r, i) => (
          <span key={r.name}>
            <a href={r.href} target="_blank" rel="noopener noreferrer" className="link font-medium">
              {r.name}
            </a>
            {i < j.repos.length - 2 ? ", " : i === j.repos.length - 2 ? j.and : "."}
          </span>
        ))}
      </p>
    </>
  );
}

function Next({ j }: { j: J }) {
  return (
    <>
      <Period kind="cdi">{j.now}</Period>
      <h3 className="mt-1 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
        {j.nextPre}
        <span className="italic text-orange">{j.nextEm}</span>
      </h3>
      <p className="mt-3 max-w-prose text-lg leading-relaxed">{j.nextText}</p>
      <a href="#contact" className="btn mt-6 bg-navy text-cream hover:bg-ember">
        {j.nextCta}
      </a>
    </>
  );
}

export default function Parcours({ t }: { t: Content }) {
  const j = t.journey;
  const items = milestones.map((m) => {
    const i = m.ref ?? 0;
    const content =
      m.kind === "cdi" ? (
        <Next j={j} />
      ) : m.kind === "projects" ? (
        <Projects j={j} />
      ) : m.kind === "job" ? (
        <Job j={j} index={i} />
      ) : (
        <School j={j} index={i} />
      );
    return { id: m.id, kind: m.kind, level: m.level, content };
  });

  return (
    <section id="parcours" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <h2 className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
        {j.titlePre}
        <span className="italic text-orange">{j.titleEm}</span>
      </h2>
      <p className="mt-4 max-w-xl text-navy/80">{j.intro}</p>
      <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-1 text-sm">
        <li className="flex items-center gap-2">
          <span aria-hidden className="h-3 w-3 rounded-full bg-orange" /> {j.legend.job}
        </li>
        <li className="flex items-center gap-2">
          <span aria-hidden className="h-3 w-3 rounded-full bg-navy" /> {j.legend.school}
        </li>
        <li className="flex items-center gap-2">
          <span aria-hidden className="h-3 w-3 rounded-full bg-moss" /> {j.legend.projects}
        </li>
      </ul>

      <div className="mt-14">
        <LifeLine items={items} />
      </div>
    </section>
  );
}
