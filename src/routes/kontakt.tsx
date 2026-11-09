import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const EMAIL = "info@adamkolda.cz";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Adam Kolda" },
      {
        name: "description",
        content: "Napište Adamovi Koldovi a domluvte si focení nebo spolupráci.",
      },
      { property: "og:title", content: "Kontakt — Adam Kolda" },
      {
        property: "og:description",
        content: "Domluvte si focení nebo spolupráci s fotografem Adamem Koldou.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const fieldClass =
  "w-full border-0 border-b border-input bg-transparent px-0 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none transition-colors";

function ContactPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Poptávka z webu — ${name}`);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="mx-auto max-w-7xl px-6 pb-28 pt-36 md:pt-44">
      <p className="eyebrow animate-fade-up">Kontakt</p>
      <h1 className="mt-4 max-w-4xl animate-fade-up text-5xl font-bold leading-tight text-foreground [animation-delay:100ms] md:text-7xl">
        Pojďme <span className="text-gradient-gold">tvořit</span> spolu.
      </h1>

      <div className="mt-20 grid gap-16 lg:grid-cols-2">
        <div className="space-y-8">
          <ContactRow icon={<Mail />} label="E-mail" value={EMAIL} href={`mailto:${EMAIL}`} />
          <ContactRow icon={<Phone />} label="Telefon" value="+420 777 123 456" href="tel:+420777123456" />
          <ContactRow icon={<Instagram />} label="Instagram" value="@adamkolda" href="https://instagram.com" />
          <ContactRow icon={<MapPin />} label="Ateliér" value="Praha, Česká republika" />
        </div>

        <form onSubmit={onSubmit} className="space-y-8">
          <div>
            <label htmlFor="name" className="eyebrow">Jméno</label>
            <input
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Vaše jméno"
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="message" className="eyebrow">Zpráva</label>
            <textarea
              id="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="O jaké focení máte zájem?"
              className={`${fieldClass} resize-none`}
            />
          </div>
          <Button type="submit" variant="gold" size="xl">
            Odeslat zprávu <Send />
          </Button>
        </form>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="group flex items-center gap-6 border-b border-border pb-8">
      <span className="flex size-12 items-center justify-center rounded-full border border-primary/40 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground [&_svg]:size-5">
        {icon}
      </span>
      <div>
        <div className="eyebrow">{label}</div>
        <div className="mt-1 font-display text-xl text-foreground md:text-2xl">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block">
      {content}
    </a>
  ) : (
    content
  );
}
