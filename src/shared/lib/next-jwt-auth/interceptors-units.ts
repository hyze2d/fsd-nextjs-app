import { createEffect, createEvent } from 'effector';

import { InterceptorUnits } from './types';

function createInterceptorUnits(): InterceptorUnits {
  const initAuthInterceptors: InterceptorUnits['initAuthInterceptors'] =
    createEvent();

  const refreshTokensFx: InterceptorUnits['refreshTokensFx'] = createEffect();

  const removeAuthInterceptors: InterceptorUnits['removeAuthInterceptors'] =
    createEvent();

  const refreshFailed: InterceptorUnits['refreshFailed'] = createEvent();

  return {
    initAuthInterceptors,
    refreshTokensFx,
    removeAuthInterceptors,
    refreshFailed
  };
}

export { createInterceptorUnits };
