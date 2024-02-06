import { PrismaClient } from "@prisma/client";
import Link from "next/link";

const prisma = new PrismaClient();

export async function Playlists() {
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
            {playlists.map((playlist) => {
              return (
                <li className="playlist" id="one" key={playlist.name}>
                  <div className="playlist-container">
                    <div className="album-cover-wrapper">
                      <img
                        className="album"
                        aria-hidden="true"
                        draggable="false"
                        loading="eager"
                        src={playlist.albumcover}
                        data-testid="entity-image"
                        alt="Liked Songs"
                      />
                    </div>
                    <div className="album-name-wrapper">
                      <p className="playlist-name">{playlist.name}</p>
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
{
  /* <li className="playlist" id="one">
              <div className="playlist-container">
                <div className="album-cover-wrapper">
                  <img
                    className="album"
                    aria-hidden="true"
                    draggable="false"
                    loading="eager"
                    src="https://misc.scdn.co/liked-songs/liked-songs-64.png"
                    data-testid="entity-image"
                    alt="Liked Songs"
                    srcSet="
              https://misc.scdn.co/liked-songs/liked-songs-64.png   32w,
              https://misc.scdn.co/liked-songs/liked-songs-64.png   64w,
              https://misc.scdn.co/liked-songs/liked-songs-300.png 150w,
              https://misc.scdn.co/liked-songs/liked-songs-300.png 300w,
              https://misc.scdn.co/liked-songs/liked-songs-640.png 320w,
              https://misc.scdn.co/liked-songs/liked-songs-640.png 640w
            "
                  />
                </div>
                <div className="album-name-wrapper">
                  <p className="playlist-name">Liked Songs</p>
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
                      Playlist • 68 songs
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li className="playlist" id="two">
              <div className="playlist-container">
                <div className="album-cover-wrapper">
                  <img
                    aria-hidden="true"
                    draggable="false"
                    loading="eager"
                    src="https://misc.scdn.co/your-episodes/SE-64.png"
                    data-testid="entity-image"
                    alt="Your Episodes"
                    className="album"
                    srcSet="
              https://misc.scdn.co/your-episodes/SE-64.png   32w,
              https://misc.scdn.co/your-episodes/SE-64.png   64w,
              https://misc.scdn.co/your-episodes/SE-300.png 150w,
              https://misc.scdn.co/your-episodes/SE-300.png 300w,
              https://misc.scdn.co/your-episodes/SE-640.png 320w,
              https://misc.scdn.co/your-episodes/SE-640.png 640w
            "
                  />
                </div>
                <div className="album-name-wrapper">
                  <p className="playlist-name">Your Episodes</p>
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
                      Saved & downloaded episodes
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li className="playlist" id="three">
              <div className="playlist-container">
                <div className="album-cover-wrapper">
                  <img
                    aria-hidden="true"
                    draggable="false"
                    loading="eager"
                    src="https://mosaic.scdn.co/60/ab67616d00001e0206996411f8bb8d8b4b530d76ab67616d00001e02a493e05c99d8ec5e8020ff2bab67616d00001e02bad2a72514d29883a23c262eab67616d00001e02cf7e826a2574c189f278915d"
                    data-testid="entity-image"
                    alt="Driving"
                    className="album"
                    srcSet="
              https://mosaic.scdn.co/60/ab67616d00001e0206996411f8bb8d8b4b530d76ab67616d00001e02a493e05c99d8ec5e8020ff2bab67616d00001e02bad2a72514d29883a23c262eab67616d00001e02cf7e826a2574c189f278915d   30w,
              https://mosaic.scdn.co/60/ab67616d00001e0206996411f8bb8d8b4b530d76ab67616d00001e02a493e05c99d8ec5e8020ff2bab67616d00001e02bad2a72514d29883a23c262eab67616d00001e02cf7e826a2574c189f278915d   60w,
              https://mosaic.scdn.co/300/ab67616d00001e0206996411f8bb8d8b4b530d76ab67616d00001e02a493e05c99d8ec5e8020ff2bab67616d00001e02bad2a72514d29883a23c262eab67616d00001e02cf7e826a2574c189f278915d 150w,
              https://mosaic.scdn.co/300/ab67616d00001e0206996411f8bb8d8b4b530d76ab67616d00001e02a493e05c99d8ec5e8020ff2bab67616d00001e02bad2a72514d29883a23c262eab67616d00001e02cf7e826a2574c189f278915d 300w,
              https://mosaic.scdn.co/640/ab67616d00001e0206996411f8bb8d8b4b530d76ab67616d00001e02a493e05c99d8ec5e8020ff2bab67616d00001e02bad2a72514d29883a23c262eab67616d00001e02cf7e826a2574c189f278915d 320w,
              https://mosaic.scdn.co/640/ab67616d00001e0206996411f8bb8d8b4b530d76ab67616d00001e02a493e05c99d8ec5e8020ff2bab67616d00001e02bad2a72514d29883a23c262eab67616d00001e02cf7e826a2574c189f278915d 640w
            "
                  />
                </div>
                <div className="album-name-wrapper">
                  <p className="playlist-name">Driving</p>
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
                      Playlist • ryanbezman
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li className="playlist" id="four">
              <div className="playlist-container">
                <div className="album-cover-wrapper">
                  <img
                    aria-hidden="true"
                    draggable="false"
                    loading="eager"
                    src="https://mosaic.scdn.co/60/ab67616d00001e022e8ed79e177ff6011076f5f0ab67616d00001e02364ef5f9057092741f667feaab67616d00001e0253a2e11c1bde700722fecd2eab67616d00001e02712701c5e263efc8726b1464"
                    data-testid="entity-image"
                    alt="Uber"
                    className="album"
                    srcSet="
              https://mosaic.scdn.co/60/ab67616d00001e022e8ed79e177ff6011076f5f0ab67616d00001e02364ef5f9057092741f667feaab67616d00001e0253a2e11c1bde700722fecd2eab67616d00001e02712701c5e263efc8726b1464   30w,
              https://mosaic.scdn.co/60/ab67616d00001e022e8ed79e177ff6011076f5f0ab67616d00001e02364ef5f9057092741f667feaab67616d00001e0253a2e11c1bde700722fecd2eab67616d00001e02712701c5e263efc8726b1464   60w,
              https://mosaic.scdn.co/300/ab67616d00001e022e8ed79e177ff6011076f5f0ab67616d00001e02364ef5f9057092741f667feaab67616d00001e0253a2e11c1bde700722fecd2eab67616d00001e02712701c5e263efc8726b1464 150w,
              https://mosaic.scdn.co/300/ab67616d00001e022e8ed79e177ff6011076f5f0ab67616d00001e02364ef5f9057092741f667feaab67616d00001e0253a2e11c1bde700722fecd2eab67616d00001e02712701c5e263efc8726b1464 300w,
              https://mosaic.scdn.co/640/ab67616d00001e022e8ed79e177ff6011076f5f0ab67616d00001e02364ef5f9057092741f667feaab67616d00001e0253a2e11c1bde700722fecd2eab67616d00001e02712701c5e263efc8726b1464 320w,
              https://mosaic.scdn.co/640/ab67616d00001e022e8ed79e177ff6011076f5f0ab67616d00001e02364ef5f9057092741f667feaab67616d00001e0253a2e11c1bde700722fecd2eab67616d00001e02712701c5e263efc8726b1464 640w
            "
                  />
                </div>
                <div className="album-name-wrapper">
                  <p className="playlist-name">Uber</p>
                  <div className="type-container">
                    <p className="username-type">Playlist • ryanbezman</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="playlist" id="five">
              <div className="playlist-container">
                <div className="album-cover-wrapper">
                  <img
                    aria-hidden="true"
                    draggable="false"
                    loading="eager"
                    src="https://mosaic.scdn.co/60/ab67616d00001e028b32b139981e79f2ebe005ebab67616d00001e029e17c3766e897d98c1049a80ab67616d00001e02ce159a3ba2096e13fa9d4b4cab67616d00001e02e647a3be0956a5d9769f0444"
                    data-testid="entity-image"
                    alt="street"
                    className="album"
                    srcSet="
              https://mosaic.scdn.co/60/ab67616d00001e028b32b139981e79f2ebe005ebab67616d00001e029e17c3766e897d98c1049a80ab67616d00001e02ce159a3ba2096e13fa9d4b4cab67616d00001e02e647a3be0956a5d9769f0444   30w,
              https://mosaic.scdn.co/60/ab67616d00001e028b32b139981e79f2ebe005ebab67616d00001e029e17c3766e897d98c1049a80ab67616d00001e02ce159a3ba2096e13fa9d4b4cab67616d00001e02e647a3be0956a5d9769f0444   60w,
              https://mosaic.scdn.co/300/ab67616d00001e028b32b139981e79f2ebe005ebab67616d00001e029e17c3766e897d98c1049a80ab67616d00001e02ce159a3ba2096e13fa9d4b4cab67616d00001e02e647a3be0956a5d9769f0444 150w,
              https://mosaic.scdn.co/300/ab67616d00001e028b32b139981e79f2ebe005ebab67616d00001e029e17c3766e897d98c1049a80ab67616d00001e02ce159a3ba2096e13fa9d4b4cab67616d00001e02e647a3be0956a5d9769f0444 300w,
              https://mosaic.scdn.co/640/ab67616d00001e028b32b139981e79f2ebe005ebab67616d00001e029e17c3766e897d98c1049a80ab67616d00001e02ce159a3ba2096e13fa9d4b4cab67616d00001e02e647a3be0956a5d9769f0444 320w,
              https://mosaic.scdn.co/640/ab67616d00001e028b32b139981e79f2ebe005ebab67616d00001e029e17c3766e897d98c1049a80ab67616d00001e02ce159a3ba2096e13fa9d4b4cab67616d00001e02e647a3be0956a5d9769f0444 640w
            "
                  />
                </div>
                <div className="album-name-wrapper">
                  <p className="playlist-name">street</p>
                  <div className="type-container">
                    <p className="username-type">Playlist • ryanbezman</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="playlist" id="six">
              <div className="playlist-container">
                <div className="album-cover-wrapper">
                  <img
                    aria-hidden="true"
                    draggable="false"
                    loading="eager"
                    src="https://mosaic.scdn.co/60/ab67616d00001e022a7db835b912dc5014bd37f4ab67616d00001e029d34eb283c35118bdcd2f18aab67616d00001e02af236a3219d347662cb4a284ab67616d00001e02fb368904bdcbe5ba7205abd0"
                    data-testid="entity-image"
                    alt="new motivation"
                    className="album"
                    srcSet="
              https://mosaic.scdn.co/60/ab67616d00001e022a7db835b912dc5014bd37f4ab67616d00001e029d34eb283c35118bdcd2f18aab67616d00001e02af236a3219d347662cb4a284ab67616d00001e02fb368904bdcbe5ba7205abd0   30w,
              https://mosaic.scdn.co/60/ab67616d00001e022a7db835b912dc5014bd37f4ab67616d00001e029d34eb283c35118bdcd2f18aab67616d00001e02af236a3219d347662cb4a284ab67616d00001e02fb368904bdcbe5ba7205abd0   60w,
              https://mosaic.scdn.co/300/ab67616d00001e022a7db835b912dc5014bd37f4ab67616d00001e029d34eb283c35118bdcd2f18aab67616d00001e02af236a3219d347662cb4a284ab67616d00001e02fb368904bdcbe5ba7205abd0 150w,
              https://mosaic.scdn.co/300/ab67616d00001e022a7db835b912dc5014bd37f4ab67616d00001e029d34eb283c35118bdcd2f18aab67616d00001e02af236a3219d347662cb4a284ab67616d00001e02fb368904bdcbe5ba7205abd0 300w,
              https://mosaic.scdn.co/640/ab67616d00001e022a7db835b912dc5014bd37f4ab67616d00001e029d34eb283c35118bdcd2f18aab67616d00001e02af236a3219d347662cb4a284ab67616d00001e02fb368904bdcbe5ba7205abd0 320w,
              https://mosaic.scdn.co/640/ab67616d00001e022a7db835b912dc5014bd37f4ab67616d00001e029d34eb283c35118bdcd2f18aab67616d00001e02af236a3219d347662cb4a284ab67616d00001e02fb368904bdcbe5ba7205abd0 640w
            "
                  />
                </div>
                <div className="album-name-wrapper">
                  <p className="playlist-name">new motivation</p>
                  <div className="type-container">
                    <p className="username-type">Playlist • ryanbezman</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="playlist" id="seven">
              <div className="playlist-container">
                <div className="album-cover-wrapper">
                  <img
                    aria-hidden="true"
                    draggable="false"
                    loading="eager"
                    src="https://mosaic.scdn.co/60/ab67616d00001e022a7db835b912dc5014bd37f4ab67616d00001e025fb65e285bf78b48bba4fb57ab67616d00001e029b28f49db857e25b5374ccb1ab67616d00001e02fd31cd96c4ba94c40532cc34"
                    data-testid="entity-image"
                    alt="piss"
                    className="album"
                    srcSet="
              https://mosaic.scdn.co/60/ab67616d00001e022a7db835b912dc5014bd37f4ab67616d00001e025fb65e285bf78b48bba4fb57ab67616d00001e029b28f49db857e25b5374ccb1ab67616d00001e02fd31cd96c4ba94c40532cc34   30w,
              https://mosaic.scdn.co/60/ab67616d00001e022a7db835b912dc5014bd37f4ab67616d00001e025fb65e285bf78b48bba4fb57ab67616d00001e029b28f49db857e25b5374ccb1ab67616d00001e02fd31cd96c4ba94c40532cc34   60w,
              https://mosaic.scdn.co/300/ab67616d00001e022a7db835b912dc5014bd37f4ab67616d00001e025fb65e285bf78b48bba4fb57ab67616d00001e029b28f49db857e25b5374ccb1ab67616d00001e02fd31cd96c4ba94c40532cc34 150w,
              https://mosaic.scdn.co/300/ab67616d00001e022a7db835b912dc5014bd37f4ab67616d00001e025fb65e285bf78b48bba4fb57ab67616d00001e029b28f49db857e25b5374ccb1ab67616d00001e02fd31cd96c4ba94c40532cc34 300w,
              https://mosaic.scdn.co/640/ab67616d00001e022a7db835b912dc5014bd37f4ab67616d00001e025fb65e285bf78b48bba4fb57ab67616d00001e029b28f49db857e25b5374ccb1ab67616d00001e02fd31cd96c4ba94c40532cc34 320w,
              https://mosaic.scdn.co/640/ab67616d00001e022a7db835b912dc5014bd37f4ab67616d00001e025fb65e285bf78b48bba4fb57ab67616d00001e029b28f49db857e25b5374ccb1ab67616d00001e02fd31cd96c4ba94c40532cc34 640w
            "
                  />
                </div>
                <div className="album-name-wrapper">
                  <p className="playlist-name">piss</p>
                  <div className="type-container">
                    <p className="username-type">Playlist • ryanbezman</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="playlist" id="eight">
              <div className="playlist-container">
                <div className="album-cover-wrapper">
                  <img
                    aria-hidden="true"
                    draggable="false"
                    loading="eager"
                    src="https://mosaic.scdn.co/60/ab67616d00001e022dcab535e36e69ef25239ddaab67616d00001e02985bf5ede2fe4a048ee85f28ab67616d00001e02da8d92affd796f7e20af7375ab67616d00001e02f875c8285d7f26a42baaa2a0"
                    data-testid="entity-image"
                    alt="Old Feels"
                    className="album"
                    srcSet="
              https://mosaic.scdn.co/60/ab67616d00001e022dcab535e36e69ef25239ddaab67616d00001e02985bf5ede2fe4a048ee85f28ab67616d00001e02da8d92affd796f7e20af7375ab67616d00001e02f875c8285d7f26a42baaa2a0   30w,
              https://mosaic.scdn.co/60/ab67616d00001e022dcab535e36e69ef25239ddaab67616d00001e02985bf5ede2fe4a048ee85f28ab67616d00001e02da8d92affd796f7e20af7375ab67616d00001e02f875c8285d7f26a42baaa2a0   60w,
              https://mosaic.scdn.co/300/ab67616d00001e022dcab535e36e69ef25239ddaab67616d00001e02985bf5ede2fe4a048ee85f28ab67616d00001e02da8d92affd796f7e20af7375ab67616d00001e02f875c8285d7f26a42baaa2a0 150w,
              https://mosaic.scdn.co/300/ab67616d00001e022dcab535e36e69ef25239ddaab67616d00001e02985bf5ede2fe4a048ee85f28ab67616d00001e02da8d92affd796f7e20af7375ab67616d00001e02f875c8285d7f26a42baaa2a0 300w,
              https://mosaic.scdn.co/640/ab67616d00001e022dcab535e36e69ef25239ddaab67616d00001e02985bf5ede2fe4a048ee85f28ab67616d00001e02da8d92affd796f7e20af7375ab67616d00001e02f875c8285d7f26a42baaa2a0 320w,
              https://mosaic.scdn.co/640/ab67616d00001e022dcab535e36e69ef25239ddaab67616d00001e02985bf5ede2fe4a048ee85f28ab67616d00001e02da8d92affd796f7e20af7375ab67616d00001e02f875c8285d7f26a42baaa2a0 640w
            "
                  />
                </div>
                <div className="album-name-wrapper">
                  <p className="playlist-name">Old Feels</p>
                  <div className="type-container">
                    <p className="username-type">Playlist • ryanbezman</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="playlist" id="nine">
              <div className="playlist-container">
                <div className="album-cover-wrapper">
                  <img
                    aria-hidden="true"
                    draggable="false"
                    loading="eager"
                    src="https://mosaic.scdn.co/60/ab67616d00001e020b1cfc3df4d9d5d4cbce9208ab67616d00001e025589c3924c7bdf4e78cfc9e3ab67616d00001e0286b0c9728ad3ed338eaeea79ab67616d00001e028e6184189c5e099f5c546500"
                    data-testid="entity-image"
                    alt="feel"
                    className="album"
                    srcSet="
              https://mosaic.scdn.co/60/ab67616d00001e020b1cfc3df4d9d5d4cbce9208ab67616d00001e025589c3924c7bdf4e78cfc9e3ab67616d00001e0286b0c9728ad3ed338eaeea79ab67616d00001e028e6184189c5e099f5c546500   30w,
              https://mosaic.scdn.co/60/ab67616d00001e020b1cfc3df4d9d5d4cbce9208ab67616d00001e025589c3924c7bdf4e78cfc9e3ab67616d00001e0286b0c9728ad3ed338eaeea79ab67616d00001e028e6184189c5e099f5c546500   60w,
              https://mosaic.scdn.co/300/ab67616d00001e020b1cfc3df4d9d5d4cbce9208ab67616d00001e025589c3924c7bdf4e78cfc9e3ab67616d00001e0286b0c9728ad3ed338eaeea79ab67616d00001e028e6184189c5e099f5c546500 150w,
              https://mosaic.scdn.co/300/ab67616d00001e020b1cfc3df4d9d5d4cbce9208ab67616d00001e025589c3924c7bdf4e78cfc9e3ab67616d00001e0286b0c9728ad3ed338eaeea79ab67616d00001e028e6184189c5e099f5c546500 300w,
              https://mosaic.scdn.co/640/ab67616d00001e020b1cfc3df4d9d5d4cbce9208ab67616d00001e025589c3924c7bdf4e78cfc9e3ab67616d00001e0286b0c9728ad3ed338eaeea79ab67616d00001e028e6184189c5e099f5c546500 320w,
              https://mosaic.scdn.co/640/ab67616d00001e020b1cfc3df4d9d5d4cbce9208ab67616d00001e025589c3924c7bdf4e78cfc9e3ab67616d00001e0286b0c9728ad3ed338eaeea79ab67616d00001e028e6184189c5e099f5c546500 640w
            "
                  />
                </div>
                <div className="album-name-wrapper">
                  <p className="playlist-name">feel</p>
                  <div className="type-container">
                    <p className="username-type">Playlist • ryanbezman</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="playlist" id="ten">
              <div className="playlist-container">
                <div className="album-cover-wrapper">
                  <img
                    aria-hidden="true"
                    draggable="false"
                    loading="eager"
                    src="https://mosaic.scdn.co/60/ab67616d00001e02617b7d3433ff3a447faa7c08ab67616d00001e0282705e1bd3e2dce70610ad9dab67616d00001e02c22ec67213b5c7d8cdcfae65ab67616d00001e02f2baf6d743ae26f97777f026"
                    data-testid="entity-image"
                    alt="a boogie"
                    className="album"
                    srcSet="
              https://mosaic.scdn.co/60/ab67616d00001e02617b7d3433ff3a447faa7c08ab67616d00001e0282705e1bd3e2dce70610ad9dab67616d00001e02c22ec67213b5c7d8cdcfae65ab67616d00001e02f2baf6d743ae26f97777f026   30w,
              https://mosaic.scdn.co/60/ab67616d00001e02617b7d3433ff3a447faa7c08ab67616d00001e0282705e1bd3e2dce70610ad9dab67616d00001e02c22ec67213b5c7d8cdcfae65ab67616d00001e02f2baf6d743ae26f97777f026   60w,
              https://mosaic.scdn.co/300/ab67616d00001e02617b7d3433ff3a447faa7c08ab67616d00001e0282705e1bd3e2dce70610ad9dab67616d00001e02c22ec67213b5c7d8cdcfae65ab67616d00001e02f2baf6d743ae26f97777f026 150w,
              https://mosaic.scdn.co/300/ab67616d00001e02617b7d3433ff3a447faa7c08ab67616d00001e0282705e1bd3e2dce70610ad9dab67616d00001e02c22ec67213b5c7d8cdcfae65ab67616d00001e02f2baf6d743ae26f97777f026 300w,
              https://mosaic.scdn.co/640/ab67616d00001e02617b7d3433ff3a447faa7c08ab67616d00001e0282705e1bd3e2dce70610ad9dab67616d00001e02c22ec67213b5c7d8cdcfae65ab67616d00001e02f2baf6d743ae26f97777f026 320w,
              https://mosaic.scdn.co/640/ab67616d00001e02617b7d3433ff3a447faa7c08ab67616d00001e0282705e1bd3e2dce70610ad9dab67616d00001e02c22ec67213b5c7d8cdcfae65ab67616d00001e02f2baf6d743ae26f97777f026 640w
            "
                  />
                </div>
                <div className="album-name-wrapper">
                  <p className="playlist-name">a boogie</p>
                  <div className="type-container">
                    <p className="username-type">Playlist • ryanbezman</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="playlist" id="eleven">
              <div className="playlist-container">
                <div className="album-cover-wrapper">
                  <img
                    aria-hidden="true"
                    draggable="false"
                    loading="eager"
                    src="https://mosaic.scdn.co/60/ab67616d00001e024be1e1408876b8433e3a21b8ab67616d00001e0294af37bf31370e0d738a7a24ab67616d00001e0299cd7d30289d83ac6f78eb6eab67616d00001e02bf0180a53c00e8dd2d5bd82a"
                    data-testid="entity-image"
                    alt="new"
                    className="album"
                    srcSet="
              https://mosaic.scdn.co/60/ab67616d00001e024be1e1408876b8433e3a21b8ab67616d00001e0294af37bf31370e0d738a7a24ab67616d00001e0299cd7d30289d83ac6f78eb6eab67616d00001e02bf0180a53c00e8dd2d5bd82a   30w,
              https://mosaic.scdn.co/60/ab67616d00001e024be1e1408876b8433e3a21b8ab67616d00001e0294af37bf31370e0d738a7a24ab67616d00001e0299cd7d30289d83ac6f78eb6eab67616d00001e02bf0180a53c00e8dd2d5bd82a   60w,
              https://mosaic.scdn.co/300/ab67616d00001e024be1e1408876b8433e3a21b8ab67616d00001e0294af37bf31370e0d738a7a24ab67616d00001e0299cd7d30289d83ac6f78eb6eab67616d00001e02bf0180a53c00e8dd2d5bd82a 150w,
              https://mosaic.scdn.co/300/ab67616d00001e024be1e1408876b8433e3a21b8ab67616d00001e0294af37bf31370e0d738a7a24ab67616d00001e0299cd7d30289d83ac6f78eb6eab67616d00001e02bf0180a53c00e8dd2d5bd82a 300w,
              https://mosaic.scdn.co/640/ab67616d00001e024be1e1408876b8433e3a21b8ab67616d00001e0294af37bf31370e0d738a7a24ab67616d00001e0299cd7d30289d83ac6f78eb6eab67616d00001e02bf0180a53c00e8dd2d5bd82a 320w,
              https://mosaic.scdn.co/640/ab67616d00001e024be1e1408876b8433e3a21b8ab67616d00001e0294af37bf31370e0d738a7a24ab67616d00001e0299cd7d30289d83ac6f78eb6eab67616d00001e02bf0180a53c00e8dd2d5bd82a 640w
            "
                  />
                </div>
                <div className="album-name-wrapper">
                  <p className="playlist-name">new</p>
                  <div className="type-container">
                    <p className="username-type">Playlist • ryanbezman</p>
                  </div>
                </div>
              </div>
            </li> */
}
