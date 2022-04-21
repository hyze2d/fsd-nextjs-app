import { sample } from 'effector';
import { webviewBackendApi } from '@shared/api';
import { pushFx } from '@shared/router';

sample({
  clock: webviewBackendApi.users.getSessionInfo.fail,
  filter: () => typeof window === 'undefined',
  target: pushFx.prepend(() => '/login')
});
