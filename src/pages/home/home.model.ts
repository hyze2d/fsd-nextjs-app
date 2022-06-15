import { sample } from 'effector';
import { $$mainPage } from '@layouts/main-page';
import { $$album } from '@entities/album';
import { createPage } from '@shared/lib/factory';

const $$homePage = createPage($$mainPage);

sample({
  clock: $$homePage.enter,

  target: $$album.getFeaturedAlbumsFx
});

export { $$homePage };
