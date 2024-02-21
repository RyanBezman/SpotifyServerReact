"use server";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export const addToLiked = async (songToAdd: number) => {
  await prisma.song.update({
    where: { id: songToAdd },
    data: {
      playlists: {
        connect: {
          id: 1,
        },
      },
    },
  });

  revalidatePath("/");
};

export const removeFromLiked = async (songToRemove: number) => {
  await prisma.song.update({
    where: { id: songToRemove },
    data: {
      playlists: {
        disconnect: { id: 1 },
      },
    },
  });

  revalidatePath("/");
};
