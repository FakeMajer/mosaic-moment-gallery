import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink, GraduationCap, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MasonryGallery } from "@/components/masonry-gallery";
import { DiscordStatus } from "@/components/discord-status";
import { SocialLinks } from "@/components/social-links";
import { PHOTOS } from "@/lib/gallery";
import { HOBBIES, ZONERAMA_URL } from "@/lib/profile";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adam Kolda — Osobní web" },
      {
        name: "description",
        content: "Adam Kolda, 16 let, Plzeň. Grafika, rybaření, freestyle koloběžka, kreslení, gaming a fotky.",
      },
      { property: "og:title", content: "Adam Kolda — Osobní web" },
      {
        property: "og:description",
        content: "Grafika, rybaření, freestyle koloběžka, kreslení, gaming a fotky.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-32 md:pt-36 lg:grid-cols-[400px_1fr] lg:gap-16">
        {/* Profile card */}
        <aside className="animate-fade-up rounded-3xl border border-border bg-card/70 p-8 text-center backdrop-blur lg:sticky lg:top-28 lg:self-start">
          <div className="mx-auto size-44 rounded-full bg-ring p-1 shadow-glow-highlight">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-card font-display text-6xl font-extrabold">
              <span className="text-gradient-brand">AK</span>
            </div>
          </div>
          <h1 className="mt-6 text-3xl font-bold text-foreground">Adam Kolda</h1>
          <DiscordStatus className="mt-4" />
          <div className="mt-8 text-left">
            <SocialLinks />
          </div>
        </aside>

        {/* Intro */}
        <div className="flex flex-col justify-center">
          <p className="eyebrow animate-fade-up">Ahoj, já jsem</p>
          <h2 className="mt-4 animate-fade-up text-6xl font-extrabold leading-[0.9] text-foreground [animation-delay:100ms] sm:text-8xl">
            Adam <span className="text-gradient-brand">Kolda</span>
          </h2>
          <div className="mt-8 flex flex-wrap gap-3 animate-fade-up [animation-delay:200ms]">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm text-foreground">
              <MapPin className="size-4 text-highlight" /> Plzeň
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm text-foreground">
              <GraduationCap className="size-4 text-highlight" /> Digitální svět · 16 let
            </span>
          </div>
          <p className="mt-8 max-w-2xl animate-fade-up text-lg leading-relaxed text-muted-foreground [animation-delay:300ms]">
            Studuju střední školu informatiky a finančních služeb v Plzni. Od malička mám rád
            grafiku, grafický design a design celkově. Ve volném čase rybařím, jezdím street na
            koloběžce, kreslím dark fantasy, hraju soulsovky a nosím vlastní tribal trika.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
            {HOBBIES.map((h, i) => {
              const Icon = h.icon;
              return (
                <Link
                  key={h.id}
                  to="/o-mne"
                  hash={h.id}
                  style={{ animationDelay: `${350 + i * 60}ms` }}
                  className="group animate-fade-up rounded-2xl border border-border bg-card/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-highlight hover:shadow-glow-highlight"
                >
                  <Icon className="size-6 text-primary transition-colors group-hover:text-highlight" />
                  <div className="mt-4 font-display text-lg font-semibold text-foreground">{h.title}</div>
                  {h.motto && <div className="mt-1 text-xs text-muted-foreground">{h.motto}</div>}
                </Link>
              );
            })}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild variant="brand" size="xl">
              <Link to="/o-mne">
                Víc o mně <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="brand-outline" size="xl">
              <Link to="/galerie">Fotogalerie</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Fotky</p>
            <h2 className="mt-3 text-4xl font-bold text-foreground md:text-6xl">Fotogalerie</h2>
          </div>
          <div className="flex flex-wrap gap-6">
            <Link
              to="/galerie"
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
            >
              Celá galerie <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={ZONERAMA_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-highlight"
            >
              Album na Zoneramě <ExternalLink className="size-4" />
            </a>
          </div>
        </div>
        <MasonryGallery photos={PHOTOS.slice(0, 6)} />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <h2 className="mx-auto max-w-3xl text-4xl font-bold text-foreground md:text-6xl">
          Chceš se <span className="text-gradient-brand">ozvat</span>?
        </h2>
        <Button asChild variant="highlight" size="xl" className="mt-10">
          <Link to="/kontakt">
            Kontaktuj mě <ArrowRight />
          </Link>
        </Button>
      </section>
    </>
  );
}
