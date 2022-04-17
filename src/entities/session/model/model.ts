import { createEvent, createStore, restore } from 'effector';

import { webviewBackendApi } from '@shared/api';

const logoutClicked = createEvent<void>();

const $isAuthenticated = createStore(false).on(
  webviewBackendApi.auth.loginFx.done,
  () => true
);

const $viewerData = restore(webviewBackendApi.users.getSessionInfo, null);

$viewerData.reset([webviewBackendApi.auth.logoutFx.done, logoutClicked]);
$isAuthenticated.reset([webviewBackendApi.auth.logoutFx.done, logoutClicked]);

export { $viewerData, $isAuthenticated, logoutClicked };
