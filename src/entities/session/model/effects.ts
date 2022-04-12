import { User } from '@shared/api/configurator';
import { createEffect } from 'effector';

const setTokenFx = createEffect(async (token: string) => {});

const getUserFx = createEffect(async () => {
  await new Promise(res => {
    setTimeout(res, 1000);
  });

  const user: User = {
    id: 1
  };

  return user;
});

export { getUserFx, setTokenFx };
