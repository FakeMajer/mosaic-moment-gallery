import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { EMAIL, SOCIALS } from "@/lib/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-14 md:flex-row md:items-end md:justify-between">
        <div>
          <Link to="/" className="font-display text-3xl font-bold text-foreground">
            Adam Kolda<span className="text-highlight">.</span>
          </Link>
          <p className="mt-2 text-sm text-muted-foreground">Plzeň</p>
          <a href={`mailto:${EMAIL}`} className="mt-3 inline-flex items-center gap-2 text-sm text-primary hover:underline">
            <Mail className="size-4" /> {EMAIL}
          </a>
        </div>
        <div className="flex flex-wrap items-center gap-5">
          {SOCIALS.filter((s) => s.href && !s.soon).map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground transition-colors hover:text-highlight"
                aria-label={s.label}
              >
                <Icon className="size-5" />
              </a>
            );
          })}
          <span className="text-xs text-muted-foreground">© {new Date().getFullYear()} Adam Kolda</span>
        </div>
      </div>
    </footer>
  );
}
