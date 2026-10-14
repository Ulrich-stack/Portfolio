import { FiArrowUpRight } from "react-icons/fi";
import { otherRepos, projects } from "../data";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projets" className="section">
      <Reveal>
        <p className="eyebrow">Projets</p>
        <h2 className="h2">R&D personnelle</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Des projets menés en parallèle de mes missions pour explorer l'IA générative, le RAG et les interfaces temps réel.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.08} className={p.featured ? "md:col-span-2" : ""}>
            <article
              className={`card group h-full p-6 transition-colors hover:border-accent/60 sm:p-8 ${
                p.featured ? "bg-gradient-to-br from-surface to-elevated" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className={`font-display font-semibold ${p.featured ? "text-2xl" : "text-xl"}`}>{p.title}</h3>
                <span className="font-mono text-xs text-muted">{p.year}</span>
              </div>
              {p.featured && <p className="mt-1 font-mono text-xs text-accent2">PROJET PHARE</p>}
              <p className="mt-4 text-sm leading-relaxed text-ink/80">{p.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <li key={s} className="chip">
                    {s}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">Autres dépôts GitHub</p>
        <ul className="grid gap-3 sm:grid-cols-3">
          {otherRepos.map((r) => (
            <li key={r.name}>
              <a
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card flex h-full items-start justify-between gap-3 p-4 transition-colors hover:border-accent/60"
              >
                <span>
                  <span className="block text-sm font-medium">{r.name}</span>
                  <span className="mt-1 block text-xs text-muted">{r.note}</span>
                </span>
                <FiArrowUpRight aria-hidden className="mt-0.5 flex-none text-muted" />
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
