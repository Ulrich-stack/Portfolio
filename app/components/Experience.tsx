import { experiences } from "../data";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <Reveal>
        <p className="eyebrow">Expérience</p>
        <h2 className="h2">Là où j'ai fait mes preuves</h2>
      </Reveal>

      <div className="mt-12 space-y-10">
        {experiences.map((exp) => (
          <Reveal key={exp.company}>
            <article className="card p-6 sm:p-8">
              <header className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-display text-2xl font-semibold">{exp.company}</h3>
                  <p className="text-accent">{exp.role}</p>
                </div>
                <div className="text-sm text-muted sm:text-right">
                  <p className="font-mono">{exp.period}</p>
                  <p>{exp.place}</p>
                </div>
              </header>

              <p className="mt-5 text-sm leading-relaxed text-muted">{exp.context}</p>

              <div className="mt-6 space-y-6">
                {exp.missions.map((m, i) => (
                  <div key={m.title} className="border-l-2 border-line pl-5">
                    <p className="font-mono text-xs text-accent2">MISSION {i + 1}</p>
                    <h4 className="mt-1 font-medium text-ink">{m.title}</h4>
                    <p className="text-sm italic text-muted">{m.role}</p>
                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink/80">
                      {m.points.map((p) => (
                        <li key={p} className="flex gap-3">
                          <span aria-hidden className="mt-2 h-1 w-1 flex-none rounded-full bg-accent" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {m.stack.map((s) => (
                        <li key={s} className="chip">
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
