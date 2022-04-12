import { User } from '@shared/api/configurator';
import { createStore, restore, combine } from 'effector';
import { getUserFx } from './effects';
import { setToken, setTokenFromHttp } from './events';

const $token = restore(setToken, null).on(
  setTokenFromHttp,
  (_, token) => token
);
const $user = createStore<User>(null).on(getUserFx.doneData, (_, user) => user);
const $loading = getUserFx.pending;

const $session = combine($token, $user, $loading, (token, user, loading) => ({
  token,
  user,
  loading
}));

export { $user, $loading, $token, $session };
