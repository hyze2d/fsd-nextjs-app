import { Effect, Event } from 'effector';
import { AxiosRequestConfig } from 'axios';

type InterceptorIds = {
  requestInterceptorId: number;
  responseInterceptorId: number;
};

type Tokens = {
  accessToken: string;
  refreshToken: string;
};

type InterceptorsUnits = {
  initAuthInterceptors: Event<Tokens>;
  refreshTokensFx: Effect<Pick<Tokens, 'refreshToken'>, Tokens>;
  removeAuthInterceptors: Event<void>;
  refreshFailed: Event<void>;
};

type InterceptorConfig = {
  applyRequestInterceptor?: (config: AxiosRequestConfig) => boolean;
  skipResponseInterceptor?: (error: any) => boolean;
};

export type { InterceptorIds, Tokens, InterceptorsUnits, InterceptorConfig };
