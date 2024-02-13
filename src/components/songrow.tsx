"use client";
import Link from "next/link";
import { useRef, useState } from "react";

function createTime(length: number) {
  const time = length;
  const minutes = Math.floor(time / 60);
  let seconds: number | string = length - minutes * 60;
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
}
export function SongRow({
  song,
  index,
}: {
  song: {
    id: number;
    explicit: boolean;
    albumId: number;
    name: string;
    length: number;
    album: {
      name: string;
      cover: string;
      artist: {
        name: string;
      } | null;
    };
  };
  index: number;
}) {
  const [playingSong, setPlayingSong] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  function handleSongClick() {
    setPlayingSong(!playingSong);

    if (playingSong) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }
  return (
    <>
      <div className="song-row" key={song.id} onClick={handleSongClick}>
        <div className="song-number">{index + 1}</div>
        <div className="song-title">
          <img
            aria-hidden="false"
            draggable="false"
            loading="eager"
            src={song.album.cover}
            alt=""
            className="album-image"
            width="40"
            height="40"
          />
          <div className="song-container">
            <div className="song-name">{song.name}</div>
            <div className="artist-wrapper">
              {song.explicit ? <div className="explicit">E</div> : null}
              <div className="artist-name">{song.album.artist?.name}</div>
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
      <audio
        ref={audioRef}
        controls
        src={`${song.name.split(" ").join("").toLowerCase()}.mp3`}
      ></audio>
    </>
  );
}
