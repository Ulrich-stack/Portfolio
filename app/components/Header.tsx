import { profile } from "../data";

const links = [
  { href: "#competences", label: "Compétences" },
  { href: "#parcours", label: "Parcours" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-navy/10 bg-cream">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-serif text-xl font-semibold">
          Ulrich <span className="italic text-orange">C.</span>
        </a>
        <nav aria-label="Navigation principale" className="flex items-center gap-6 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hidden hover:text-orange sm:inline">
              {l.label}
            </a>
          ))}
          <a href={profile.cv} download className="border border-navy px-4 py-1.5 transition-colors hover:bg-navy hover:text-cream">
            CV
          </a>
        </nav>
      </div>
    </header>
  );
}
