import { AxiosRequestConfig } from 'axios';

type InterceptorId = number;

type AccessToken = string;
type RefreshToken = string;

type Tokens = {
  accessToken: AccessToken;
  refreshToken: RefreshToken;
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
  InterceptorId
};
