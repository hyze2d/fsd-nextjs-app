import { createEffect } from 'effector';

const getKekFx = createEffect(async (id: string) => {
  await new Promise(resolve => {
    setTimeout(resolve, 1000);
  });

  return Math.random() + ' - ' + id;
});

export { getKekFx };
