import { education } from "../data";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="formation" className="section">
      <Reveal>
        <p className="eyebrow">Formation</p>
        <h2 className="h2">Parcours académique</h2>
      </Reveal>

      <ol className="relative mt-12 space-y-6 border-l border-line pl-8">
        {education.map((e, i) => (
          <li key={e.degree + e.period} className="relative">
            <span
              aria-hidden
              className={`absolute -left-[37px] top-2 h-2.5 w-2.5 rounded-full ${i === 0 ? "bg-accent2" : "bg-accent"}`}
            />
            <Reveal>
              <div className="card p-5">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-display text-lg font-semibold">{e.school}</h3>
                  <p className="font-mono text-xs text-muted">{e.period}</p>
                </div>
                <p className="mt-1 text-sm text-ink/85">
                  {e.degree}
                  {e.focus && <span className="text-accent"> · {e.focus}</span>}
                </p>
                <p className="mt-1 text-xs text-muted">{e.place}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
