"use client";
import { useState } from "react";
import { FiCheck, FiCopy, FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import { profile } from "../data";
import Reveal from "./Reveal";

type Status = "idle" | "sending" | "success" | "error";

const field =
  "w-full rounded-xl border border-line bg-elevated px-4 py-3 text-sm text-ink placeholder:text-muted/70 outline-none transition-colors focus:border-accent";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/mgegqedp", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* presse-papiers indisponible */
    }
  };

  return (
    <section id="contact" className="section">
      <Reveal>
        <p className="eyebrow">Contact</p>
        <h2 className="h2">Travaillons ensemble</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Je recherche un CDI à partir de septembre 2026. Un poste, une question, un échange : écrivez-moi.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-5">
        <Reveal className="space-y-3 md:col-span-2">
          <div className="card flex items-center justify-between gap-3 p-4">
            <a href={`mailto:${profile.email}`} className="flex min-w-0 items-center gap-3 hover:text-accent">
              <FiMail aria-hidden className="flex-none text-accent" />
              <span className="truncate text-sm">{profile.email}</span>
            </a>
            <button
              onClick={copyEmail}
              aria-label="Copier l'adresse e-mail"
              className="flex-none text-muted transition-colors hover:text-ink"
            >
              {copied ? <FiCheck className="text-accent2" /> : <FiCopy />}
            </button>
          </div>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="card flex items-center gap-3 p-4 text-sm hover:text-accent">
            <FiPhone aria-hidden className="text-accent" /> {profile.phone}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="card flex items-center gap-3 p-4 text-sm hover:text-accent"
          >
            <FiLinkedin aria-hidden className="text-accent" /> LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="card flex items-center gap-3 p-4 text-sm hover:text-accent"
          >
            <FiGithub aria-hidden className="text-accent" /> GitHub
          </a>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-3">
          <form onSubmit={onSubmit} className="card space-y-3 p-6">
            <input name="name" value={form.name} onChange={onChange} placeholder="Votre nom" required className={field} />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              placeholder="Votre e-mail"
              required
              className={field}
            />
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              placeholder="Votre message"
              required
              rows={5}
              className={`${field} resize-none`}
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-xl bg-accent px-6 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {status === "sending" ? "Envoi…" : "Envoyer"}
            </button>
            <p role="status" className="min-h-5 text-center text-sm">
              {status === "success" && <span className="text-accent2">Message envoyé, merci !</span>}
              {status === "error" && (
                <span className="text-red-400">L'envoi a échoué. Écrivez-moi directement par e-mail.</span>
              )}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
