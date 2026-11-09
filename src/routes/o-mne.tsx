import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import aboutImg from "@/assets/about-portrait.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/o-mne")({
  head: () => ({
    meta: [
      { title: "O mně — Adam Kolda" },
      {
        name: "description",
        content: "Kdo je Adam Kolda, jak fotografuje a s čím vám může pomoci.",
      },
      { property: "og:title", content: "O mně — Adam Kolda" },
      {
        property: "og:description",
        content: "Příběh fotografa Adama Koldy, jeho přístup a zkušenosti.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const STATS = [
  { value: "10+", label: "let s fotoaparátem" },
  { value: "250+", label: "projektů" },
  { value: "12", label: "výstav" },
];

const TIMELINE = [
  { year: "2025", text: "Samostatná výstava „Světlo a stín“, Praha" },
  { year: "2022", text: "Spolupráce s architektonickými studii po celé ČR" },
  { year: "2019", text: "Založení vlastního ateliéru" },
  { year: "2015", text: "První zakázky — portréty a svatby" },
];

function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-28 pt-36 md:pt-44">
      <div className="grid gap-16 lg:grid-cols-[5fr_7fr] lg:gap-24">
        <div className="relative animate-fade-up">
          <div className="absolute -left-4 -top-4 h-full w-full border border-primary/40" />
          <img
            src={aboutImg}
            alt="Adam Kolda s fotoaparátem"
            width={832}
            height={1216}
            className="relative h-auto w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="eyebrow animate-fade-up">O mně</p>
          <h1 className="mt-4 animate-fade-up text-5xl font-bold leading-tight text-foreground [animation-delay:100ms] md:text-6xl">
            Ahoj, jsem <span className="text-gradient-gold">Adam</span>.
          </h1>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Jsem fotograf z Prahy. Fascinuje mě světlo — to, jak dokáže proměnit obyčejné místo
              v něco výjimečného, a jak odhalí charakter člověka v jediném okamžiku.
            </p>
            <p>
              Fotím portréty, architekturu, krajinu i život v ulicích. Ke každé zakázce přistupuji
              osobně a s důrazem na detail, protože věřím, že dobrá fotografie vypráví příběh.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-y border-border py-8">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="font-display text-4xl font-bold text-primary md:text-5xl">{s.value}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <ul className="mt-12 space-y-5">
            {TIMELINE.map((t) => (
              <li key={t.year} className="flex gap-6">
                <span className="w-14 shrink-0 font-display text-primary">{t.year}</span>
                <span className="text-foreground">{t.text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <Button asChild variant="gold" size="xl">
              <Link to="/kontakt">
                Domluvme se <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
