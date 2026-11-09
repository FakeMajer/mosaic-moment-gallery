import { ArrowUpRight } from "lucide-react";
import { SOCIALS, SOON_ICON } from "@/lib/profile";

export function SocialLinks() {
  return (
    <div className="flex flex-col gap-3">
      {SOCIALS.map((s) => {
        const Icon = s.icon;
        if (s.soon || !s.href) {
          return (
            <div
              key={s.label}
              className="flex items-center gap-4 rounded-xl border border-dashed border-border px-5 py-3.5 text-muted-foreground"
            >
              <Icon className="size-5" />
              <span className="flex-1 text-sm">{s.label}</span>
              <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.15em] text-highlight">
                <SOON_ICON className="size-3.5" /> Ve výstavbě
              </span>
            </div>
          );
        }
        return (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 rounded-xl border border-border bg-secondary/60 px-5 py-3.5 text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-glow"
          >
            <Icon className="size-5" />
            <span className="flex-1 text-sm font-semibold">{s.label}</span>
            <ArrowUpRight className="size-4 opacity-50 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
          </a>
        );
      })}
    </div>
  );
}
