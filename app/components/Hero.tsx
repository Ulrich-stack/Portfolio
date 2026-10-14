"use client";
import { motion } from "framer-motion";
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMapPin } from "react-icons/fi";
import { profile, stats } from "../data";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 20% 10%, rgba(124,156,255,0.16), transparent 70%), radial-gradient(45% 40% at 85% 25%, rgba(94,234,212,0.10), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #232834 1px, transparent 1px), linear-gradient(to bottom, #232834 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent 75%)",
        }}
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-5xl flex-col justify-center px-5 pb-16 pt-28 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3.5 py-1.5 text-xs text-muted">
            <span className="h-2 w-2 animate-pulseDot rounded-full bg-accent2" />
            Disponible en CDI · dès septembre 2026
          </span>

          <h1 className="mt-7 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Ulrich <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">Cocossou</span>
          </h1>
          <p className="mt-4 font-display text-xl text-ink/90 sm:text-2xl">{profile.title}</p>
          <p className="mt-2 font-mono text-sm text-muted">{profile.tagline}</p>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{profile.summary}</p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
            >
              Me contacter <FiArrowRight aria-hidden />
            </a>
            <a
              href={profile.cv}
              download
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-6 py-3 text-sm transition-colors hover:border-accent"
            >
              <FiDownload aria-hidden /> Télécharger mon CV
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface text-lg transition-colors hover:border-accent hover:text-accent"
            >
              <FiLinkedin />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface text-lg transition-colors hover:border-accent hover:text-accent"
            >
              <FiGithub />
            </a>
          </div>

          <p className="mt-6 inline-flex items-center gap-2 text-sm text-muted">
            <FiMapPin aria-hidden /> {profile.location}
          </p>
        </motion.div>

        <motion.dl
          className="mt-16 grid gap-4 sm:grid-cols-3"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
        >
          {stats.map((s) => (
            <div key={s.value} className="card px-5 py-4">
              <dt className="font-display text-3xl font-semibold text-ink">{s.value}</dt>
              <dd className="mt-1 text-sm text-muted">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
