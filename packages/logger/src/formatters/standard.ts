import { LogFormatter } from '@flumer/core';

export const standardFormatter: LogFormatter = loggable => {
  return `[${loggable.severity}] [${loggable.channel}] [${new Date(
    loggable.timestamp
  ).toISOString()}] -- ${loggable.message}`;
};
