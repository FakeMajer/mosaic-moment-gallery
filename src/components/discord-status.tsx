import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  DISCORD_ID,
  describeStatus,
  type DiscordPresence,
  type LanyardData,
  type StatusLine,
} from "@/lib/discord-status";

const DOT: Record<DiscordPresence, string> = {
  online: "bg-status-online",
  idle: "bg-status-idle",
  dnd: "bg-status-dnd",
  offline: "bg-status-offline",
};

export function DiscordStatus({ className }: { className?: string }) {
  const [presence, setPresence] = useState<DiscordPresence>("offline");
  const [line, setLine] = useState<StatusLine | "loading" | "error">("loading");

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        const res = await fetch(`https://api.lanyard.rest/v1/users/${DISCORD_ID}`);
        const json = (await res.json()) as { success: boolean; data: LanyardData };
        if (cancelled || !json.success) return;
        setPresence(json.data.discord_status);
        setLine(describeStatus(json.data));
      } catch {
        if (!cancelled) setLine("error");
      }
    };
    load();
    const id = setInterval(load, 5000);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);

  return (
    <div
      className={cn(
        "inline-flex max-w-full items-center gap-3 rounded-full border border-border bg-overlay/40 px-4 py-2 text-sm text-muted-foreground backdrop-blur",
        className,
      )}
    >
      <span className="relative flex size-2.5 shrink-0">
        {presence !== "offline" && (
          <span className={cn("absolute inline-flex h-full w-full animate-ping rounded-full opacity-60", DOT[presence])} />
        )}
        <span className={cn("relative inline-flex size-2.5 rounded-full", DOT[presence])} />
      </span>
      <span className="truncate">
        {line === "loading" && "Načítání statusu…"}
        {line === "error" && "Status nedostupný"}
        {typeof line === "object" && line.kind === "spotify" && (
          <>
            Právě poslouchá <b className="text-foreground">{line.song}</b> od{" "}
            <b className="text-foreground">{line.artist}</b>
          </>
        )}
        {typeof line === "object" && line.kind === "game" && (
          <>
            Nyní hraje <b className="text-foreground">{line.name}</b>
          </>
        )}
        {typeof line === "object" && line.kind === "presence" && line.label}
      </span>
    </div>
  );
}
