import { baseLayout } from '@app/layouts/base';
import { $$albumsPage, Albums } from '@pages/albums';
import { seo } from '@shared/lib/seo';

const Seo = seo({
  title: 'Albums'
});

const { Page, getServerSideProps } = baseLayout.createNextPage(Albums, {
  gip: $$albumsPage.enter,

  pathname: '/album',

  children: () => <Seo />
});

export default Page;
export { getServerSideProps };
