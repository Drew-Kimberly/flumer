import { EventEmitHandler, EventListener, IEmitter } from '@flumer/core';

const defaultEmit: EventEmitHandler = (e, loggable) => {};
const defaultOn: EventListener = (e, handler) => {};

export const createMockEventEmitter = (
  emit: EventEmitHandler = defaultEmit,
  on: EventListener = defaultOn
): IEmitter => ({
  emit: emit,
  on: on,
});
