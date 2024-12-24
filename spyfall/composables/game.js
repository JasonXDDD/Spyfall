import { tasks } from "~/constants/question";
import { shuffle } from "lodash-es";

export async function joinGame(data) {
  try {
    const res = await $fetch("/api/game/join", {
      method: "POST",
      body: JSON.stringify(data),
    });

    return res;
  } catch (error) {
    messageError("Error", error.response._data.message);
    return false;
  }
}

export function getQuestion() {
  return shuffle(tasks)[0];
}
