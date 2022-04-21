import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { createEffect, createStore, sample } from 'effector';
import { combineEvents } from 'patronum';

import { createRequestFactory } from '../request';

import type {
  InterceptorConfig,
  InterceptorIds,
  InterceptorsUnits,
  Tokens
} from './types';
import { createInterceptorUnits } from './interceptors-units';
import { getConfig } from './config';

function authInterceptorsFactory(
  instance: AxiosInstance,
  baseRequestFx: ReturnType<typeof createRequestFactory>,
  config: InterceptorConfig = {}
): InterceptorsUnits {
  const factoryConfig = getConfig(config);

  const interceptorsUnits = createInterceptorUnits();

  const attachInterceptorsFx = createEffect<Tokens, InterceptorIds>();
  const clearInterceptorsFx = createEffect<InterceptorIds, void>();

  const $interceptorIds = createStore<InterceptorIds | null>(null);

  if (typeof window !== 'undefined') {
    sample({
      clock: interceptorsUnits.initAuthInterceptors,
      filter: Boolean,
      target: attachInterceptorsFx
    });

    attachInterceptorsFx.use(({ accessToken, refreshToken }) => {
      const requestInterceptorId = instance.interceptors.request.use(
        (config: AxiosRequestConfig) => {
          if (factoryConfig.applyRequestInterceptor(config)) {
            config.headers!.Authorization = `Bearer ${accessToken}`;
          }

          return config;
        }
      );

      const responseInterceptorId = instance.interceptors.response.use(
        response => response,
        async error => {
          if (factoryConfig.skipResponseInterceptor(error)) throw error;

          try {
            await interceptorsUnits.refreshTokensFx({ refreshToken });

            return baseRequestFx(error.config);
          } catch (e) {
            interceptorsUnits.refreshFailed();

            throw error;
          }
        }
      );

      return { requestInterceptorId, responseInterceptorId };
    });

    $interceptorIds.on(attachInterceptorsFx.doneData, (_, ids) => ids);

    sample({
      clock: [
        interceptorsUnits.refreshTokensFx.done,
        interceptorsUnits.removeAuthInterceptors
      ],
      source: $interceptorIds,
      filter: Boolean,
      target: clearInterceptorsFx
    });

    clearInterceptorsFx.use(ids => {
      instance.interceptors.request.eject(ids.requestInterceptorId);
      instance.interceptors.response.eject(ids.responseInterceptorId);
    });

    sample({
      clock: combineEvents({
        events: [
          interceptorsUnits.refreshTokensFx.done,
          clearInterceptorsFx.done
        ]
      }),
      source: interceptorsUnits.refreshTokensFx.doneData,
      target: attachInterceptorsFx
    });
  }

  return interceptorsUnits;
}

export { authInterceptorsFactory };
