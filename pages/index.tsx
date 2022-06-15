import { baseLayout } from '@app/layouts/base';
import { $$homePage, Home } from '@pages/home';

const { Page } = baseLayout.createNextPage(Home, {
  gip: $$homePage.enter
});

console.log(Page.getInitialProps);

export default Page;
