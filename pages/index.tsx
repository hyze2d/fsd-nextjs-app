import { baseLayout } from '@app/layouts/base';
import { $$homePage, Home } from '@pages/home';

const { Page, getStaticProps } = baseLayout.createNextPage(Home, {
  gsp: $$homePage.enter,

  pathname: '/'
});

export default Page;
export { getStaticProps };
