import NoConcerts from "@/assets/no-concerts";
import { prisma } from "@/lib/db";
import formatDateTime from "@/utils/format-date-time";
//@ts-ignore
import zippy from "zipcode-city-distance";
import { EventStatus } from "@prisma/client";
import { Clock, MapPin, Wifi } from "lucide-react";
import { ReactNode } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CustomCarouselNext,
  CustomCarouselPrev,
} from "@/components/ui/carousel";
import { chunkArray } from "@/utils/chunk-array";

type UpcomingEventsProps = {
  userId: string;
  eventStatus: EventStatus;
  state: string | null;
  city: string | null;
  zipcode: string | null;
};

type EventInfoProps = {
  artistName: string;
  artistImage: string;
  venue: string;
  dateTime: Date;
  url: string;
};

const UpcomingEventsWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <section className="w-full flex flex-col rounded-lg">
      <div className="bg-[#D3F4EF] flex items-center gap-4 p-3 rounded-t-lg">
        <EventIcon />
        <h2 className="text-xl font-medium">Upcoming Events</h2>
      </div>
      <div className="bg-white/50 flex flex-col gap-6 p-3 rounded-b-lg">{children}</div>
    </section>
  );
};

const EventInfo = ({ artistName, artistImage, venue, dateTime, url }: EventInfoProps) => {
  return (
    <a href={url} target="_blank" className="w-fit rounded-lg hover:scale-95 duration-300">
      <div className="w-[280px] p-4 bg-white flex justify-start items-start gap-4 rounded-lg cursor-pointer">
        <span>
          <img className="h-14 w-14 rounded-full object-cover" src={artistImage} alt="img" />
        </span>

        <div className="flex flex-col items-start gap-1">
          <span className="flex justify-center items-center gap-2">
            <Wifi className="rotate-45" size={16} />
            <p className="max-w-[150px] font-semibold tracking-tight text-gray-900 trun">{artistName}</p>
          </span>

          <span className="flex justify-center items-center gap-2">
            <MapPin className="text-white fill-gray-400" size={16} />
            <p className="max-w-[150px] text-gray-600 text-sm font-medium tracking-tight truncate">{venue}</p>
          </span>

          <span className="flex justify-center items-center gap-2">
            <Clock className="text-white fill-gray-400" size={16} />
            <p className="text-xs font-light text-gray-400">{formatDateTime(dateTime)}</p>
          </span>
        </div>
      </div>
    </a>
  );
};

const UpcomingEvents = async ({
  userId,
  eventStatus,
  city,
  state,
  zipcode,
}: UpcomingEventsProps) => {
  if (eventStatus == "FAILED")
    return (
      <UpcomingEventsWrapper>
        <div className="w-full flex flex-col items-center gap-5">
          <NoConcerts />
          <h4 className="text-3xl font-light font-serif text-black">Oops! Something went wrong.</h4>
          <p className="max-w-[417px] text-gray-400 font-light text-center">
            We ran into a technical issue. Please try again later.
          </p>
        </div>
      </UpcomingEventsWrapper>
    );

  const artistData = await prisma.userToArtist.findMany({
    where: {
      userId,
    },
    include: {
      artist: true,
    },
  });

  const artists = artistData.map((data) => data.artist);

  if (artists.length == 0) return null;

  // const zipcodesInUsersRange = zippy.getRadius(zipcode, process.env.NEXT_PUBIC_EVENT_RADIUS, "M");

  // if (zipcodesInUsersRange.error) {
  //   return (
  //     <UpcomingEventsWrapper>
  //       <div className="w-full flex flex-col items-center gap-4">
  //         <NoConcerts />
  //         <h4 className="text-3xl font-light font-serif text-black">
  //           This zipcode is not yet supported !
  //         </h4>
  //         <p className="max-w-[417px] text-gray-400 font-light text-center">
  //           We are not supporting the concerts in your area yet. Please try again later.
  //         </p>
  //       </div>
  //     </UpcomingEventsWrapper>
  //   );
  // }

  const events = await prisma.event.findMany({
    where: {
      artistId: {
        in: artists.map((data) => data.id),
      },
      // zipcode: {
      //   in: [...zipcodesInUsersRange?.map((data: any) => data.zipcode), zipcode],
      // },
    },
  });

  if (!events || events.length == 0) {
    return (
      <UpcomingEventsWrapper>
        <div className="w-full flex flex-col items-center gap-5">
          <NoConcerts />
          <h4 className="text-3xl font-light font-serif text-black">
            No concerts near your area at the moment!
          </h4>
          <p className="max-w-[417px] text-gray-400 font-light text-center">
            We are still finding concerts near you. Please come back later.
          </p>
        </div>
      </UpcomingEventsWrapper>
    );
  }

  const chunkedEvents = chunkArray(events, 15);

  return (
    <UpcomingEventsWrapper>
      <p className="text-[#1A9882] text-sm font-semibold">
        Here are the upcoming events you can attend.
      </p>
      <Carousel>
        <div className="flex flex-col gap-5">
          <CarouselContent>
            {chunkedEvents.map((eventChunk, index) => (
              <CarouselItem key={index}>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                  {eventChunk.map((event) => {
                    const artist = artists.find((artist) => artist.id == event.artistId);
                    if (!artist) return null;

                    return (
                      <EventInfo
                        key={event.id}
                        artistName={artist.name}
                        artistImage={artist.image}
                        venue={event.venue}
                        dateTime={event.dateTime}
                        url={event.url}
                      />
                    );
                  })}
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
    </UpcomingEventsWrapper>
  );
};

export default UpcomingEvents;

const EventIcon = () => {
  return (
    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.5117 3.26904V7.0238"
        stroke="#1A9882"
        strokeWidth="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.5264 3.26904V7.0238"
        stroke="#1A9882"
        strokeWidth="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.88086 12.1426H26.1578"
        stroke="#1A9882"
        strokeWidth="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M26.7834 11.4039V22.0424C26.7834 25.7972 24.9061 28.3004 20.5255 28.3004H10.5128C6.13226 28.3004 4.25488 25.7972 4.25488 22.0424V11.4039C4.25488 7.64917 6.13226 5.146 10.5128 5.146H20.5255C24.9061 5.146 26.7834 7.64917 26.7834 11.4039Z"
        stroke="#1A9882"
        strokeWidth="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.5134 17.9124H15.5247"
        stroke="#1A9882"
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.8806 17.9124H10.8919"
        stroke="#1A9882"
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.8806 21.6673H10.8919"
        stroke="#1A9882"
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
