import { languages, skillGroups } from "../data";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="competences" className="section">
      <Reveal>
        <p className="eyebrow">Compétences</p>
        <h2 className="h2">Ma boîte à outils</h2>
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.05}>
            <div className="card h-full p-6">
              <h3 className="font-display text-lg font-semibold">{g.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li key={item} className="chip !text-ink/85">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}

        <Reveal delay={skillGroups.length * 0.05}>
          <div className="card h-full p-6">
            <h3 className="font-display text-lg font-semibold">Langues</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {languages.map((l) => (
                <li key={l.name} className="flex items-center justify-between border-b border-line pb-2 last:border-0">
                  <span>{l.name}</span>
                  <span className="text-muted">{l.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
