import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/social-links";
import { EMAIL } from "@/lib/profile";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Adam Kolda" },
      { name: "description", content: "Napiš Adamovi Koldovi e-mail nebo ho najdi na sociálních sítích." },
      { property: "og:title", content: "Kontakt — Adam Kolda" },
      { property: "og:description", content: "Napiš mi e-mail nebo mě najdi na sítích." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const fieldClass =
  "w-full rounded-xl border border-input bg-overlay/30 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none transition-colors";

function ContactPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Zpráva z webu — ${name}`);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="mx-auto max-w-7xl px-6 pb-28 pt-36 md:pt-44">
      <p className="eyebrow animate-fade-up">Kontakt</p>
      <h1 className="mt-4 max-w-4xl animate-fade-up text-5xl font-extrabold leading-tight text-foreground [animation-delay:100ms] md:text-7xl">
        Kontaktuj <span className="text-gradient-brand">mě</span>.
      </h1>

      <a
        href={`mailto:${EMAIL}`}
        className="mt-10 inline-flex items-center gap-3 font-display text-2xl text-foreground transition-colors hover:text-highlight md:text-3xl"
      >
        <Mail className="size-7 text-primary" /> {EMAIL}
      </a>

      <div className="mt-16 grid gap-12 lg:grid-cols-2">
        <form onSubmit={onSubmit} className="space-y-6 rounded-3xl border border-border bg-card/60 p-8 backdrop-blur">
          <div className="space-y-2">
            <label htmlFor="name" className="eyebrow">Jméno</label>
            <input
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Tvoje jméno"
              className={fieldClass}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="eyebrow">Zpráva</label>
            <textarea
              id="message"
              required
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Co mi chceš napsat?"
              className={`${fieldClass} resize-none`}
            />
          </div>
          <Button type="submit" variant="highlight" size="xl">
            Odeslat <Send />
          </Button>
        </form>

        <div>
          <p className="eyebrow mb-6">Najdeš mě tady</p>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
