import { prisma } from ".";

export const createPlayer = async (data) => {
  return prisma.player.create({
    data,
  });
};

export const getPlayersByGame = async (game) => {
  return prisma.player.findMany({
    where: {
      game,
    },
  });
};

export const getPlayerByName = async (game, name) => {
  return prisma.player.findFirst({
    where: {
      game,
      name,
    },
  });
};
