import Image from "next/image";
import styles from "./page.module.css";
import { Playlists } from "@/components/playlists";
import { LikedSongs } from "@/components/likedsongs";
import { HomeSearch } from "@/components/homesearch";
import { RightSideBar } from "@/components/righsidebar";
import { BottomPlayBar } from "@/components/bottomplaybar";
import { Searching } from "@/components/searching";

export default function Search() {
  return (
    <>
      <div className="columns">
        <div className="column1">
          <HomeSearch />
          <Playlists />
        </div>
        <div className="column2">
          <Searching />
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
