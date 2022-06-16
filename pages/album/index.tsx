import { baseLayout } from '@app/layouts/base';
import { $$albumsPage, Albums } from '@pages/albums';

const { Page, getServerSideProps } = baseLayout.createNextPage(Albums, {
  gip: $$albumsPage.enter,

  pathname: '/album'
});

export default Page;
export { getServerSideProps };
