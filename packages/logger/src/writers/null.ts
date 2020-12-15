import { LogWriter } from '@flumer/core';

export const nullWriter: LogWriter = async (_loggable, _formatter) => {};
