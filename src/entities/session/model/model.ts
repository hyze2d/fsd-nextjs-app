import { createEvent, createStore, restore } from 'effector';

import { webviewBackendApi } from '@shared/api';
import { reset } from 'patronum';

const logoutClicked = createEvent<void>();

const $isAuthenticated = createStore(false).on(
  webviewBackendApi.auth.loginFx.done,
  () => true
);

const $viewerData = restore(webviewBackendApi.users.getSessionInfo, null);

reset({
  clock: [webviewBackendApi.auth.logoutFx.done, logoutClicked],
  target: [$viewerData, $isAuthenticated]
});

export { $viewerData, $isAuthenticated, logoutClicked };
