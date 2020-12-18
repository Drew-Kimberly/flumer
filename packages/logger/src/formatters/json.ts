import { LogFormatter } from '@flumer/core';

export const jsonFormatter: LogFormatter = loggable => JSON.stringify(loggable);
