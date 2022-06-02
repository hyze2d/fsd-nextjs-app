import { combine, createEvent, sample } from 'effector';
import { $user } from '@entities/user';
import { getUserFx } from '@entities/user/model';

const mounted = createEvent();

const $profile = combine({
  user: $user
});

sample({
  clock: mounted,

  target: getUserFx
});

export { mounted, $profile };
