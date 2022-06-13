import { createEvent, sample } from 'effector';
import type { NextPageContext } from 'next';
import { $$album } from '@entities/album';

const enter = createEvent<NextPageContext>();

sample({
  clock: enter,

  target: $$album.getFeaturedAlbumsFx
});

const $$homePage = {
  enter
};

export { $$homePage };
