import {
  createLoggerFactory,
  loggerFactory as defaultLoggerFactory,
  jsonFormatter,
  consoleWriter,
  nullWriter,
  asIsFormatter,
} from '@flumer/logger';

const context: unknown[] = ['en-US', { userId: 123 }];

// Default logger factory.
const defaultMessage = 'This is a test';
const defaultLogger = defaultLoggerFactory.createLogger();
defaultLogger.debug(defaultMessage, ...context);
defaultLogger.info(defaultMessage, ...context);
defaultLogger.notice(defaultMessage, ...context);
defaultLogger.warning(defaultMessage, ...context);
defaultLogger.error(defaultMessage, ...context);
defaultLogger.critical(defaultMessage, ...context);

// Custom JSON logger.
const jsonChannelName = 'json channel';
const jsonLoggerFactory = createLoggerFactory(consoleWriter, jsonFormatter);
const jsonLogger = jsonLoggerFactory.createLogger(jsonChannelName);
jsonLogger.error('testing custom channel', ...context);

// Custom null logger.
const nullChannelName = 'null-writer';
const nullLoggerFactory = createLoggerFactory(nullWriter, asIsFormatter);
nullLoggerFactory.createLogger(nullChannelName).notice('should not be logged');
