import { profile } from "../data";
import HeroArt from "./HeroArt";

export default function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-16 pt-12 md:grid-cols-[1.1fr_1fr] md:pb-24 md:pt-20">
      <div>
        <p className="text-sm font-medium text-ember">Disponible en CDI</p>
        <h1 className="mt-4 font-serif text-6xl font-semibold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
          Ulrich
          <br />
          Cocossou
        </h1>
        <p className="mt-5 font-serif text-3xl italic text-orange sm:text-4xl">Ingénieur Full Stack</p>

        <p className="mt-8 max-w-lg text-lg leading-relaxed">
          Ingénieur full stack passionné par le web et l'IA, je conçois des applications de bout en bout, de la
          maquette au déploiement. Je recherche aujourd'hui un CDI pour rejoindre une équipe et continuer à
          construire des produits solides.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a href="#contact" className="btn bg-ember text-cream hover:bg-navy">
            Parlons CDI
          </a>
          <a href={profile.cv} download className="btn border-2 border-navy hover:bg-navy hover:text-cream">
            Télécharger mon CV
          </a>
        </div>
        <p className="mt-6 flex flex-wrap gap-x-5 gap-y-1 text-sm">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="link">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="link">
            GitHub
          </a>
          <span className="opacity-70">{profile.location}</span>
        </p>
      </div>

      <a
        href="#parcours"
        aria-label="Voir mon parcours en détail"
        className="group mx-auto block w-full max-w-md md:max-w-none"
      >
        <HeroArt />
        <span className="mt-2 block text-center text-sm font-medium text-ember underline decoration-peach decoration-2 underline-offset-4 transition-colors group-hover:decoration-orange">
          Voir le parcours en détail ↓
        </span>
      </a>
    </section>
  );
}
