import { circularTitle } from "@/app/fonts";

export function RightSideBar() {
  return (
    <>
      <div className="middle-of-night">
        <div>
          <span>Elley Duhe</span>
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
            <div className={`song-header ${circularTitle.className}`}>
              MIDDLE OF THE NIGHT
            </div>
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
    </>
  );
}
