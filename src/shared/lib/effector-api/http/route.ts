import { AxiosRequestConfig } from 'axios';
import { attach, Effect } from 'effector';

function createRouteFactory(requestFx: Effect<AxiosRequestConfig, unknown>) {
  function createRoute<Dto = void, Contract = void, CustomError = Error>(
    mapParams: ((data: Dto) => AxiosRequestConfig) | AxiosRequestConfig
  ) {
    return attach({
      effect: requestFx,
      mapParams: (dto): AxiosRequestConfig => {
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
