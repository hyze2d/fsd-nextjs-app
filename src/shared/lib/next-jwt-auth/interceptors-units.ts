import { createEffect, createEvent, Effect } from 'effector';

import { Tokens } from './types';
import { AxiosRequestConfig } from 'axios';

function createInterceptorUnits<LoginDto>(
  requestFx: Effect<AxiosRequestConfig, unknown>
) {
  const initAuthInterceptors = createEvent();
  const refreshFailed = createEvent();

  const loginFx = createEffect(async (data: LoginDto) => {
    const result = await requestFx({
      url: '/api/login',
      method: 'POST',
      data
    });

    return result as Tokens;
  });

  const refreshTokensFx = createEffect(async () => {
    const result = await requestFx({
      url: '/api/refresh',
      method: 'POST'
    });

    return result as Pick<Tokens, 'accessToken'>;
  });

  const logoutFx = createEffect(() => requestFx({ url: '/api/logout' }));

  return {
    refreshFailed,
    initAuthInterceptors,

    loginFx,
    logoutFx,
    refreshTokensFx
  };
}

export { createInterceptorUnits };
