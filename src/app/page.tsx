import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className="columns">
        <div className="column1">
          <nav className="home-search">
            <ul className="list">
              <li className="list-bars">
                <svg
                  data-encore-id="icon"
                  role="img"
                  aria-hidden="true"
                  className="home-icon"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732l7.5-4.33z"></path>
                </svg>
                <span className="nav-words">Home</span>
              </li>
              <li className="list-bars">
                <svg
                  className="magnifying"
                  data-encore-id="icon"
                  role="img"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                >
                  <path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path>
                </svg>
                <span className="nav-words">Search</span>
              </li>
            </ul>
          </nav>
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
                  <button className="library-buttons">
                    <span className="button-names">Playlists</span>
                  </button>
                  <button className="library-buttons">
                    <span className="button-names">Artists</span>
                  </button>
                  <button className="library-buttons">
                    <span className="button-names">Albums</span>
                  </button>
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
                  <li className="playlist" id="one">
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
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="column2">
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
              <div className="song-row">
                <div className="song-number">1</div>
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
                    <div className="song-name">Bound 2</div>
                    <div className="artist-wrapper">
                      <div className="explicit">E</div>
                      <div className="artist-name">Kanye West</div>
                    </div>
                  </div>
                </div>
                <div className="song-album">Yeezus</div>
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
                  <div className="time">3:49</div>
                </div>
              </div>
              <div className="song-row">
                <div className="song-number">2</div>
                <div className="song-title">
                  <img
                    aria-hidden="false"
                    draggable="false"
                    loading="eager"
                    src="https://i.scdn.co/image/ab67616d00004851b077674c6b35c5a416b3fadc"
                    alt=""
                    className="album-image"
                    width="40"
                    height="40"
                  />
                  <div className="song-container">
                    <div className="song-name">
                      Another Round (feat. Chris ...
                    </div>
                    <div className="artist-wrapper">
                      <div className="explicit">E</div>
                      <div className="artist-name">Fat Joe, Chris Brown</div>
                    </div>
                  </div>
                </div>
                <div className="song-album">Another Round (feat. Chris...</div>
                <div className="song-date">Jun 24, 2022</div>
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
                  <div className="time">4:48</div>
                </div>
              </div>
              <div className="song-row">
                <div className="song-number">3</div>
                <div className="song-title">
                  <img
                    aria-hidden="false"
                    draggable="false"
                    loading="eager"
                    src="https://i.scdn.co/image/ab67616d000048519ada5159701e3655f3d718aa"
                    alt=""
                    className="album-image"
                    width="40"
                    height="40"
                  />
                  <div className="song-container">
                    <div className="song-name">Rns</div>
                    <div className="artist-wrapper">
                      <div className="explicit">E</div>
                      <div className="artist-name">
                        Vado, Jadakiss, Troy Ave
                      </div>
                    </div>
                  </div>
                </div>
                <div className="song-album">Slime Flu 4</div>
                <div className="song-date">Feb 28, 2022</div>
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
                  <div className="time">3:53</div>
                </div>
              </div>
              <div className="song-row">
                <div className="song-number">4</div>
                <div className="song-title">
                  <img
                    aria-hidden="false"
                    draggable="false"
                    loading="eager"
                    src="https://i.scdn.co/image/ab67616d00004851f850a56927d864922a94b570"
                    alt=""
                    className="album-image"
                    width="40"
                    height="40"
                  />
                  <div className="song-container">
                    <div className="song-name">Off da Meter</div>
                    <div className="artist-wrapper">
                      <div className="explicit">E</div>
                      <div className="artist-name">Kevin Gates</div>
                    </div>
                  </div>
                </div>
                <div className="song-album">Murder for Hire 2</div>
                <div className="song-date">Jul 13, 2019</div>
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
                  <div className="time">3:48</div>
                </div>
              </div>
              <div className="song-row">
                <div className="song-number">5</div>
                <div className="song-title">
                  <img
                    aria-hidden="false"
                    draggable="false"
                    loading="eager"
                    src="https://i.scdn.co/image/ab67616d00004851f69d27f92bb2af0eb9fa6004"
                    alt=""
                    className="album-image"
                    width="40"
                    height="40"
                  />
                  <div className="song-container">
                    <div className="song-name">Drip Too Hard</div>
                    <div className="artist-wrapper">
                      <div className="explicit">E</div>
                      <div className="artist-name">Lil Baby, Gunna</div>
                    </div>
                  </div>
                </div>
                <div className="song-album">Drip Too Hard</div>
                <div className="song-date">Jan 13, 2019</div>
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
                  <div className="time">2:25</div>
                </div>
              </div>
              <div className="song-row">
                <div className="song-number">6</div>
                <div className="song-title">
                  <img
                    aria-hidden="false"
                    draggable="false"
                    loading="eager"
                    src="https://i.scdn.co/image/ab67616d000048519d34eb283c35118bdcd2f18a"
                    alt=""
                    className="album-image"
                    width="40"
                    height="40"
                  />
                  <div className="song-container">
                    <div className="song-name">Jus Wanna</div>
                    <div className="artist-wrapper">
                      <div className="explicit">E</div>
                      <div className="artist-name">Kevin Gates</div>
                    </div>
                  </div>
                </div>
                <div className="song-album">By Any Means 2</div>
                <div className="song-date">Jan 11, 2019</div>
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
                  <div className="time">3:51</div>
                </div>
              </div>
              <div className="song-row">
                <div className="song-number">7</div>
                <div className="song-title">
                  <img
                    aria-hidden="false"
                    draggable="false"
                    loading="eager"
                    src="https://i.scdn.co/image/ab67616d00004851f1cfa41a28a0a2d3ef90faaa"
                    alt=""
                    className="album-image"
                    width="40"
                    height="40"
                  />
                  <div className="song-container">
                    <div className="song-name">Fearless</div>
                    <div className="artist-wrapper">
                      <div className="artist-name">Lost Sky</div>
                    </div>
                  </div>
                </div>
                <div className="song-album">Fearless</div>
                <div className="song-date">Sep 28, 2018</div>
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
                  <div className="time">3:14</div>
                </div>
              </div>
              <div className="song-row">
                <div className="song-number">8</div>
                <div className="song-title">
                  <img
                    aria-hidden="false"
                    draggable="false"
                    loading="eager"
                    src="https://i.scdn.co/image/ab67616d000048517e09670f90cd47b3fb9a23e0"
                    alt=""
                    className="album-image"
                    width="40"
                    height="40"
                  />
                  <div className="song-container">
                    <div className="song-name">Mr. Jones</div>
                    <div className="artist-wrapper">
                      <div className="artist-name">Counting Crows</div>
                    </div>
                  </div>
                </div>
                <div className="song-album">August and Everything After</div>
                <div className="song-date">Sep 5, 2018</div>
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
                  <div className="time">4:32</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column3">
          <div className="middle-of-night">
            <div>
              <span>Uber</span>
            </div>
            <button className="close">
              <svg
                data-encore-id="icon"
                role="img"
                aria-hidden="true"
                viewBox="0 0 16 16"
                className="close-icon"
              >
                <path d="M2.47 2.47a.75.75 0 0 1 1.06 0L8 6.94l4.47-4.47a.75.75 0 1 1 1.06 1.06L9.06 8l4.47 4.47a.75.75 0 1 1-1.06 1.06L8 9.06l-4.47 4.47a.75.75 0 0 1-1.06-1.06L6.94 8 2.47 3.53a.75.75 0 0 1 0-1.06Z"></path>
              </svg>
            </button>
          </div>
          <div className="song-art-container">
            <img
              aria-hidden="false"
              draggable="false"
              loading="eager"
              src="https://i.scdn.co/image/ab67616d00001e0253a2e11c1bde700722fecd2e"
              data-testid="cover-art-image"
              alt=""
              className="song-art"
            />
            <div className="song-details">
              <div className="font-wrapper">
                <div className="song-header">MIDDLE OF THE NIGHT</div>
                <span className="last-name">Elley Duhé</span>
              </div>
              <svg
                data-encore-id="icon"
                role="img"
                aria-hidden="true"
                viewBox="0 0 16 16"
                className="baby-heart"
              >
                <path d="M1.69 2A4.582 4.582 0 0 1 8 2.023 4.583 4.583 0 0 1 11.88.817h.002a4.618 4.618 0 0 1 3.782 3.65v.003a4.543 4.543 0 0 1-1.011 3.84L9.35 14.629a1.765 1.765 0 0 1-2.093.464 1.762 1.762 0 0 1-.605-.463L1.348 8.309A4.582 4.582 0 0 1 1.689 2zm3.158.252A3.082 3.082 0 0 0 2.49 7.337l.005.005L7.8 13.664a.264.264 0 0 0 .311.069.262.262 0 0 0 .09-.069l5.312-6.33a3.043 3.043 0 0 0 .68-2.573 3.118 3.118 0 0 0-2.551-2.463 3.079 3.079 0 0 0-2.612.816l-.007.007a1.501 1.501 0 0 1-2.045 0l-.009-.008a3.082 3.082 0 0 0-2.121-.861z"></path>
              </svg>
              <svg
                data-encore-id="icon"
                role="img"
                aria-hidden="true"
                viewBox="0 0 16 16"
                className="dots"
              >
                <path d="M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
              </svg>
            </div>
          </div>
          <div className="random-lady-container">
            <div className="random-lady">
              <div className="about-artist">About the artist</div>
            </div>
            <div className="elley-info">
              <div className="elley-name">Elley Duhé</div>
              <div className="monthly-listeners-container">
                <div className="monthly-listeners">
                  22,216,772 monthly listeners
                </div>
                <div className="follow">Follow</div>
              </div>
              <div className="email">
                extraterrestrial mgmt: jhill@notfitforsociety.com
                tabarif@notfitforsociety.com
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="now-playing-container">
          <div className="playing-song-container">
            <div className="album-image-wrapper">
              <img
                aria-hidden="false"
                draggable="false"
                loading="eager"
                src="https://i.scdn.co/image/ab67616d00001e0253a2e11c1bde700722fecd2e"
                data-testid="cover-art-image"
                alt=""
                className="playing-album-cover"
              />
            </div>
            <div className="heart-word">
              <div className="song-bottom-container">
                <div className="top-bottom">MIDDLE OF THE NIGHT</div>
                <div className="bottom-bottom">Elley Duhe</div>
              </div>
              <div className="mini-heart-container">
                <svg
                  data-encore-id="icon"
                  role="img"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  className="mini-heart-icon"
                >
                  <path d="M1.69 2A4.582 4.582 0 0 1 8 2.023 4.583 4.583 0 0 1 11.88.817h.002a4.618 4.618 0 0 1 3.782 3.65v.003a4.543 4.543 0 0 1-1.011 3.84L9.35 14.629a1.765 1.765 0 0 1-2.093.464 1.762 1.762 0 0 1-.605-.463L1.348 8.309A4.582 4.582 0 0 1 1.689 2zm3.158.252A3.082 3.082 0 0 0 2.49 7.337l.005.005L7.8 13.664a.264.264 0 0 0 .311.069.262.262 0 0 0 .09-.069l5.312-6.33a3.043 3.043 0 0 0 .68-2.573 3.118 3.118 0 0 0-2.551-2.463 3.079 3.079 0 0 0-2.612.816l-.007.007a1.501 1.501 0 0 1-2.045 0l-.009-.008a3.082 3.082 0 0 0-2.121-.861z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="play-controls-container">
          <div className="play-controls">
            <div className="play-buttons">
              <div className="play-controls-left">
                <div className="button-wrapper">
                  <svg
                    data-encore-id="icon"
                    role="img"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    className="shuffle"
                  >
                    <path d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z"></path>
                    <path d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z"></path>
                  </svg>
                </div>
                <div className="button-wrapper">
                  <svg
                    data-encore-id="icon"
                    role="img"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    className="shuffle"
                  >
                    <path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"></path>
                  </svg>
                </div>
              </div>
              <button className="play-controls-middle">
                <svg
                  data-encore-id="icon"
                  role="img"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  className="black-play-button"
                >
                  <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
                </svg>
              </button>
              <div className="play-controls-right">
                <div className="button-wrapper-right">
                  <svg
                    data-encore-id="icon"
                    role="img"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    className="next"
                  >
                    <path d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"></path>
                  </svg>
                </div>
                <div className="button-wrapper-right">
                  <svg
                    data-encore-id="icon"
                    role="img"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    className="randomize"
                  >
                    <path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="playback-bar">
            <div className="play-time-left">0:03</div>
            <div className="playbar"></div>
            <div className="play-time-right">3:04</div>
          </div>
        </div>
        <div className="bottom-end-container">
          <div className="bottom-end-buttons">
            <button className="bottom-button-wrapper">
              <svg
                data-encore-id="icon"
                role="img"
                aria-hidden="true"
                viewBox="0 0 16 16"
                className="bottom-icons-first"
              >
                <path d="M11.196 8 6 5v6l5.196-3z"></path>
                <path d="M15.002 1.75A1.75 1.75 0 0 0 13.252 0h-10.5a1.75 1.75 0 0 0-1.75 1.75v12.5c0 .966.783 1.75 1.75 1.75h10.5a1.75 1.75 0 0 0 1.75-1.75V1.75zm-1.75-.25a.25.25 0 0 1 .25.25v12.5a.25.25 0 0 1-.25.25h-10.5a.25.25 0 0 1-.25-.25V1.75a.25.25 0 0 1 .25-.25h10.5z"></path>
              </svg>
            </button>
            <button className="bottom-button-wrapper">
              <svg
                data-encore-id="icon"
                role="img"
                aria-hidden="true"
                viewBox="0 0 16 16"
                className="bottom-icons"
              >
                <path d="M13.426 2.574a2.831 2.831 0 0 0-4.797 1.55l3.247 3.247a2.831 2.831 0 0 0 1.55-4.797zM10.5 8.118l-2.619-2.62A63303.13 63303.13 0 0 0 4.74 9.075L2.065 12.12a1.287 1.287 0 0 0 1.816 1.816l3.06-2.688 3.56-3.129zM7.12 4.094a4.331 4.331 0 1 1 4.786 4.786l-3.974 3.493-3.06 2.689a2.787 2.787 0 0 1-3.933-3.933l2.676-3.045 3.505-3.99z"></path>
              </svg>
            </button>
            <button className="bottom-button-wrapper">
              <svg
                data-encore-id="icon"
                role="img"
                aria-hidden="true"
                viewBox="0 0 16 16"
                className="bottom-icons"
              >
                <path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 1 3.5zm2.5-1a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2h-9z"></path>
              </svg>
            </button>
            <button className="bottom-button-wrapper">
              <svg
                data-encore-id="icon"
                role="presentation"
                aria-hidden="true"
                className="bottom-icons"
                viewBox="0 0 16 16"
              >
                <path d="M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15h-6.5A1.75 1.75 0 0 1 6 13.25V2.75zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25h-6.5zm-6 0a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25H4V11H1.75A1.75 1.75 0 0 1 0 9.25v-6.5C0 1.784.784 1 1.75 1H4v1.5H1.75zM4 15H2v-1.5h2V15z"></path>
                <path d="M13 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-1-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
              </svg>
            </button>
            <button className="bottom-button-wrapper">
              <svg
                data-encore-id="icon"
                role="presentation"
                aria-label="Volume high"
                aria-hidden="true"
                id="volume-icon"
                viewBox="0 0 16 16"
                className="bottom-icons"
              >
                <path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"></path>
                <path d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z"></path>
              </svg>
            </button>
            <div className="volume-container">
              <div className="volume-bar"></div>
            </div>
            <button className="bottom-button-wrapper">
              <svg
                data-encore-id="icon"
                role="img"
                aria-hidden="true"
                viewBox="0 0 16 16"
                className="bottom-icons"
              >
                <path d="M16 2.45c0-.8-.65-1.45-1.45-1.45H1.45C.65 1 0 1.65 0 2.45v11.1C0 14.35.65 15 1.45 15h5.557v-1.5H1.5v-11h13V7H16V2.45z"></path>
                <path d="M15.25 9.007a.75.75 0 0 1 .75.75v4.493a.75.75 0 0 1-.75.75H9.325a.75.75 0 0 1-.75-.75V9.757a.75.75 0 0 1 .75-.75h5.925z"></path>
              </svg>
            </button>
            <button className="bottom-button-wrapper">
              <svg
                data-encore-id="icon"
                role="img"
                aria-hidden="true"
                viewBox="0 0 16 16"
                className="bottom-icons"
              >
                <path d="M6.53 9.47a.75.75 0 0 1 0 1.06l-2.72 2.72h1.018a.75.75 0 0 1 0 1.5H1.25v-3.579a.75.75 0 0 1 1.5 0v1.018l2.72-2.72a.75.75 0 0 1 1.06 0zm2.94-2.94a.75.75 0 0 1 0-1.06l2.72-2.72h-1.018a.75.75 0 1 1 0-1.5h3.578v3.579a.75.75 0 0 1-1.5 0V3.81l-2.72 2.72a.75.75 0 0 1-1.06 0z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
