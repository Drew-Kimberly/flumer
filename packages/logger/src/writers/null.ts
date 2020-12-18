import { LogWriter } from '@flumer/core';

export const nullWriter: LogWriter = async (loggable, formatter) => {};
