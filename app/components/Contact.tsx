"use client";
import { useState } from "react";
import { profile } from "../data";
import type { Content } from "../content";

type Status = "idle" | "sending" | "success" | "error";

const field =
  "w-full border-b-2 border-cream/40 bg-transparent py-3 text-cream outline-none transition-colors placeholder:text-cream/70 focus:border-cream";

export default function Contact({ t }: { t: Content }) {
  const c = t.contact;
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

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

  return (
    <section id="contact" className="bg-ember text-cream">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <h2 className="font-serif text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl">
            {c.titlePre}
            <span className="italic text-peach">.</span>
          </h2>
          <p className="mt-6 max-w-sm text-lg leading-relaxed">{c.text}</p>
          <ul className="mt-8 space-y-2 text-lg">
            <li>
              <a href={`mailto:${profile.email}`} className="underline decoration-peach decoration-2 underline-offset-4 hover:decoration-cream">
                {profile.email}
              </a>
            </li>
            <li>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="underline decoration-peach decoration-2 underline-offset-4 hover:decoration-cream">
                {profile.phone}
              </a>
            </li>
            <li className="flex gap-5 pt-2 text-base">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="underline decoration-peach decoration-2 underline-offset-4 hover:decoration-cream">
                LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="underline decoration-peach decoration-2 underline-offset-4 hover:decoration-cream">
                GitHub
              </a>
            </li>
          </ul>
        </div>

        <form onSubmit={onSubmit} className="space-y-5">
          <input name="name" value={form.name} onChange={onChange} placeholder={c.namePlaceholder} required aria-label={c.nameLabel} className={field} />
          <input type="email" name="email" value={form.email} onChange={onChange} placeholder={c.emailPlaceholder} required aria-label={c.emailLabel} className={field} />
          <textarea name="message" value={form.message} onChange={onChange} placeholder={c.messagePlaceholder} required rows={4} aria-label={c.messageLabel} className={`${field} resize-none`} />
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn bg-cream text-navy hover:bg-peach disabled:opacity-60"
            >
              {status === "sending" ? c.sending : c.send}
            </button>
            <p role="status" className="text-sm">
              {status === "success" && c.success}
              {status === "error" && c.error}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
