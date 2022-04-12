import { sample } from 'effector';
import { getUserFx } from './effects';
import { getUser } from './events';

sample({
  clock: getUser,
  target: getUserFx
});
