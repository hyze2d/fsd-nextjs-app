import type { User } from '@shared/api/devbay';

import { createEffect } from 'effector';

const setTokenFx = createEffect(async (token: string) => {});

const getUserFx = createEffect(async () => {
  await new Promise(res => {
    setTimeout(res, 1000);
  });

  const user: User = {
    id: 1,
    theme: 'light'
  };

  return user;
});

export { getUserFx, setTokenFx };
