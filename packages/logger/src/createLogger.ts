import {
  DEFAULT_LOG_CHANNEL,
  IEmitter,
  ILogChannel,
  LogChannelName,
  Logger,
  LogSeverity,
} from '@flumer/core';
import {createLogChannel} from './createLogChannel';
import {logWithEvent} from './logWithEvent';

export const createLogger = (emitter: IEmitter) => (
  channel: LogChannelName = DEFAULT_LOG_CHANNEL
): Logger => {
  const logChannel: ILogChannel = createLogChannel(channel);

  return {
    debug: logWithEvent<LogSeverity.DEBUG>(logChannel.debug, emitter),
    info: logWithEvent<LogSeverity.INFO>(logChannel.info, emitter),
    notice: logWithEvent<LogSeverity.NOTICE>(logChannel.notice, emitter),
    warning: logWithEvent<LogSeverity.WARNING>(logChannel.warning, emitter),
    error: logWithEvent<LogSeverity.ERROR>(logChannel.error, emitter),
    critical: logWithEvent<LogSeverity.CRITICAL>(logChannel.critical, emitter),
  };
};
