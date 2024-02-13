import { PrismaClient } from "@prisma/client";
import Link from "next/link";

const prisma = new PrismaClient();

export async function Albums() {
  const albums = await prisma.album.findMany({});
  const playlists = await prisma.playlist.findMany({});

  return (
    <div className="playlist-wrapper">
      <div className="your-library">
        <header className="library-container">
          <div className="top-head">
            <div className="library-bar">
              <div className="library-button-container">
                <button className="your-library-button">
                  <span className="library-logo-wrapper">
                    <svg
                      data-encore-id="icon"
                      role="img"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="library-icon"
                    >
                      <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path>
                    </svg>{" "}
                  </span>
                  Your Library
                </button>
              </div>
            </div>
            <div className="top-head-second-set">
              <span className="plus-sign-wrapper">
                <svg
                  className="plus-sign-icon"
                  data-encore-id="icon"
                  role="img"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path>
                </svg>
              </span>
              <span className="right-arrow-wrapper">
                <svg
                  className="right-arrow-icon"
                  data-encore-id="icon"
                  role="img"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.19 1A.749.749 0 0 1 8.47.47L16 7.99l-7.53 7.521a.75.75 0 0 1-1.234-.815.75.75 0 0 1 .174-.243l5.72-5.714H.75a.75.75 0 1 1 0-1.498h12.38L7.41 1.529a.749.749 0 0 1-.22-.53z"></path>
                </svg>
              </span>
            </div>
          </div>
        </header>
        <div className="button-line-wrapper">
          <div className="button-line">
            <Link href="/playlines" style={{ textDecoration: "none" }}>
              <button className="library-buttons">
                <span className="button-names">Playlists</span>
              </button>
            </Link>
            <button className="library-buttons">
              <span className="button-names">Artists</span>
            </button>
            <Link href="/albums" style={{ textDecoration: "none" }}>
              <button className="library-buttons">
                <span className="button-names">Albums</span>
              </button>
            </Link>
            <button className="library-buttons">
              <span className="button-names">Podcasts & Shows</span>
            </button>
          </div>

          <button className="scroll1">
            <svg
              className="scroll1-icon"
              data-encore-id="icon"
              role="img"
              aria-hidden="true"
              viewBox="0 0 16 16"
            >
              <path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="scroll-wrapper">
        <div className="search-bar-wrapper">
          <div className="magnifying-glass-wrapper">
            <button className="magnifying-glass-button">
              <svg
                className="magnifying-icon"
                data-encore-id="icon"
                role="img"
                aria-hidden="true"
                viewBox="0 0 16 16"
              >
                <path d="M7 1.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5zM.25 7a6.75 6.75 0 1 1 12.096 4.12l3.184 3.185a.75.75 0 1 1-1.06 1.06L11.304 12.2A6.75 6.75 0 0 1 .25 7z"></path>
              </svg>
            </button>
          </div>
          <div className="recents-button-wrapper">
            <button className="recents-button">
              <span className="recents-word">Recents</span>
              <span className="recents-icon-wrapper">
                <svg
                  className="recents-icon"
                  data-encore-id="icon"
                  role="img"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                >
                  <path d="M15 14.5H5V13h10v1.5zm0-5.75H5v-1.5h10v1.5zM15 3H5V1.5h10V3zM3 3H1V1.5h2V3zm0 11.5H1V13h2v1.5zm0-5.75H1v-1.5h2v1.5z"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>

        <div className="playlist-art-wrapper">
          <ul className="playlists-list">
            {albums.map((album) => {
              return (
                <li className="playlist" id="one" key={album.name}>
                  <div className="playlist-container">
                    <div className="album-cover-wrapper">
                      <img
                        className="album"
                        aria-hidden="true"
                        draggable="false"
                        loading="eager"
                        src={album.cover}
                        data-testid="entity-image"
                        alt="Liked Songs"
                      />
                    </div>
                    <div className="album-name-wrapper">
                      <p className="playlist-name">{album.name}</p>
                      <div className="type-container">
                        <p className="username-type">
                          <span className="pinned-container">
                            <svg
                              className="pinned"
                              data-encore-id="icon"
                              role="img"
                              aria-hidden="false"
                              viewBox="0 0 16 16"
                            >
                              <title>Pinned</title>
                              <path d="M8.822.797a2.72 2.72 0 0 1 3.847 0l2.534 2.533a2.72 2.72 0 0 1 0 3.848l-3.678 3.678-1.337 4.988-4.486-4.486L1.28 15.78a.75.75 0 0 1-1.06-1.06l4.422-4.422L.156 5.812l4.987-1.337L8.822.797z"></path>
                            </svg>
                          </span>
                          Album • ryanbezman
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
