import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Photo } from "@/lib/gallery";

export function MasonryGallery({ photos }: { photos: Photo[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length)),
    [photos.length],
  );
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i + 1) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, prev, next]);

  const current = openIndex !== null ? photos[openIndex] : null;

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {photos.map((photo, i) => (
          <button
            key={photo.id}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="group relative block w-full cursor-zoom-in overflow-hidden break-inside-avoid bg-card"
            aria-label={`Otevřít fotografii ${photo.title}`}
          >
            <img
              src={photo.src}
              alt={`${photo.title} — ${photo.place}`}
              width={photo.width}
              height={photo.height}
              loading="lazy"
              className="h-auto w-full transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-overlay/85 via-overlay/10 to-transparent p-5 text-left opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <span className="eyebrow">{photo.category}</span>
              <span className="mt-1 font-display text-xl text-foreground">{photo.title}</span>
              <span className="text-sm text-muted-foreground">
                {photo.place} · {photo.year}
              </span>
            </div>
          </button>
        ))}
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          className="fixed inset-0 z-50 flex animate-in fade-in items-center justify-center bg-overlay/95 backdrop-blur-sm duration-300"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-5 top-5 p-2 text-muted-foreground transition-colors hover:text-primary"
            aria-label="Zavřít"
          >
            <X className="size-7" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-3 text-muted-foreground transition-colors hover:text-primary sm:left-6"
            aria-label="Předchozí"
          >
            <ChevronLeft className="size-9" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-3 text-muted-foreground transition-colors hover:text-primary sm:right-6"
            aria-label="Další"
          >
            <ChevronRight className="size-9" />
          </button>

          <figure
            className="flex max-h-[90vh] max-w-[88vw] flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              key={current.id}
              src={current.src}
              alt={`${current.title} — ${current.place}`}
              className="max-h-[78vh] w-auto animate-in zoom-in-95 fade-in object-contain duration-500"
            />
            <figcaption className="mt-5 text-center">
              <span className="font-display text-2xl text-foreground">{current.title}</span>
              <span className="mt-1 block text-sm text-muted-foreground">
                {current.place} · {current.year} ·{" "}
                <span className="text-primary">
                  {(openIndex ?? 0) + 1} / {photos.length}
                </span>
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
