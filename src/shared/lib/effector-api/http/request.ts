import {
  attach,
  createEffect,
  createEvent,
  createStore,
  Effect
} from 'effector';
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

type BaseRequest = Effect<AxiosRequestConfig, unknown>;

function createRequestFactory(
  instance: AxiosInstance,
  responseMapper = defaultResponseMapper
) {
  const setAccessToken = createEvent<string>();
  const resetAccessToken = createEvent();

  const $accessToken = createStore<string>('')
    .on(setAccessToken, (_, token) => token)
    .reset(resetAccessToken);

  const baseRequestFx = createEffect((requestConfig: AxiosRequestConfig) =>
    instance.request(requestConfig).then(responseMapper)
  );

  const authenticatedRequestFx: BaseRequest = attach({
    mapParams(requestConfig, accessToken): AxiosRequestConfig {
      if (!requestConfig.headers?.Authorization && accessToken) {
        Object.assign(requestConfig.headers, {
          Authorization: `Bearer ${accessToken}`
        });
      }

      return requestConfig;
    },
    source: $accessToken,
    effect: baseRequestFx
  });

  return {
    baseRequestFx,
    authenticatedRequestFx,

    $accessToken,
    setAccessToken,
    resetAccessToken
  };
}

function defaultResponseMapper({ data }: AxiosResponse) {
  return data.data;
}

export { createRequestFactory, defaultResponseMapper };
export type { BaseRequest };
