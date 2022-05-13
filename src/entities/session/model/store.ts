import { combine, createStore, restore } from 'effector';

import type { User } from '@shared/api/devbay';

import { getUserFx } from './effects';

import { setToken, setTokenFromHttp } from './events';

const $token = restore(setToken, null).on(
  setTokenFromHttp,
  (_, token) => token
);

const $user = createStore<User | null>(null).on(
  getUserFx.doneData,
  (_, user) => user
);

const $loading = getUserFx.pending;

const $session = combine({ token: $token, user: $user, loading: $loading });

export { $user, $loading, $token, $session };
