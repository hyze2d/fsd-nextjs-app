import { combine, createEvent, restore, sample } from 'effector';

import { webviewBackendApi } from '@shared/api';

const formSubmitted = createEvent();
const emailChanged = createEvent<string>();
const passwordChanged = createEvent<string>();

const $email = restore(emailChanged, '');
const $password = restore(passwordChanged, '');

const $form = combine({ email: $email, password: $password });

sample({
  clock: formSubmitted,
  source: $form,
  target: webviewBackendApi.auth.loginFx
});

sample({
  clock: webviewBackendApi.auth.loginFx.done,
  fn: () => ({ token: undefined }),
  target: webviewBackendApi.users.getSessionInfo
});

export { $email, $password, emailChanged, passwordChanged, formSubmitted };
