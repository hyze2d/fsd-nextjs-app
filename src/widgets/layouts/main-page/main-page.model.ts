import { sample } from 'effector';
import { createLayout } from '@shared/lib/factory';

const $$mainPage = createLayout();

sample({
  clock: $$mainPage.started,

  target: $$mainPage.finished
});

export { $$mainPage };
