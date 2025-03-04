import NoConcerts from "@/assets/no-concerts";
import { prisma } from "@/lib/db";
import formatDateTime from "@/utils/format-date-time";
//@ts-ignore
import zippy from "zipcode-city-distance";
import { EventStatus } from "@prisma/client";
import { Clock, MapPin, Wifi } from "lucide-react";
import { ReactNode } from "react";

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
};

const UpcomingEventsWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-2/4 h-fit bg-white flex flex-col items-start gap-10 p-4 rounded">
      <div className="w-full flex flex-col">
        <h4 className="text-lg tracking-tight font-semibold text-gray-900">Upcoming Events</h4>
        <p className="text-sm text-gray-400">Here are the upcoming events you can attend.</p>
      </div>
      {children}
    </div>
  );
};

const EventInfo = ({ artistName, artistImage, venue, dateTime }: EventInfoProps) => {
  return (
    <div className="flex justify-start items-start gap-2">
      <span>
        <img className="h-12 w-12 rounded-full object-cover" src={artistImage} alt="img" />
      </span>

      <div className="flex flex-col items-start gap-1">
        <span className="flex justify-center items-center gap-2">
          <Wifi className="rotate-45" size={16} />
          <p className="font-semibold tracking-tight text-gray-900">{artistName}</p>
        </span>

        <span className="flex justify-center items-center gap-2">
          <MapPin className="text-white fill-gray-400" size={16} />
          <p className="text-gray-600 text-sm font-medium tracking-tight">{venue}</p>
        </span>

        <span className="flex justify-center items-center gap-2">
          <Clock className="text-white fill-gray-400" size={16} />
          <p className="text-xs font-light text-gray-400">{formatDateTime(dateTime)}</p>
        </span>
      </div>
    </div>
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

  if (artists.length == 0) return;

  const zipcodesInUsersRange = zippy.getRadius(zipcode, process.env.NEXT_PUBIC_EVENT_RADIUS, "M");

  if (zipcodesInUsersRange.error)
    return (
      <UpcomingEventsWrapper>
        <div className="w-full flex flex-col items-center gap-4">
          <NoConcerts />
          <h4 className="text-3xl font-light font-serif text-black">
            This zipcode is not yet supported !
          </h4>
          <p className="max-w-[417px] text-gray-400 font-light text-center">
            We are not supporting the concerts in your area yet. Please try again later.
          </p>
        </div>
      </UpcomingEventsWrapper>
    );

  const events = await prisma.event.findMany({
    where: {
      artistId: {
        in: artists.map((data) => data.id),
      },
      zipcode: {
        in: [...zipcodesInUsersRange?.map((data: any) => data.zipcode), zipcode],
      },
    },
  });

  if (!events || events.length == 0)
    return (
      <UpcomingEventsWrapper>
        <div className="w-full flex flex-col items-center gap-5">
          <NoConcerts />
          <h4 className="text-3xl font-light font-serif text-black">
            No concerts near your area at the moment!
          </h4>
          <p className="max-w-[417px] text-gray-400 font-light text-center">
            We found no artists performing near you. Please try again later.
          </p>
        </div>
      </UpcomingEventsWrapper>
    );

  return (
    <UpcomingEventsWrapper>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2 gap-8">
        {events.map((event) => {
          const artist = artists.find((artist) => artist.id == event.artistId);
          if (!artist) return;
          return (
            <EventInfo
              key={event.id}
              artistName={artist.name}
              artistImage={artist.image}
              venue={event.venue}
              dateTime={event.dateTime}
            />
          );
        })}
      </div>
    </UpcomingEventsWrapper>
  );
};

export default UpcomingEvents;
