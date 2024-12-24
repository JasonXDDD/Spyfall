import { getPlayerByName } from "~~/server/db/player";

export default defineEventHandler(async (event) => {
  const { game = "", player = "" } = getQuery(event);

  if (!game || !player) {
    throw createError({
      statusCode: 400,
      statusMessage: "Bad Request",
      message: "Missing required fields",
      fatal: true,
    });
  }

  // get game info
  const res = await getPlayerByName(game, player);
  return res;
});
