import { createEffect } from 'effector';

const getTestFx = createEffect(async (id: string) => {
  await new Promise(resolve => {
    setTimeout(resolve, 1000);
  });

  return Math.random() + ' - ' + id;
});

export { getTestFx };
