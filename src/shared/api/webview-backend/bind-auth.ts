import { sample } from 'effector';

import { createJwtAuth } from '@lib/next-jwt-auth';

import type { LoginDto } from './auth';
import { api } from './instance';

const auth = createJwtAuth<LoginDto>(api.instance, api.baseRequestFx);

sample({
  clock: [auth.loginFx.doneData, auth.refreshTokensFx.doneData],
  fn: ({ accessToken }) => accessToken,
  target: api.units.setAccessToken
});

sample({
  clock: auth.logoutFx.done,
  target: api.units.resetAccessToken
});

export { auth };
