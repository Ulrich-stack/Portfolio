import { profile } from "../data";
import type { Content } from "../content";

export default function Footer({ t }: { t: Content }) {
  return (
    <footer className="bg-navy text-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a href="#top" className="underline decoration-orange decoration-2 underline-offset-4">
          {t.footer.top}
        </a>
      </div>
    </footer>
  );
}
