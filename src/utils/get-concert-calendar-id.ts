import { calendar_v3 } from "googleapis";

export const getConcertCalendarId = async (calendar: calendar_v3.Calendar) => {
  const calendarsRes = await calendar.calendarList.list();
  const calendars = calendarsRes.data.items;
  const existingCalendar = calendars?.find((cal) => cal.summary === "Concertpal");

  if (existingCalendar) {
    return existingCalendar.id;
  }

  const newCalendar = await calendar.calendars.insert({
    requestBody: {
      summary: "ConcertPal",
      description: "A calendar for tracking concerts",
      timeZone: "America/New_York",
    },
  });

  return newCalendar.data.id;
};
