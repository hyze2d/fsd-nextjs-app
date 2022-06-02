import { sample } from 'effector';
import { getUserFx } from '@entities/user/model';
import { createPage } from '@shared/lib/effector';

const profilePage = createPage();

sample({
  clock: profilePage.enter,

  target: getUserFx
});

export { profilePage };
