import { createEffect } from 'effector';

const authorizeFx = createEffect(() => {
  window.location.href = 'http://auth.dev.devbay.tech/app-authz-vanilla';
});

export { authorizeFx };
