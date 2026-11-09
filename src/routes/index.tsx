import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowDown } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { Button } from "@/components/ui/button";
import { MasonryGallery } from "@/components/masonry-gallery";
import { PHOTOS } from "@/lib/gallery";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adam Kolda — Fotograf | Portfolio" },
      {
        name: "description",
        content: "Fotografie, které vyprávějí příběh. Portréty, krajina, architektura a pouliční fotografie od Adama Koldy.",
      },
      { property: "og:title", content: "Adam Kolda — Fotograf | Portfolio" },
      {
        property: "og:description",
        content: "Fotografie, které vyprávějí příběh. Portréty, krajina, architektura a pouliční fotografie.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const SERVICES = [
  { n: "01", title: "Portréty", text: "Osobní a firemní portréty v ateliéru i v exteriéru." },
  { n: "02", title: "Architektura", text: "Fotografie interiérů, staveb a realit s důrazem na světlo." },
  { n: "03", title: "Krajina", text: "Fine-art krajinářské fotografie a tisky do galerijní kvality." },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="grain relative flex h-[100svh] min-h-[640px] items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Postava na horském hřebeni při východu slunce"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full animate-slow-zoom object-cover"
        />
        <div className="bg-hero-overlay absolute inset-0" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 md:pb-28">
          <p className="eyebrow animate-fade-up">Fotograf · Praha</p>
          <h1 className="mt-6 max-w-5xl animate-fade-up text-5xl font-bold leading-[0.95] text-foreground [animation-delay:150ms] sm:text-7xl md:text-8xl">
            Zachycuji <span className="text-gradient-gold">světlo</span>,
            <br />
            ticho a příběhy.
          </h1>
          <div className="mt-10 flex animate-fade-up flex-wrap gap-4 [animation-delay:300ms]">
            <Button asChild variant="gold" size="xl">
              <Link to="/galerie">
                Prohlédnout galerii <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="gold-outline" size="xl">
              <Link to="/kontakt">Spolupráce</Link>
            </Button>
          </div>
        </div>
        <ArrowDown className="absolute bottom-8 right-8 hidden size-5 animate-bounce text-primary md:block" />
      </section>

      {/* Selected works */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Vybrané práce</p>
            <h2 className="mt-4 text-4xl font-bold text-foreground md:text-6xl">Fotogalerie</h2>
          </div>
          <Link
            to="/galerie"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-primary"
          >
            Celá galerie
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <MasonryGallery photos={PHOTOS.slice(0, 6)} />
      </section>

      {/* Services */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-px bg-border md:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.n} className="group bg-card p-10 transition-colors duration-500 hover:bg-accent md:p-14">
              <span className="font-display text-sm text-primary">{s.n}</span>
              <h3 className="mt-6 text-3xl font-semibold text-foreground">{s.title}</h3>
              <p className="mt-4 text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-28 text-center md:py-40">
        <p className="eyebrow">Máte projekt?</p>
        <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-bold text-foreground md:text-6xl">
          Pojďme spolu vytvořit něco <span className="text-gradient-gold">nezapomenutelného</span>.
        </h2>
        <Button asChild variant="gold" size="xl" className="mt-12">
          <Link to="/kontakt">
            Napište mi <ArrowRight />
          </Link>
        </Button>
      </section>
    </>
  );
}
