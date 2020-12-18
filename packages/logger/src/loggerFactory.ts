import { createLoggerFactory } from './createLoggerFactory';
import * as LogWriters from './writers';
import * as LogFormatters from './formatters';
import { ILoggerFactory } from '@flumer/core';

export const loggerFactory: ILoggerFactory = createLoggerFactory(
  LogWriters.consoleWriter,
  LogFormatters.standardFormatter
);
