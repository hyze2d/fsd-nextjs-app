import { createStore, restore } from 'effector';

import { webviewBackendApi } from '@shared/api';

const $isAuthenticated = createStore(false)
  .on(webviewBackendApi.auth.loginFx.done, () => true)
  .reset(webviewBackendApi.auth.logoutFx.done);

const $viewerData = restore(webviewBackendApi.users.getSessionInfo, null);

$viewerData.reset(webviewBackendApi.auth.logoutFx.done);

export { $viewerData, $isAuthenticated };
