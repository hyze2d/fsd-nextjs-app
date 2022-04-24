import { Effect, Event } from 'effector';
import { AxiosRequestConfig } from 'axios';

type InterceptorId = number;

type AccessToken = string;
type RefreshToken = string;

type Tokens = {
  accessToken: AccessToken;
  refreshToken: RefreshToken;
};

type InterceptorUnits = {
  initAuthInterceptors: Event<Tokens['refreshToken']>;
  refreshTokensFx: Effect<Pick<Tokens, 'refreshToken'>, Tokens>;
  removeAuthInterceptors: Event<void>;
  refreshFailed: Event<void>;
};

type InterceptorConfig = {
  applyRequestInterceptor?: (config: AxiosRequestConfig) => boolean;
  skipResponseInterceptor?: (error: any) => boolean;
};

export type {
  Tokens,
  AccessToken,
  RefreshToken,
  InterceptorConfig,
  InterceptorUnits,
  InterceptorId
};
