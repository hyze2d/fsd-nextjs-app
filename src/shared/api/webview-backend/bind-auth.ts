import { sample } from 'effector';

import { routes } from './auth';
import { api } from './instance';

sample({
  clock: [routes.loginFx.doneData, routes.refreshFx.doneData],
  fn: ({ accessToken }) => accessToken,
  target: api.units.setAccessToken
});

sample({
  clock: routes.logoutFx.done,
  target: api.units.resetAccessToken
});
