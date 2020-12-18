import { LogWriter } from '@flumer/core';

export const consoleWriter: LogWriter = async (loggable, formatter) => {
  console.log(formatter(loggable), ...loggable.context);
};
