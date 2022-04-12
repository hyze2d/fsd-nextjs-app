import { sample } from 'effector';

import { getKekFx } from './effects';
import { getKek } from './events';

sample({
  clock: getKek,
  target: getKekFx
});
