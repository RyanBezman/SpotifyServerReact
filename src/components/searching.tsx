import { PrismaClient } from "@prisma/client";
// import { useState } from "react";

const prisma = new PrismaClient();

export async function Searching() {
  const songs = await prisma.song.findMany({
    include: {
      album: {
        include: {
          artist: true,
        },
      },
    },
  });

  function createTime(length: number) {
    const time = length;
    const minutes = Math.floor(time / 60);
    let seconds: number | string = length - minutes * 60;
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
  }
  // const [song, setSong] = useState("");

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
            <div className="mid-spacer">
              <input type="text" className="input-search" />
            </div>
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
              src="https://misc.scdn.co/liked-songs/liked-songs-300.png"
              alt="Liked Songs"
              className="heart-icon"
              srcSet="
      https://misc.scdn.co/liked-songs/liked-songs-300.png 150w,
      https://misc.scdn.co/liked-songs/liked-songs-300.png 300w,
      https://misc.scdn.co/liked-songs/liked-songs-640.png 320w,
      https://misc.scdn.co/liked-songs/liked-songs-640.png 640w
    "
              sizes="(min-width: 1280px) 232px, 192px"
            />
            <div className="big-text">
              <div className="big-text-wrapper">
                <span className="big-text-small">Playlist</span>
                <span>
                  <h1 className="biggest-text">Liked Songs</h1>
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
          {songs.map((song, index) => {
            return (
              <div className="song-row" key={song.id}>
                <div className="song-number">{index + 1}</div>
                <div className="song-title">
                  <img
                    aria-hidden="false"
                    draggable="false"
                    loading="eager"
                    src="https://i.scdn.co/image/ab67616d000048511dacfbc31cc873d132958af9"
                    alt=""
                    className="album-image"
                    width="40"
                    height="40"
                  />
                  <div className="song-container">
                    <div className="song-name">{song.name}</div>
                    <div className="artist-wrapper">
                      {song.explicit ? <div className="explicit">E</div> : null}
                      <div className="artist-name">
                        {song.album.artist?.name}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="song-album">{song.album.name}</div>
                <div className="song-date">Dec 22, 2023</div>
                <div className="song-liked-time">
                  <svg
                    data-encore-id="icon"
                    role="img"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    className="green-heart"
                  >
                    <path d="M15.724 4.22A4.313 4.313 0 0 0 12.192.814a4.269 4.269 0 0 0-3.622 1.13.837.837 0 0 1-1.14 0 4.272 4.272 0 0 0-6.21 5.855l5.916 7.05a1.128 1.128 0 0 0 1.727 0l5.916-7.05a4.228 4.228 0 0 0 .945-3.577z"></path>
                  </svg>
                  <div className="time">{createTime(song.length)}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
