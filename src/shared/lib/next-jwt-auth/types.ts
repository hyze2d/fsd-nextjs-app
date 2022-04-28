import type { AxiosRequestConfig } from 'axios';

type AccessToken = string;
type RefreshToken = string;

type Tokens = {
  accessToken: AccessToken;
  refreshToken: RefreshToken;
};

type InterceptorConfig = {
  applyRequestInterceptor?: (config: AxiosRequestConfig) => boolean;
  skipResponseInterceptor?: (error: any) => boolean;

  apiRoutes?: {
    login?: string;
    refresh?: string;
    logout?: string;
  };
};

export type { Tokens, AccessToken, RefreshToken, InterceptorConfig };
