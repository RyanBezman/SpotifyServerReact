import { PrismaClient } from "@prisma/client";
import Link from "next/link";

const prisma = new PrismaClient();

export async function ArtistsDropdown() {
  const artists = await prisma.artist.findMany({});

  return artists.map((artist) => {
    return (
      <li className="playlist" id="one" key={artist.name}>
        <Link
          href={`?filter=artists&artistid=${artist.id}`}
          style={{ textDecoration: "none" }}
        >
          <div className="playlist-container">
            <div className="album-cover-wrapper"></div>
            <div className="album-name-wrapper">
              <p className="playlist-name">{artist.name}</p>
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
        </Link>
      </li>
    );
  });
}
