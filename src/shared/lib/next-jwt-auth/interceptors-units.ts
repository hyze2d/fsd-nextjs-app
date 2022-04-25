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
      url: '/api/auth/login',
      method: 'POST',
      baseURL: '/',
      data
    });

    return result as Tokens;
  });

  const refreshTokensFx = createEffect(async () => {
    const result = await requestFx({
      url: '/api/auth/refresh',
      method: 'POST',
      baseURL: '/'
    });

    return result as Pick<Tokens, 'accessToken'>;
  });

  const logoutFx = createEffect(() =>
    requestFx({
      url: '/api/auth/logout',
      baseURL: '/'
    })
  );

  return {
    refreshFailed,
    initAuthInterceptors,

    loginFx,
    logoutFx,
    refreshTokensFx
  };
}

export { createInterceptorUnits };
