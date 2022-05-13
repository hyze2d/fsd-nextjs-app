import { combine, createEvent, createStore } from 'effector';

import { createEffect } from 'effector';

import type { CurrentUserContract } from '@shared/api';

import { webviewBackendApi } from '@shared/api';

import type { User } from '@shared/api/devbay';

const getUserFx = createEffect(async () => {
  await new Promise(res => {
    setTimeout(res, 1000);
  });

  const user: User = {
    id: 1,
    theme: 'light'
  };

  return user;
});

const logoutClicked = createEvent();

const $viewerData = createStore<CurrentUserContract | null>(null)
  .on(webviewBackendApi.users.getSessionInfo.doneData, (_, data) => data)
  .reset([webviewBackendApi.auth.logoutFx.done, logoutClicked]);

const $isAuthenticated = $viewerData.map(Boolean);

const $token = createStore<string | null>(null);

// const $token = restore(setToken, null);

const $user = createStore<User | null>(null).on(
  getUserFx.doneData,
  (_, user) => user
);

const $loading = getUserFx.pending;

const $session = combine({
  token: $token,
  user: $user,
  loading: $loading
});

export {
  $viewerData,
  $isAuthenticated,
  logoutClicked,
  getUserFx,
  $user,
  $loading,
  $token,
  $session
};
