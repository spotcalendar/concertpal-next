import { format, parseISO } from "date-fns";

function formatTimestamp(timestamp: string): string {
    const date = parseISO(timestamp);
    return format(date, "yyyy-MM-dd HH:mm:ss");
}

export default formatTimestamp