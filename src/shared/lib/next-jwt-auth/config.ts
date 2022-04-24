import type { InterceptorConfig } from './types';
import {
  applyRequestInterceptorCheck,
  skipResponseInterceptorCheck
} from './guards';

function getConfig(
  externalConfig: Partial<InterceptorConfig>
): Required<InterceptorConfig> {
  return {
    applyRequestInterceptor:
      externalConfig.applyRequestInterceptor || applyRequestInterceptorCheck,

    skipResponseInterceptor:
      externalConfig.skipResponseInterceptor || skipResponseInterceptorCheck
  };
}

export { getConfig };
