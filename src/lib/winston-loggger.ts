import { format, createLogger, transports } from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
import path from "path";
import formatTimestamp from "@/utils/format-timestamp";

const levels: { [key: string]: number } = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

const { combine, timestamp, printf, colorize } = format;

const customFormat = printf(({ level, message, timestamp }) => {
  return `[ ${formatTimestamp(timestamp as string)} ] -  ${level} -  ${message}`;
});

const logger = createLogger({
  levels,
  format: combine(timestamp(), customFormat),
  transports: [
    new transports.Console({
      format: combine(colorize(), timestamp(), customFormat),
    }),
    new DailyRotateFile({
      filename: path.join("logs", "info-%DATE%.log"),
      datePattern: "YYYY-MM-DD",
      level: "info",
      maxFiles: "14d",
    }),

    new DailyRotateFile({
      filename: path.join("logs", "error-%DATE%.log"),
      datePattern: "YYYY-MM-DD",
      level: "error",
      maxFiles: "14d",
    }),

    new DailyRotateFile({
      filename: path.join("logs", "http-%DATE%.log"),
      datePattern: "YYYY-MM-DD",
      level: "http",
      maxFiles: "14d",
    }),

    new DailyRotateFile({
      filename: path.join("logs", "warn-%DATE%.log"),
      datePattern: "YYYY-MM-DD",
      level: "warn",
      maxFiles: "14d",
    }),
  ],
});

export { logger };
