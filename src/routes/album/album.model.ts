import { sample } from 'effector';
import type { GetServerSidePropsContext } from 'next';
import { getAlbumFx } from '@entities/album';
import { createPage } from '@shared/lib/effector';

const albumPage = createPage<GetServerSidePropsContext<{}, {}>>();

sample({
  clock: albumPage.enter,

  fn: () => '1',

  target: getAlbumFx
});

export { albumPage };
