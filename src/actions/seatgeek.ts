"use server";

export const getArtistInfo = async (artistName: string) => {
  try {
    const response = await fetch(
      `https://api.seatgeek.com/2/performers?q=${artistName}&client_id=${process.env.SEATGEEK_API_CLIENT_ID}`,
    );

    if (response.status !== 200) return null;

    const data = await response.json();

    if (!data) return null;

    const artists = data.performers;

    if (artists.length == 0) return null;

    return { id: artists[0].id as string, name: artists[0].name as string };
  } catch (error) {
    return null;
  }
};

export const getEventInfo = async (artistId: string) => {
  try {
    const response = await fetch(
      `https://api.seatgeek.com/2/events?performers.id=${artistId}&client_id=${process.env.SEATGEEK_API_CLIENT_ID}`,
    );

    if (response.status !== 200) {
      console.log("Error", response.status);
      return null;
    }

    const data = await response.json();

    if (!data) {
      console.log("No Data found");
      return null;
    }

    const events: EventData[] = data.events.map((event: any) => {
      const date = new Date(event?.datetime_utc);

      return {
        title: event?.title,
        url: event?.url,
        venue: event?.venue?.name,
        city: event?.venue?.city,
        state: event?.venue?.state,
        country: event?.venue?.country,
        zipcode: event?.venue?.postal_code,
        dateTime: date,
      } as EventData;
    });

    console.log("Events", events);

    return events;
  } catch (error) {
    console.log(error);
    return null;
  }
};
