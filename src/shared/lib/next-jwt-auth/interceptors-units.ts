import type { Effect } from 'effector';
import { createEffect, createEvent } from 'effector';

import type { BaseRequestConfig } from '@lib/effector-api';

import type { InterceptorConfig, Tokens } from './types';

function createInterceptorUnits<LoginDto>(
  requestFx: Effect<BaseRequestConfig, unknown>,
  config: Required<InterceptorConfig>
) {
  const initAuthInterceptors = createEvent();
  const refreshFailed = createEvent();

  const loginFx = createEffect(async (data: LoginDto) => {
    const result = await requestFx({
      url: config.apiRoutes.login,
      method: 'POST',
      baseURL: '/',
      data,

      disabledResponseMapper: true
    });

    return result as Tokens;
  });

  const refreshFx = createEffect(async () => {
    const result = await requestFx({
      url: config.apiRoutes.refresh,
      method: 'POST',
      baseURL: '/',
      data: {},

      disabledResponseMapper: true
    });

    return result as Pick<Tokens, 'accessToken'>;
  });

  const logoutFx = createEffect(() =>
    requestFx({
      url: config.apiRoutes.logout,
      method: 'POST',
      baseURL: '/',

      disabledResponseMapper: true
    })
  );

  return {
    refreshFailed,
    initAuthInterceptors,

    loginFx,
    logoutFx,
    refreshFx
  };
}

export { createInterceptorUnits };
