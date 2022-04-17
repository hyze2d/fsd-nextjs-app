import { createEffect, createEvent } from 'effector';

import { InterceptorsUnits } from './types';

function createInterceptorUnits(): InterceptorsUnits {
  const initAuthInterceptors: InterceptorsUnits['initAuthInterceptors'] =
    createEvent();

  const refreshTokensFx: InterceptorsUnits['refreshTokensFx'] = createEffect();

  const removeAuthInterceptors: InterceptorsUnits['removeAuthInterceptors'] =
    createEvent();

  const refreshFailed: InterceptorsUnits['refreshFailed'] = createEvent();

  return {
    initAuthInterceptors,
    refreshTokensFx,
    removeAuthInterceptors,
    refreshFailed
  };
}

export { createInterceptorUnits };
