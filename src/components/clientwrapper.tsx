"use client";
import {
  MouseEventHandler,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";
import { createContext } from "react";

type Song = {
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

type PlayingSongFunc = (p: Song) => void;
type SongContextType = {
  playingSong: Song | null;
  isPlaying: boolean;
  setIsPlaying: (p: boolean) => void;
  setPlayingSong: PlayingSongFunc;
  duration: string | number | undefined;
  setDuration: (p: string | undefined | number) => void;
  currentTime: string | number | undefined;
  setCurrentTime: (p: string | undefined | number) => void;
  progressBar: HTMLAudioElement | null;
  changeRange: () => void;
  whiteBarStyle: {
    height: string;
    width: () => void;
    borderRadius: string;
    backgroundColor: string;
    display: string;
  };
  handleMouseDown: (p: MouseEvent) => void;
  handleMouseMoving: (p: MouseEvent) => void;
  handleMouseUp: (p: MouseEvent) => void;
};
export const SongContext = createContext<SongContextType | null>(null);

type Props = PropsWithChildren;
function createDuration(length: number): string {
  const time = Math.floor(length);
  const minutes = Math.floor(time / 60);
  let seconds: number | string = time - minutes * 60;
  Math.floor(seconds);
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
}

export function ClientWrapper({ children }: Props) {
  const [playingSong, setPlayingSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState("");
  const [currentTime, setCurrentTime] = useState("0");
  const [whiteBarWidth, setWhiteBarWidth] = useState("");
  const [isResizing, setIsResizing] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBar = useRef<HTMLAudioElement | null>();

  const changeRange = () => {
    const time = audioRef?.current?.currentTime ?? 0;
    const fullTime = audioRef.current?.duration ?? 0;

    if (fullTime === 0) {
      setCurrentTime(createDuration(0));
      setWhiteBarWidth("0%");
      return;
    }
    const percent = (time / fullTime) * 100;
    setWhiteBarWidth(`${percent}%`);
    setCurrentTime(createDuration(time));
  };

  function handleMouseDown(event: MouseEvent) {
    setIsResizing(true);

    let { left } = event?.currentTarget?.getBoundingClientRect();
    let dimensions = event.clientX - left;

    updateBarWidth(dimensions);
  }

  function handleMouseMoving(event: MouseEvent) {
    if (isResizing) {
      let { left } = event.currentTarget.getBoundingClientRect();
      let dimensions = event.clientX - left;

      updateBarWidth(dimensions);
    }
  }

  function handleMouseUp() {
    setIsResizing(false);
  }

  const updateBarWidth = (clientDimensions: number) => {
    const percentage = (clientDimensions / 585.5) * 100;

    setWhiteBarWidth(`${percentage}`);
    if (audioRef.current) {
      const newTime = (percentage / 100) * audioRef?.current?.duration;

      audioRef.current.currentTime = newTime;
    }
  };

  const whiteBarStyle = {
    height: "4px",
    width: whiteBarWidth,
    borderRadius: "2px",
    backgroundColor: "white",
    display: "flex",
    resize: "horizontal",
  };

  useEffect(() => {
    const intervalId = setInterval(changeRange, 50);

    const cleanup = () => {
      clearInterval(intervalId);
    };

    return cleanup;
  }, []);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const seconds = Math.floor(audioRef.current?.duration ?? 0);
    const handleLoadedMetadata = () => {
      setDuration(createDuration(audioRef.current?.duration));
    };

    audioRef.current?.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      audioRef.current?.removeEventListener(
        "loadedmetadata",
        handleLoadedMetadata
      );
    };
  }, [playingSong]);

  return (
    <SongContext.Provider
      value={{
        playingSong,
        setPlayingSong,
        isPlaying,
        setIsPlaying,
        duration,
        setDuration,
        currentTime,
        setCurrentTime,
        progressBar,
        changeRange,
        whiteBarStyle,
        handleMouseDown,
        handleMouseMoving,
        handleMouseUp,
      }}
    >
      <audio
        ref={audioRef}
        controls
        src={`${playingSong?.name.split(" ").join("").toLowerCase()}.mp3`}
      ></audio>
      {children}
    </SongContext.Provider>
  );
}
