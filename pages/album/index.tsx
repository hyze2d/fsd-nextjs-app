import { baseLayout } from '@app/layouts/base';
import { $$albumsPage, Albums } from '@pages/albums';

const { Page } = baseLayout.createNextPage(Albums, {
  gip: $$albumsPage.enter
});

export default Page;
