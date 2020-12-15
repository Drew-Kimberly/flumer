import { ILoggable, LogChannelName, LogSeverity } from '@flumer/core';

export const createLoggable = <S extends LogSeverity>(
  severity: S,
  channel: LogChannelName,
  message: string,
  context: unknown[] = []
): ILoggable<S> => ({
  severity: severity,
  channel: channel,
  timestamp: Date.now(),
  message: message,
  context: context,
});
