"use server";
import { PrismaClient, Song } from "@prisma/client";

const prisma = new PrismaClient();

export const addToLiked = async (songToAdd: number) => {
  try {
    const newLikedSong = await prisma.song.update({
      where: { id: songToAdd },
      data: {
        playlists: {
          connect: {
            id: 1,
          },
        },
      },
    });

    return newLikedSong;
  } catch (error) {
    console.error("error setting song to liked playlist", error);
    throw error;
  }
};

export const removeFromLiked = async (songToRemove: number) => {
  try {
    const removedSong = await prisma.song.update({
      where: { id: songToRemove },
      data: {
        playlists: {
          disconnect: { id: 1 },
        },
      },
    });

    return removedSong;
  } catch (error) {
    console.error("error removing song from liked", error);
    throw error;
  }
};
