import type { Effect } from 'effector';
import { attach, createEffect, createEvent, createStore } from 'effector';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

type BaseRequestConfig = AxiosRequestConfig & {
  disabledResponseMapper?: boolean;
};

type BaseRequest = Effect<BaseRequestConfig, unknown, Error>;

function createRequestFactory(
  instance: AxiosInstance,
  responseMapper = defaultResponseMapper
) {
  const setAccessToken = createEvent<string>();
  const resetAccessToken = createEvent();

  const $accessToken = createStore<string>('')
    .on(setAccessToken, (_, token) => token)
    .reset(resetAccessToken);

  const baseRequestFx: BaseRequest = createEffect(
    (requestConfig: BaseRequestConfig) =>
      instance
        .request(requestConfig)
        .then(
          requestConfig.disabledResponseMapper
            ? baseResponseMapper
            : responseMapper
        )
  );

  const authenticatedRequestFx: BaseRequest = attach({
    mapParams(requestConfig, accessToken): BaseRequestConfig {
      if (!requestConfig.headers?.Authorization && accessToken) {
        if (!requestConfig.headers) {
          requestConfig.headers = {};
        }

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

function baseResponseMapper({ data }: AxiosResponse) {
  return data;
}

export { createRequestFactory, defaultResponseMapper };
export type { BaseRequest, BaseRequestConfig };
