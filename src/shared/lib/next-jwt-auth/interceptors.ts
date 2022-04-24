import axios, { AxiosInstance } from 'axios';
import { createEffect, createStore, sample, scopeBind } from 'effector';
import { combineEvents } from 'patronum';

import { isClientSide } from '@lib/environment';
import type { BaseRequest } from '@lib/effector-api';

import type {
  InterceptorConfig,
  InterceptorId,
  InterceptorUnits,
  RefreshToken
} from './types';
import { createInterceptorUnits } from './interceptors-units';
import { getConfig } from './config';

function createAuthInterceptor(
  instance: AxiosInstance,
  baseRequestFx: BaseRequest,
  config: InterceptorConfig = {}
): InterceptorUnits {
  const factoryConfig = getConfig(config);

  const interceptorUnits = createInterceptorUnits();

  if (isClientSide()) {
    const attachInterceptorFx = createEffect<RefreshToken, InterceptorId>();
    const clearInterceptorFx = createEffect<InterceptorId, void>();

    const $interceptorId = createStore<InterceptorId | null>(null);

    sample({
      clock: interceptorUnits.initAuthInterceptors,
      filter: Boolean,
      target: attachInterceptorFx
    });

    attachInterceptorFx.use(refreshToken =>
      instance.interceptors.response.use(
        response => response,
        async error => {
          if (
            !axios.isAxiosError(error) ||
            factoryConfig.skipResponseInterceptor(error)
          )
            throw error;

          try {
            await interceptorUnits.refreshTokensFx({ refreshToken });

            return baseRequestFx(error.config);
          } catch (e) {
            scopeBind(interceptorUnits.refreshFailed);

            throw error;
          }
        }
      )
    );

    $interceptorId.on(attachInterceptorFx.doneData, (_, ids) => ids);

    sample({
      clock: [
        interceptorUnits.refreshTokensFx.done,
        interceptorUnits.removeAuthInterceptors
      ],
      source: $interceptorId,
      filter: Boolean,
      target: clearInterceptorFx
    });

    clearInterceptorFx.use(responseInterceptorId => {
      instance.interceptors.request.eject(responseInterceptorId);
    });

    sample({
      clock: combineEvents({
        events: [interceptorUnits.refreshTokensFx.done, clearInterceptorFx.done]
      }),
      source: interceptorUnits.refreshTokensFx.doneData,
      fn: ({ refreshToken }) => refreshToken,
      target: attachInterceptorFx
    });
  }

  return interceptorUnits;
}

export { createAuthInterceptor };
