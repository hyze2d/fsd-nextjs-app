import { sample } from 'effector';

import { createJwtAuth } from '@lib/next-jwt-auth';
import {
  loginHandler,
  logoutHandler,
  refreshHandler
} from '@lib/next-jwt-auth/handlers';

import { api } from './instance';

import type { LoginDto } from './auth';
import { routes as authRoutes } from './auth';
import { refreshFx } from './auth/routes';

const auth = createJwtAuth<LoginDto>(api.instance, api.baseRequestFx);

sample({
  clock: [auth.loginFx.doneData, auth.refreshFx.doneData, refreshFx.doneData],
  fn: ({ accessToken }) => accessToken,
  target: api.units.setAccessToken
});

sample({
  clock: auth.logoutFx.done,
  target: api.units.resetAccessToken
});

const handlers = {
  login: loginHandler(authRoutes.loginFx),
  refresh: refreshHandler(authRoutes.refreshFx),
  logout: logoutHandler(authRoutes.logoutFx)
};

export { auth, handlers };
