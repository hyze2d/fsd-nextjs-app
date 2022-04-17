import { sample } from 'effector';

import { api } from '../instance';
import { loginFx, logoutFx, refreshFx } from './routes';

sample({
  source: loginFx.doneData,
  target: api.interceptors.initAuthInterceptors
});

sample({
  source: refreshFx.doneData,
  target: api.interceptors.refreshTokensFx
});

sample({
  source: logoutFx.done,
  target: api.interceptors.removeAuthInterceptors
});
