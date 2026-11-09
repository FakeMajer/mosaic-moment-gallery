import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HOBBIES, INTRO } from "@/lib/profile";

export const Route = createFileRoute("/o-mne")({
  head: () => ({
    meta: [
      { title: "O mně — Adam Kolda" },
      {
        name: "description",
        content: "Kdo je Adam Kolda: škola, rybaření, freestyle koloběžka, kreslení, hudba, gaming, styl a fingerboard.",
      },
      { property: "og:title", content: "O mně — Adam Kolda" },
      {
        property: "og:description",
        content: "Škola, rybaření, koloběžka, kreslení, hudba, gaming, styl a fingerboard.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-28 pt-36 md:pt-44">
      <p className="eyebrow animate-fade-up">O mně</p>
      <h1 className="mt-4 animate-fade-up text-5xl font-extrabold leading-tight text-foreground [animation-delay:100ms] md:text-7xl">
        Ahoj, jsem <span className="text-gradient-brand">Adam</span>.
      </h1>
      <p className="mt-8 animate-fade-up text-lg leading-relaxed text-muted-foreground [animation-delay:200ms]">
        {INTRO}
      </p>

      <h2 className="mt-24 text-3xl font-bold text-foreground md:text-4xl">
        Teď něco víc k mému <span className="text-highlight">životu</span>
      </h2>

      <div className="mt-10 space-y-6">
        {HOBBIES.map((h, i) => {
          const Icon = h.icon;
          return (
            <article
              key={h.id}
              id={h.id}
              className="scroll-mt-28 rounded-3xl border border-border bg-card/60 p-8 backdrop-blur transition-colors hover:border-primary/50 md:p-10"
            >
              <div className="flex flex-wrap items-center gap-4">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <Icon className="size-6" />
                </span>
                <div>
                  <span className="text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-2xl font-bold text-foreground md:text-3xl">{h.title}</h3>
                </div>
              </div>
              <p className="mt-6 leading-relaxed text-muted-foreground">{h.text}</p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                {h.motto && (
                  <span className="rounded-full bg-highlight px-4 py-1.5 text-sm font-bold text-highlight-foreground">
                    {h.motto}
                  </span>
                )}
                {h.link && (
                  <a
                    href={h.link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
                  >
                    <Youtube className="size-4" /> {h.link.label}
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-16 text-center">
        <Button asChild variant="highlight" size="xl">
          <Link to="/kontakt">
            Kontaktuj mě <ArrowRight />
          </Link>
        </Button>
      </div>
    </section>
  );
}
