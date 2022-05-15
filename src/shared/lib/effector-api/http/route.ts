import type { AxiosRequestConfig } from 'axios';

import type { Effect } from 'effector';

import { attach } from 'effector';

function createRouteFactory(
  requestFx: Effect<AxiosRequestConfig, unknown>,
  authenticatedRequestFx: Effect<AxiosRequestConfig, unknown>
) {
  function createRoute<Dto = void, Contract = void, CustomError = Error>(
    mapParams: ((data: Dto) => AxiosRequestConfig) | AxiosRequestConfig,
    config: { withAuth?: boolean } = {}
  ) {
    const baseRequestFx = config.withAuth ? authenticatedRequestFx : requestFx;

    return attach({
      effect: baseRequestFx,
      mapParams: (dto: Dto): AxiosRequestConfig => {
        if (typeof mapParams === 'function') {
          return mapParams(dto);
        }

        return mapParams;
      }
    }) as unknown as Effect<Dto, Contract, CustomError>;
  }

  return createRoute;
}

export { createRouteFactory };
