import { languages, skillGroups } from "../data";

export default function Skills() {
  return (
    <section id="competences" className="bg-navy text-cream">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
          Ce que je <span className="italic text-peach">maîtrise</span>
        </h2>

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g) => (
            <div key={g.title}>
              <h3 className="border-b-2 border-orange pb-2 font-serif text-xl">{g.title}</h3>
              <ul className="mt-4 space-y-1.5 text-cream/85">
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="border-b-2 border-orange pb-2 font-serif text-xl">Langues</h3>
            <ul className="mt-4 space-y-1.5 text-cream/85">
              {languages.map((l) => (
                <li key={l.name}>
                  {l.name} <span className="text-peach">· {l.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
