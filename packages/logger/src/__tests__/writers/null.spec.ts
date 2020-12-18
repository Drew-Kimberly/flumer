import { nullWriter } from '../../writers';
import { ILoggable, LogFormatter, LogSeverity } from '@flumer/core';
import { asIsFormatter } from '../../formatters';

describe('Test suite for nullWriter', () => {
  const loggable: ILoggable = {
    severity: LogSeverity.INFO,
    channel: '',
    timestamp: 0,
    message: 'hello world',
    context: [],
  };

  test('nullWriter has no output', async () => {
    jest.spyOn(global.console, 'log');
    await nullWriter(loggable, asIsFormatter);
    expect(console.log).not.toHaveBeenCalled();
  });
});
