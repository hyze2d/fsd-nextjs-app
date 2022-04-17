import axios, { AxiosRequestConfig } from 'axios';

function applyRequestInterceptorCheck(config: AxiosRequestConfig): boolean {
  return !config.url!.startsWith('/auth') || config.url === '/auth/logout';
}

// check axios.isAxiosError for type-guard
function skipResponseInterceptorCheck(error: any): boolean {
  return (
    !(axios.isAxiosError(error) && error.response!.status === 401) ||
    error.config.url!.startsWith('/auth')
  );
}

export { applyRequestInterceptorCheck, skipResponseInterceptorCheck };
