import {
  DEFAULT_LOG_CHANNEL,
  IEmitter,
  LogChannelName,
  Logger,
} from '@flumer/core';
import { createLogChannel } from './createLogChannel';
import { logWithEvent } from './logWithEvent';

export const createLogger = (emitter: IEmitter) => (
  channel: LogChannelName = DEFAULT_LOG_CHANNEL
): Logger => {
  const logChannel = createLogChannel(channel);

  return {
    debug: logWithEvent(logChannel.debug, emitter),
    info: logWithEvent(logChannel.info, emitter),
    notice: logWithEvent(logChannel.notice, emitter),
    warning: logWithEvent(logChannel.warning, emitter),
    error: logWithEvent(logChannel.error, emitter),
    critical: logWithEvent(logChannel.critical, emitter),
  };
};
