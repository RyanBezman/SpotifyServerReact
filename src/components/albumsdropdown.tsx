import { PrismaClient } from "@prisma/client";
import Link from "next/link";

const prisma = new PrismaClient();

export async function AlbumsDropdown() {
  const albums = await prisma.album.findMany({});

  return albums.map((album) => {
    return (
      <li className="playlist" id="one" key={album.name}>
        <Link
          href={`?filter=albums&albumid=${album.id}`}
          style={{ textDecoration: "none" }}
        >
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
                <p className="username-type">Album • ryanbezman</p>
              </div>
            </div>
          </div>
        </Link>
      </li>
    );
  });
}
