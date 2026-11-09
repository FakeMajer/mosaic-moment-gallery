export const DISCORD_ID = "789058621223731201";

export type DiscordPresence = "online" | "idle" | "dnd" | "offline";

export type LanyardData = {
  discord_status: DiscordPresence;
  listening_to_spotify: boolean;
  spotify: { song: string; artist: string } | null;
  activities: { type: number; name: string }[];
};

export type StatusLine =
  | { kind: "spotify"; song: string; artist: string }
  | { kind: "game"; name: string }
  | { kind: "presence"; label: string };

const PRESENCE_LABEL: Record<DiscordPresence, string> = {
  online: "Online",
  idle: "Nepřítomen",
  dnd: "Nerušit",
  offline: "Offline",
};

/** Spotify wins over a game; a game wins over plain presence. */
export function describeStatus(data: LanyardData): StatusLine {
  if (data.listening_to_spotify && data.spotify) {
    return { kind: "spotify", song: data.spotify.song, artist: data.spotify.artist };
  }
  const game = data.activities.find((a) => a.type === 0);
  if (game) return { kind: "game", name: game.name };
  return { kind: "presence", label: `Discord: ${PRESENCE_LABEL[data.discord_status] ?? "Offline"}` };
}
