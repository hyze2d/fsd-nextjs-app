import { createEffect } from 'effector';
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

function createRequestFactory(
  instance: AxiosInstance,
  responseMapper: (data: AxiosResponse) => any = defaultResponseMapper
) {
  return createEffect((config: AxiosRequestConfig) =>
    instance.request(config).then(responseMapper)
  );
}

function defaultResponseMapper({ data }: AxiosResponse) {
  return data.data;
}

export { createRequestFactory };
