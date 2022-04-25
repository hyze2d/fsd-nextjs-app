import axios, { AxiosInstance } from 'axios';
import { createEffect, sample, scopeBind } from 'effector';

import type { BaseRequest } from '@lib/effector-api';
import { isClientSide } from '@lib/environment';

import type { InterceptorConfig } from './types';
import { createInterceptorUnits } from './interceptors-units';
import { getConfig } from './config';

function createJwtAuth<LoginDto>(
  instance: AxiosInstance,
  baseRequestFx: BaseRequest,
  config: InterceptorConfig = {}
) {
  const factoryConfig = getConfig(config);

  const interceptorUnits = createInterceptorUnits<LoginDto>(baseRequestFx);

  if (isClientSide()) {
    const attachInterceptorFx = createEffect<void, void>();

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
            await interceptorUnits.refreshTokensFx();

            return baseRequestFx(error.config);
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
