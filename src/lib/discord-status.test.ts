import { describe, expect, it } from "vitest";
import { describeStatus, type LanyardData } from "./discord-status";

const base: LanyardData = {
  discord_status: "online",
  listening_to_spotify: false,
  spotify: null,
  activities: [],
};

describe("describeStatus", () => {
  it("shows the Spotify song when listening, even while playing a game", () => {
    expect(
      describeStatus({
        ...base,
        listening_to_spotify: true,
        spotify: { song: "Toxicity", artist: "System of a Down" },
        activities: [{ type: 0, name: "Elden Ring" }],
      }),
    ).toEqual({ kind: "spotify", song: "Toxicity", artist: "System of a Down" });
  });

  it("shows the game being played when not listening to Spotify", () => {
    expect(describeStatus({ ...base, activities: [{ type: 4, name: "custom" }, { type: 0, name: "Bloodborne" }] })).toEqual({
      kind: "game",
      name: "Bloodborne",
    });
  });

  it("falls back to the Discord presence", () => {
    expect(describeStatus({ ...base, discord_status: "dnd" })).toEqual({ kind: "presence", label: "Discord: Nerušit" });
  });
});
