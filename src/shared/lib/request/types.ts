import * as types from '@lib/types';

type RequestDto<
  Data = never,
  Params = never,
  Query = never
> = types.SubtractNever<{
  data: Data;
  params: Params;
  query: Query;
}>;

export type { RequestDto };
