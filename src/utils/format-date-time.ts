function formatDateTime(dateInput: string | Date): string {
  const date = new Date(dateInput);

  if (isNaN(date.getTime())) {
    throw new Error("Invalid date input");
  }

  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" }); // Jul
  const year = date.getFullYear();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedMinutes = minutes.toString().padStart(2, "0");

  const period = hours >= 12 ? "P.M" : "A.M";
  const formattedHours = hours % 12 || 12; // Convert 0 to 12-hour format

  return `${day} ${month} ${year}, ${formattedHours}:${formattedMinutes} ${period}`;
}

export default formatDateTime;
