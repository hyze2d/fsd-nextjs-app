import type { AxiosInstance } from 'axios';

import axios from 'axios';

import { createEffect, sample, scopeBind } from 'effector';

import type { BaseRequest } from '@lib/effector-api';

import { isClientSide } from '@lib/environment';

import { getConfig } from './config';

import { createInterceptorUnits } from './interceptors-units';

import type { InterceptorConfig } from './types';

function createJwtAuth<LoginDto>(
  instance: AxiosInstance,
  baseRequestFx: BaseRequest,
  config: InterceptorConfig = {}
) {
  const factoryConfig = getConfig(config);

  const interceptorUnits = createInterceptorUnits<LoginDto>(
    baseRequestFx,
    factoryConfig
  );

  if (isClientSide()) {
    const attachInterceptorFx = createEffect<unknown, unknown>();

    sample({
      clock: interceptorUnits.initAuthInterceptors,
      target: attachInterceptorFx
    });

    attachInterceptorFx.use(() => {
      instance.interceptors.response.use(
        response => response,
        async error => {
          if (
            !axios.isAxiosError(error) ||
            factoryConfig.skipResponseInterceptor(error)
          )
            throw error;

          try {
            await interceptorUnits.refreshFx();

            return await baseRequestFx(error.config);
          } catch (e) {
            scopeBind(interceptorUnits.refreshFailed);

            throw error;
          }
        }
      );
    });
  }

  return interceptorUnits;
}

export { createJwtAuth };
