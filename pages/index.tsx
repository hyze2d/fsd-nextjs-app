import { baseLayout } from '@app/layouts/base';
import { $$homePage, Home } from '@pages/home';

const { Page } = baseLayout.createNextPage(Home, {
  gip: $$homePage.enter,

  pathname: '/'
});

export default Page;
