import { createLoggerFactory } from './createLoggerFactory';
import * as LogWriters from './writers';
import * as LogFormatters from './formatters';

export const loggerFactory = createLoggerFactory(
  LogWriters.consoleWriter,
  LogFormatters.standardFormatter
);
