import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { MasonryGallery } from "@/components/masonry-gallery";
import { CATEGORIES, PHOTOS } from "@/lib/gallery";
import { ZONERAMA_URL } from "@/lib/profile";
import { ExternalLink } from "lucide-react";

export const Route = createFileRoute("/galerie")({
  head: () => ({
    meta: [
      { title: "Galerie — Adam Kolda" },
      {
        name: "description",
        content: "Fotogalerie Adama Koldy z Plzně.",
      },
      { property: "og:title", content: "Galerie — Adam Kolda" },
      {
        property: "og:description",
        content: "Fotky Adama Koldy z Plzně.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("Vše");
  const photos = category === "Vše" ? PHOTOS : PHOTOS.filter((p) => p.category === category);

  return (
    <section className="mx-auto max-w-7xl px-6 pb-28 pt-36 md:pt-44">
      <p className="eyebrow animate-fade-up">Portfolio</p>
      <h1 className="mt-4 animate-fade-up text-5xl font-bold text-foreground [animation-delay:100ms] md:text-7xl">
        Galerie
      </h1>
      <p className="mt-6 max-w-xl animate-fade-up text-muted-foreground [animation-delay:200ms]">
        Moje fotky. Klikni na fotku pro zobrazení v plné velikosti.
      </p>
      <a
        href={ZONERAMA_URL}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-highlight hover:underline"
      >
        Celé album na Zoneramě <ExternalLink className="size-4" />
      </a>

      <div className="mb-12 mt-12 flex flex-wrap gap-3">
        {CATEGORIES.map((c) => (
          <Button
            key={c}
            variant="chip"
            size="sm"
            data-active={c === category}
            onClick={() => setCategory(c)}
            className="h-9 rounded-full px-5"
          >
            {c}
          </Button>
        ))}
      </div>

      <MasonryGallery key={category} photos={photos} />
    </section>
  );
}
