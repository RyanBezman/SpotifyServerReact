import { PrismaClient } from "@prisma/client";
import { Playlists } from "./playlists";
import Link from "next/link";
import { SongRow } from "./songrow";

const prisma = new PrismaClient();

export async function LikedSongs(props: {
  playlistId: string;
  albumId: string;
  artistId: string;
  playlistName: string;
  playlistCover: string;
}) {
  let results;
  if (props.playlistId) {
    results = await prisma.song.findMany({
      where: {
        playlists: {
          some: {
            id: +props.playlistId,
          },
        },
      },
      include: {
        playlists: {
          where: {
            id: 1,
          },
        },
        album: {
          include: {
            artist: true,
          },
        },
      },
    });
  } else if (props.albumId) {
    results = await prisma.song.findMany({
      where: {
        albumId: +props.albumId,
      },
      include: {
        playlists: {
          where: {
            id: 1,
          },
        },
        album: {
          include: {
            artist: true,
          },
        },
      },
    });
  } else if (props.artistId) {
    results = await prisma.song.findMany({
      where: {
        album: {
          artistId: +props.artistId,
        },
      },
      include: {
        playlists: true,
        album: {
          include: {
            artist: true,
          },
        },
      },
    });
  }

  results = results?.map((result) => {
    return {
      ...result,
      liked: result.playlists.length === 1,
    };
  });

  return (
    <>
      <div className="heart-wrapper">
        <header className="top-header">
          <div className="top-bar">
            <div className="side-button-wrapper">
              <button className="back-button">
                <svg
                  data-encore-id="icon"
                  role="img"
                  aria-hidden="true"
                  className="side-buttons"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"></path>
                </svg>
              </button>
              <button className="forward-button">
                <svg
                  data-encore-id="icon"
                  role="img"
                  aria-hidden="true"
                  className="side-forward"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"></path>
                </svg>
              </button>
            </div>
            <div className="mid-spacer"></div>
            <div className="account-buttons">
              <button className="install-button">
                <svg
                  data-encore-id="icon"
                  role="img"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  className="down-icon"
                >
                  <path d="M4.995 8.745a.75.75 0 0 1 1.06 0L7.25 9.939V4a.75.75 0 0 1 1.5 0v5.94l1.195-1.195a.75.75 0 1 1 1.06 1.06L8 12.811l-.528-.528a.945.945 0 0 1-.005-.005L4.995 9.805a.75.75 0 0 1 0-1.06z"></path>
                  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13z"></path>
                </svg>
                <span className="install-word">Install App</span>
              </button>
              <button className="bell-button">
                <svg
                  data-encore-id="icon"
                  role="img"
                  aria-hidden="true"
                  className="bell-icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1.5a4 4 0 0 0-4 4v3.27a.75.75 0 0 1-.1.373L2.255 12h11.49L12.1 9.142a.75.75 0 0 1-.1-.374V5.5a4 4 0 0 0-4-4zm-5.5 4a5.5 5.5 0 0 1 11 0v3.067l2.193 3.809a.75.75 0 0 1-.65 1.124H10.5a2.5 2.5 0 0 1-5 0H.957a.75.75 0 0 1-.65-1.124L2.5 8.569V5.5zm4.5 8a1 1 0 1 0 2 0H7z"></path>
                </svg>
              </button>
              <button className="first-initial">
                <span className="initial">R</span>
              </button>
            </div>
          </div>
        </header>
        <div className="bottom-head">
          <div className="heart-icon-wrapper">
            <img
              aria-hidden="false"
              draggable="false"
              loading="eager"
              src={
                props.albumId &&
                results?.map((song) => {
                  return song.album.cover;
                })
              }
              alt="Liked Songs"
              className="heart-icon"
              sizes="(min-width: 1280px) 232px, 192px"
            />
            <div className="big-text">
              <div className="big-text-wrapper">
                <span className="big-text-small">Playlist</span>
                <span>
                  <h1 className="biggest-text">
                    {props.albumId &&
                      results?.map((song) => {
                        return song.album.name;
                      })}
                    {props.playlistId && props.playlistName}
                  </h1>
                </span>
                <div className="username-song-count">
                  <div className="username-left">ryanbezman</div>
                  <div className="song-count-right">• 68 songs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="background">
        <div className="play-button-container">
          <div className="play-button-wrapper">
            <div className="play">
              <button className="play-button">
                <svg
                  data-encore-id="icon"
                  role="img"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="play-icon"
                >
                  <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                </svg>
              </button>
            </div>
            <div className="list-wrapper">
              <button className="list-button">
                <span className="list-word">List</span>
                <div className="list-icon">
                  <svg
                    data-encore-id="icon"
                    role="img"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    className="list-pic"
                  >
                    <path d="M15 14.5H5V13h10v1.5zm0-5.75H5v-1.5h10v1.5zM15 3H5V1.5h10V3zM3 3H1V1.5h2V3zm0 11.5H1V13h2v1.5zm0-5.75H1v-1.5h2v1.5z"></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="column-two-end">
          <div className="end-header">
            <div className="hashtag">#</div>
            <div className="title">Title</div>
            <div className="album-word">Album</div>
            <div className="date-added">Date added</div>
            <div className="clock">
              <svg
                data-encore-id="icon"
                role="img"
                aria-hidden="true"
                viewBox="0 0 16 16"
                className="clock-icon"
              >
                <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path>
                <path d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z"></path>
              </svg>
            </div>
          </div>
          {results?.map((song, index) => {
            return (
              <>
                <SongRow song={song} index={index} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
