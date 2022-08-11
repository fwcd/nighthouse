import { Connection, Logger, NoopLogHandler, Options } from "nighthouse-common";
import { BrowserWebSocketTransport } from "./transport";

export * from "nighthouse-common";

/** Connects to the lighthouse at the given (ws/wss) URL. */
export function connect(opts: Options): Connection {
  const ws = new WebSocket(opts.url);
  const logger = new Logger(opts.logHandler ?? new NoopLogHandler());
  const transport = new BrowserWebSocketTransport(ws, logger);
  return new Connection(opts.auth, transport, logger);
}
