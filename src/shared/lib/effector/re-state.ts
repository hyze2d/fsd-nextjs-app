import type { Store } from 'effector';

import { createEvent, restore } from 'effector';

const restate = <T>(defaultState: T) => {
  const set = createEvent<T>();

  const $store: Store<T> = restore(set, defaultState);

  return [$store, set];
};

export { restate };
