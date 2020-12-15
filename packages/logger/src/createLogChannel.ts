import { LogChannelName, LogChannelFactory, LogSeverity } from '@flumer/core';
import { createLoggable } from './createLoggable';

export const createLogChannel: LogChannelFactory = (
  channel: LogChannelName
) => ({
  debug: (message, ...context) =>
    createLoggable(LogSeverity.DEBUG, channel, message, context),

  info: (message, ...context) =>
    createLoggable(LogSeverity.INFO, channel, message, context),

  notice: (message, ...context) =>
    createLoggable(LogSeverity.NOTICE, channel, message, context),

  warning: (message, ...context) =>
    createLoggable(LogSeverity.WARNING, channel, message, context),

  error: (message, ...context) =>
    createLoggable(LogSeverity.ERROR, channel, message, context),

  critical: (message, ...context) =>
    createLoggable(LogSeverity.CRITICAL, channel, message, context),
});
