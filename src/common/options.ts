import { LogHandler } from "./log";

/** Configuration options for a lighthouse connection. */
export interface Options {
  /** The url of the lighthouse WebSocket server. */
  url: string;
  /** A consumer of log messages. */
  logHandler: LogHandler;
}