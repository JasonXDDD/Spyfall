import { getPlayersByGame, createPlayer } from "~~/server/db/player";
import { shuffle } from "lodash-es";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { name = "", game = "", total = 0 } = body;

  if (!name || !game || !total) {
    throw createError({
      statusCode: 400,
      statusMessage: "Bad Request",
      message: "Missing required fields",
      fatal: true,
    });
  }

  // get game all players
  const players = await getPlayersByGame(game);

  // check name is duplicate
  const isDuplicate = players.some((e) => e.name === name);
  if (isDuplicate) {
    throw createError({
      statusCode: 400,
      statusMessage: "Bad Request",
      message: "This name is already taken",
      fatal: true,
    });
  }

  const playerPos = players.map((e) => e.position);

  // generate unique position
  let allPos = Array.from({ length: total }, (_, i) => i + 1);
  let canUsePos = allPos.filter((e) => !playerPos.includes(e));

  if (canUsePos.length === 0) {
    throw createError({
      statusCode: 400,
      statusMessage: "Bad Request",
      message: "This game is full",
      fatal: true,
    });
  }

  // shuffle position and get first one
  let position = shuffle(canUsePos)[0];

  // create player
  const res = await createPlayer({
    name,
    game,
    total,
    position,
  });

  return res;
});
