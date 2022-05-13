import { createEffect } from 'effector';

import type { User } from '@shared/api/devbay';

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

export { getUserFx };
