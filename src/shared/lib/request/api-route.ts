import { AxiosRequestConfig } from 'axios';
import { attach, Effect } from 'effector';

import * as types from '@lib/types';
import { baseRequestFx } from './request';

type RequestDto<
  Data = never,
  Params = never,
  Query = never
> = types.SubtractNever<{
  data: Data;
  params: Params;
  query: Query;
}>;

const createApiRoute = <
  Contract extends object,
  Data,
  Params extends object | string | number,
  Query
>(
  fn: (dto: RequestDto<Data, Params, Query>) => AxiosRequestConfig<Data>
) => {
  const apiRouteFx = attach({
    effect: baseRequestFx,
    mapParams: params => {
      const config = fn(params);

      return config;
    }
  }) as Effect<RequestDto<Data, Params, Query>, Contract, any>;

  return apiRouteFx;
};

export { createApiRoute };
