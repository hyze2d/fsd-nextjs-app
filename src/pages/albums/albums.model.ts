import { createEvent, sample } from 'effector';
import type { PageContext } from 'nextjs-effector';
import { $$album } from '@entities/album';

const $$albumsPage = {
  enter: createEvent<PageContext>()
};

sample({
  clock: $$albumsPage.enter,

  target: $$album.getAlbumsFx
});

export { $$albumsPage };
