import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
// import { useState } from "react";
import { Playlists } from "@/components/playlists";
import { LikedSongs } from "@/components/likedsongs";
import { HomeSearch } from "@/components/homesearch";
import { RightSideBar } from "@/components/righsidebar";
import { BottomPlayBar } from "@/components/bottomplaybar";

export default function Home(props: {
  searchParams: {
    filter: string;
    playlistid: string;
    playlistcover: string;
    playlistname: string;
    albumid: string;
    artistid: string;
  };
}) {
  return (
    <>
      <div className="columns">
        <div className="column1">
          <HomeSearch />
          <Playlists display={props.searchParams.filter} />
        </div>
        <div className="column2">
          <LikedSongs
            playlistId={props.searchParams.playlistid}
            playlistCover={props.searchParams.playlistcover}
            playlistName={props.searchParams.playlistname}
            albumId={props.searchParams.albumid}
            artistId={props.searchParams.artistid}
          />
        </div>
        <div className="column3">
          <RightSideBar />
        </div>
      </div>
      <div className="bottom-bar">
        <BottomPlayBar />
      </div>
    </>
  );
}
