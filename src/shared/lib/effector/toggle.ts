import type { Unit } from 'effector';
import { createStore } from 'effector';

const createToggle = (
  defaultState: boolean,
  on: Unit<unknown>,
  off?: Unit<unknown>
) =>
  createStore(defaultState)
    .on(on, () => true)
    .on(on || off, () => false);

export { createToggle };
