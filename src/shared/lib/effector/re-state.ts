import type { Store } from 'effector';

import { createEvent, restore } from 'effector';

const restate = <T>(defaultState: T) => {
  const set = createEvent<T>();

  const $store: Store<T> & {
    0?: Store<T>;
    1?: typeof set;
  } = restore(set, defaultState);

  $store[0] = $store;

  $store[1] = set;

  return $store;
};

export { restate };
