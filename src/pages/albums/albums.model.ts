import { sample } from 'effector';
import { $$mainPage } from '@layouts/main-page';
import { $$album } from '@entities/album';
import { createPage } from '@shared/lib/factory';

const $$albumsPage = createPage($$mainPage);

sample({
  clock: $$albumsPage.enter,

  target: $$album.getAlbumsFx
});

export { $$albumsPage };
