import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-5 py-8 text-sm text-muted sm:flex-row sm:px-8">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p className="font-mono text-xs">Next.js · Tailwind CSS · Framer Motion</p>
      </div>
    </footer>
  );
}
