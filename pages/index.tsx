import { MainPage } from '@layouts/main-page';
import { createNextPage } from '@app';
import { $$homePage, Home } from '@pages/home';

const { Page, getStaticProps } = createNextPage({
  component: Home,

  layout: MainPage,

  gsp: $$homePage.enter
});

export default Page;
export { getStaticProps };
