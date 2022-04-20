import { sample } from 'effector';

import { getTestFx } from './effects';
import { getTest } from './events';

sample({
  clock: getTest,
  target: getTestFx
});
