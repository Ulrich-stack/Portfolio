import type { Content, Lang } from "../content";

export default function Header({ lang, t }: { lang: Lang; t: Content }) {
  const links = [
    { href: "#competences", label: t.header.skills },
    { href: "#parcours", label: t.header.journey },
    { href: "#contact", label: t.header.contact },
  ];
  const otherHref = lang === "fr" ? "/en" : "/";

  return (
    <header className="sticky top-0 z-30 border-b border-navy/10 bg-cream">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-serif text-xl font-semibold">
          Ulrich <span className="italic text-orange">C.</span>
        </a>
        <nav aria-label={t.header.aria} className="flex items-center gap-6 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hidden hover:text-orange sm:inline">
              {l.label}
            </a>
          ))}
          <a
            href={otherHref}
            hrefLang={lang === "fr" ? "en" : "fr"}
            title={t.header.switchTitle}
            className="font-medium text-ember underline decoration-peach decoration-2 underline-offset-4 hover:decoration-orange"
          >
            {t.header.switchLabel}
          </a>
          <a href={t.cvHref} download className="border border-navy px-4 py-1.5 transition-colors hover:bg-navy hover:text-cream">
            {t.header.cv}
          </a>
        </nav>
      </div>
    </header>
  );
}
