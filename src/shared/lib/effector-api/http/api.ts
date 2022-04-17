import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { createRequestFactory } from './request';
import { createRouteFactory } from './route';
import { authInterceptorsFactory } from './auth';

function createHttpApi(
  instanceConfig: AxiosRequestConfig,
  config: { responseMapper?: (response: AxiosResponse) => any } = {}
) {
  const instance = axios.create(instanceConfig);

  const baseRequestFx = createRequestFactory(instance, config.responseMapper);

  const createRoute = createRouteFactory(baseRequestFx);

  const interceptors = authInterceptorsFactory(instance, baseRequestFx);

  return {
    instance,

    baseRequestFx,

    createRoute,

    interceptors
  };
}

export { createHttpApi };
