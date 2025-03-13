import { prisma } from "@/lib/db";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CustomCarouselNext,
  CustomCarouselPrev,
} from "@/components/ui/carousel";
import { chunkArray } from "@/utils/chunk-array";
import { ReactNode } from "react";
import NoConcerts from "@/assets/no-concerts";

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
    <div className="w-[280px] flex bg-white p-4 gap-4 items-center rounded-lg cursor-pointer hover:scale-95 duration-300">
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

const TopArtistsWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <section className="w-full flex flex-col rounded-lg">
      <div className="bg-[#D3F4EF] flex items-center gap-4 p-3 rounded-t-lg">
        <BeatIcon />
        <h2 className="text-xl font-medium">Your Top Artists</h2>
      </div>
      <div className="bg-white/50 flex flex-col gap-6 p-3 rounded-b-lg">{children}</div>
    </section>
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

  if (!data || data.length == 0)
    return (
      <TopArtistsWrapper>
        <div className="w-full flex flex-col items-center gap-5">
          <NoConcerts />
          <h4 className="text-3xl font-light font-serif text-black">
            We are processing your artist data at the moment!
          </h4>
          <p className="max-w-[417px] text-gray-400 font-light text-center">
            We are still finding top artists from your spotify. Please come back later.
          </p>
        </div>
      </TopArtistsWrapper>
    );

  const artistData = data.map((item) => item.artist);
  const chunkedArtists = chunkArray(artistData, 15);

  return (
    <TopArtistsWrapper>
      <p className="text-[#1A9882] text-sm font-semibold">
        Click on an artist to see their upcoming concerts in your area!
      </p>
      <Carousel>
        <div className="flex flex-col gap-5">
          <CarouselContent>
            {chunkedArtists.map((artistChunk, index) => (
              <CarouselItem key={index}>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                  {artistChunk.map((artist) => (
                    <ArtistInfo
                      key={artist.name}
                      name={artist.name}
                      categories={artist.genres}
                      imageSrc={artist.image}
                    />
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-end">
            {/* <p className="text-[#A5A5AB]">Showing 9 of 15</p> */}

            <span className="flex justify-center items-center gap-2 pr-10">
              <CustomCarouselPrev />
              <CustomCarouselNext />
            </span>
          </div>
        </div>
      </Carousel>
    </TopArtistsWrapper>
  );
};

export default TopArtists;

const BeatIcon = () => {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.57449 24.1641C6.27249 24.1641 7.64899 22.9865 7.64899 21.5337C7.64899 20.081 6.27249 18.9033 4.57449 18.9033C2.8765 18.9033 1.5 20.081 1.5 21.5337C1.5 22.9865 2.8765 24.1641 4.57449 24.1641Z"
        stroke="#1A9882"
        strokeWidth="1.5"
        stroke-miterlimit="10"
      />
      <path
        d="M20.9729 20.6566C22.6709 20.6566 24.0474 19.4789 24.0474 18.0262C24.0474 16.5734 22.6709 15.3958 20.9729 15.3958C19.2749 15.3958 17.8984 16.5734 17.8984 18.0262C17.8984 19.4789 19.2749 20.6566 20.9729 20.6566Z"
        stroke="#1A9882"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M24.0457 18.0264V1.36719L7.64844 4.87439V21.5336M24.0457 7.5048L7.64844 11.012"
        stroke="#1A9882"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
