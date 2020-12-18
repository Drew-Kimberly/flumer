import { ILoggable, LogFormatter } from '@flumer/core';

export const asIsFormatter: LogFormatter<ILoggable> = loggable => loggable;
