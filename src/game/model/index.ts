import { writable, get } from "svelte/store";
import { storeLense } from "shared/store-lense";
import { minScore, scoresGetApi, scoresPostApi } from "./scores";
import { decode } from "./decoder";

const settingsLense = storeLense("game_settings");
const scoreLense = storeLense("game_score");
const nickLense = storeLense("game_nick");
const defaultSettings = {
  position: "default",
  disableSound: true,
  disableSunset: true,
};

export const inGame = writable(false);
export const inverted = writable(false);
export const defaultNick = "unknown";
export const nick = writable(nickLense.get() ?? defaultNick);
export const highestScore = writable(scoreLense.get() ?? 0);
export const settings = writable(settingsLense.get() ?? defaultSettings);

settings.subscribe(settingsLense.set);
nick.subscribe(nickLense.set);

export function gameOver(event) {
  const { score, displayScore, time } = event.detail;
  const formattedScore = `(${displayScore})`;

  saveHighestScore(score);

  if (displayScore > get(minScore)) {
    scoresPostApi.request({
      time,
      name: get(nick),
      score: decode(formattedScore, time),
    });
  }
}

export const loadScores = () => scoresGetApi.request();

function saveHighestScore(score: number) {
  if (score > get(highestScore)) scoreLense.set(score);
}

export { scores, minScore, scoresGetApi, scoresPostApi } from "./scores";
