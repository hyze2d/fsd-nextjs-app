import { attach, createEffect, Store } from 'effector';
import { AxiosInstance, AxiosRequestConfig } from 'axios';

function createBaseRequestFx(instance: AxiosInstance) {
  const baseRequestFx = createEffect(
    async <Dto, Contract>(
      config: AxiosRequestConfig<Dto>
    ): Promise<Contract> => {
      const data = await instance.request(config);

      return data.data;
    }
  );

  return baseRequestFx;
}

function createAuthorizedRequestFx(
  baseRequestFx: ReturnType<typeof createBaseRequestFx>,
  $token: Store<string>
) {
  const authorizedFx = attach({
    source: $token,
    effect: baseRequestFx,
    mapParams: (config: AxiosRequestConfig, token): AxiosRequestConfig => {
      Object.assign(config.headers, { Authorization: `Bearer ${token}` });

      return config;
    }
  });

  return authorizedFx;
}

export { createBaseRequestFx, createAuthorizedRequestFx };
