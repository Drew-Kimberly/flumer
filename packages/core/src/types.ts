export enum LogSeverity {
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  NOTICE = 'NOTICE',
  WARNING = 'WARNING',
  ERROR = 'ERROR',
  CRITICAL = 'CRITICAL',
}

export enum LogEvents {
  MESSAGE_LOGGED = 'message_logged',
}

export const DEFAULT_LOG_CHANNEL = 'default';

export interface ILoggerFactory {
  createLogger: (channel?: LogChannelName) => Logger;
}

export interface ILoggable<S extends LogSeverity = LogSeverity> {
  severity: S;
  channel: LogChannelName;
  timestamp: number;
  message: string;
  context: unknown[];
}

export interface ILogChannel {
  debug: LogChannelHandler<LogSeverity.DEBUG>;
  info: LogChannelHandler<LogSeverity.INFO>;
  notice: LogChannelHandler<LogSeverity.NOTICE>;
  warning: LogChannelHandler<LogSeverity.WARNING>;
  error: LogChannelHandler<LogSeverity.ERROR>;
  critical: LogChannelHandler<LogSeverity.CRITICAL>;
}

export interface IEmitter {
  emit: EventEmitHandler;
  on: EventListener;
}
export type EventEmitHandler = (event: LogEvents, loggable: ILoggable) => void;
export type EventListenerHandler = (loggable: ILoggable) => void;
export type EventListener = (
  event: LogEvents,
  handler: EventListenerHandler
) => void;

export type LogChannelHandler<S extends LogSeverity = LogSeverity> = (
  message: string,
  ...context: unknown[]
) => ILoggable<S>;

export type LogChannelName = string;

export type LogChannelFactory = (channel: LogChannelName) => ILogChannel;

export type Logger = ILogChannel;

export type LogFormatter<T = string> = (loggable: ILoggable) => T;

export type LogWriter = (
  loggable: ILoggable,
  formatter: LogFormatter<unknown>
) => Promise<void>;
