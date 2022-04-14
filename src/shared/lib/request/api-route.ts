import { AxiosRequestConfig } from 'axios';
import { attach, Effect } from 'effector';

function createApiRouteFabric(
  baseRequestFx: Effect<AxiosRequestConfig<unknown>, unknown, Error>
) {
  function createApiRoute<Contract extends object, Dto extends any = any>(
    mapParams: (dto: Dto) => AxiosRequestConfig
  ) {
    return attach({ effect: baseRequestFx, mapParams });
  }

  return createApiRoute;
}

export { createApiRouteFabric };
