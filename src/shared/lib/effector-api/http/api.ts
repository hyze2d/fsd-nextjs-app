import type { AxiosRequestConfig, AxiosResponse } from 'axios';

import axios from 'axios';

import { createRequestFactory } from './request';

import { createRouteFactory } from './route';

function createHttpApi(
  instanceConfig: AxiosRequestConfig,
  config: { responseMapper?: (response: AxiosResponse) => unknown } = {}
) {
  const instance = axios.create(instanceConfig);

  const { baseRequestFx, authenticatedRequestFx, ...units } =
    createRequestFactory(instance, config.responseMapper);

  const createRoute = createRouteFactory(baseRequestFx, authenticatedRequestFx);

  return {
    instance,

    baseRequestFx,
    authenticatedRequestFx,

    createRoute,

    units
  };
}

export { createHttpApi };
