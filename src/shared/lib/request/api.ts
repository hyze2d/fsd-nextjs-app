import axios, { AxiosRequestConfig } from 'axios';
import { createStore } from 'effector';
import { createApiRouteFabric } from './api-route';
import { createAuthorizedRequestFx, createBaseRequestFx } from './base-request';

const createApi = (config: AxiosRequestConfig) => {
  const instance = axios.create(config);

  const $token = createStore('');

  const baseRequestFx = createBaseRequestFx(instance);
  const authorizedRequestFx = createAuthorizedRequestFx(baseRequestFx, $token);

  const createRoute = createApiRouteFabric(baseRequestFx);
  const createAuthorizedRoute = createApiRouteFabric(authorizedRequestFx);

  return {
    createRoute,
    createAuthorizedRoute
  };
};

export { createApi };
