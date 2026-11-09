import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Domů" },
  { to: "/galerie", label: "Galerie" },
  { to: "/o-mne", label: "O mně" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        scrolled || open
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="font-display text-xl font-bold tracking-tight text-foreground">
          Adam Kolda<span className="text-highlight">.</span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="relative text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="p-2 text-foreground md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Zavřít menu" : "Otevřít menu"}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav className="flex animate-in fade-in slide-in-from-top-2 flex-col gap-6 border-t border-border px-6 py-8 md:hidden">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              onClick={() => setOpen(false)}
              className="font-display text-3xl text-foreground data-[status=active]:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
