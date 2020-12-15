import {
  IEmitter,
  LogChannelHandler,
  LogEvents,
  LogSeverity,
} from '@flumer/core';

export const logWithEvent = <S extends LogSeverity>(
  logChannelHandler: LogChannelHandler<S>,
  emitter: IEmitter
) => (message: string, ...context: unknown[]) => {
  const loggable = logChannelHandler(message, ...context);
  emitter.emit(LogEvents.MESSAGE_LOGGED, loggable);
  return loggable;
};
