import { createEvent, sample } from 'effector';
import type { PageContext } from 'nextjs-effector';
import { $$album } from '@entities/album';

const $$homePage = {
  enter: createEvent<PageContext>()
};

sample({
  clock: $$homePage.enter,

  target: $$album.getFeaturedAlbumsFx
});

export { $$homePage };
