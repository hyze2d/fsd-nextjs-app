import { sample } from 'effector';

import { authorizeFx } from './effects';
import { authorize } from './events';

sample({
  clock: authorize,
  target: authorizeFx
});
