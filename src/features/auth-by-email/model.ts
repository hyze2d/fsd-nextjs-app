import { combine, createEvent, restore, sample } from 'effector';

import { webviewBackendApi } from '@shared/api';
import { changeRouteFx } from '@shared/router';
import { routes } from '@config/routes';

const formSubmitted = createEvent();
const emailChanged = createEvent<string>();
const passwordChanged = createEvent<string>();

const $email = restore(emailChanged, 'admin@gmail.com');
const $password = restore(passwordChanged, 'admin123');

const $form = combine({ email: $email, password: $password });

sample({
  clock: formSubmitted,
  source: $form,
  target: webviewBackendApi.auth.loginFx
});

sample({
  clock: webviewBackendApi.auth.loginFx.done,
  target: changeRouteFx.prepend(() => routes.me())
});

export { $email, $password, emailChanged, passwordChanged, formSubmitted };
