import { derived } from "svelte/store";
import { api } from "../../api";

type Score = {
  score: number;
  time: number;
  name: string;
  addedTimeStamp: number;
};
type Response = {
  daily: Score[];
  weekly: Score[];
  monthly: Score[];
  minScore: number;
};

export const scoresGetApi = api.get<Response>("/");
export const scoresPostApi = api.post<Response>("/");

scoresPostApi.subscribe((data) => {
  if (data.status === "success" && data) scoresGetApi.set(data);
});

export const minScore = derived(scoresGetApi, ({ data }) => (data ? data.minScore : 0));
export const scores = derived(scoresGetApi, ({ data }) => ({
  daily: data ? data.daily : [],
  weekly: data ? data.weekly : [],
  monthly: data ? data.monthly : [],
}));
