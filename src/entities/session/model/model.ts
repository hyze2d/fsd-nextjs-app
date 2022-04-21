import { createEvent, createStore } from 'effector';

import { CurrentUserContract, webviewBackendApi } from '@shared/api';

const logoutClicked = createEvent<void>();

const $viewerData = createStore<CurrentUserContract | null>(null)
  .on(webviewBackendApi.users.getSessionInfo.doneData, (_, data) => data)
  .reset([webviewBackendApi.auth.logoutFx.done, logoutClicked]);

const $isAuthenticated = $viewerData.map(Boolean);

export { $viewerData, $isAuthenticated, logoutClicked };
