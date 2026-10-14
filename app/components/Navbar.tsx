"use client";
import { useEffect, useState } from "react";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { profile } from "../data";

const links = [
  { href: "#experience", label: "Expérience" },
  { href: "#competences", label: "Compétences" },
  { href: "#projets", label: "Projets" },
  { href: "#formation", label: "Formation" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition-colors duration-300 ${
        scrolled || open ? "border-b border-line bg-bg/80 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight">
          UC<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-7 text-sm text-muted md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={profile.cv}
            download
            className="hidden items-center gap-2 rounded-full border border-line bg-elevated px-4 py-2 text-sm transition-colors hover:border-accent sm:inline-flex"
          >
            <FiDownload aria-hidden /> CV
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            className="text-2xl md:hidden"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-line px-5 pb-4 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block py-3 text-muted hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href={profile.cv} download className="block py-3 text-accent">
              Télécharger le CV
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
