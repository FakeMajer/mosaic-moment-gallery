import { Link } from "@tanstack/react-router";
import { Instagram, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-14 md:flex-row md:items-end md:justify-between">
        <div>
          <Link to="/" className="font-display text-3xl font-bold text-foreground">
            Adam Kolda<span className="text-primary">.</span>
          </Link>
          <p className="mt-2 text-sm text-muted-foreground">Fotografie · Praha, Česká republika</p>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="mailto:info@adamkolda.cz"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="E-mail"
          >
            <Mail className="size-5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Instagram"
          >
            <Instagram className="size-5" />
          </a>
          <span className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Adam Kolda
          </span>
        </div>
      </div>
    </footer>
  );
}
