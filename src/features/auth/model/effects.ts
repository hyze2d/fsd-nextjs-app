import { createEffect } from 'effector';

const AUTH_URL = 'http://auth.dev.devbay.tech/app-authz-vanilla';

const authorizeFx = createEffect(() => {
  window.location.href = AUTH_URL;
});

export { authorizeFx };
