import { prisma } from "@/lib/db";
import { Loader2 } from "lucide-react";

type ArtistInfoProps = {
  name: string;
  categories: string[];
  imageSrc: string;
};

type TopArtistsProps = {
  userId: string;
};

const ArtistInfo = ({ name, categories, imageSrc }: ArtistInfoProps) => {
  return (
    <div className="flex gap-2 items-center">
      <img className="w-14 h-14 rounded-full" src={imageSrc} alt="" />
      <span className="flex flex-col">
        <h4 className="text-lg font-semibold tracking-tight">{name}</h4>
        {categories.length > 0 && (
          <p className="max-w-32 text-gray-400 text-sm font-light capitalize truncate">
            {categories.join(", ")}
          </p>
        )}
      </span>
    </div>
  );
};

const TopArtists = async ({ userId }: TopArtistsProps) => {
  const data = await prisma.userToArtist.findMany({
    where: {
      userId,
    },

    include: {
      artist: true,
    },
  });

  const artistData = data.map((item) => item.artist);

  return (
    <div className="w-2/4 h-fit bg-white flex flex-col items-start gap-10 p-4 rounded">
      <div className="flex flex-col">
        <h4 className="text-lg tracking-tight font-semibold text-gray-900">Top Artists</h4>

        <p className="text-sm text-gray-400">
          Click on an artist to see their upcoming concerts in your area.
        </p>
      </div>

      {!artistData || artistData.length == 0 ? (
        <div className="w-full flex flex-col justify-center items-center gap-2 p-4">
          <p className="font-light tracking-tight text-gray-400">
            We are still processing your artist data. Come back later..
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {artistData.map((artist) => (
            <ArtistInfo
              key={artist.id}
              name={artist.name}
              categories={artist.genres}
              imageSrc={artist.image}
            />
          ))}
        </div>

        // <div className="flex flex-wrap justify-evenly gap-5">
        //   {artistData.map((artist) => (
        //     <ArtistInfo
        //       key={artist.id}
        //       name={artist.name}
        //       categories={artist.genres}
        //       imageSrc={artist.image}
        //     />
        //   ))}
        // </div>
      )}
    </div>
  );
};

export default TopArtists;
