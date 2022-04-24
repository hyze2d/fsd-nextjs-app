import { createEffect, sample } from 'effector';
import { webviewBackendApi } from '@shared/api';
import { isServerSide } from '@lib/environment';

const refreshFx = createEffect();

sample({
  clock: webviewBackendApi.users.getSessionInfo.fail,
  filter: isServerSide,
  target: refreshFx
});

sample({
  clock: refreshFx.doneData,
  target: webviewBackendApi.users.getSessionInfo
});
