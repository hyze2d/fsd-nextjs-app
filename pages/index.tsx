import { baseLayout } from '@app/layouts/base';
import { $$homePage, Home } from '@pages/home';
import { seo } from '@shared/lib/seo';

const Seo = seo({
  title: 'Home'
});

const { Page } = baseLayout.createNextPage(Home, {
  gip: $$homePage.enter,

  pathname: '/',

  prepend: () => <Seo />
});

export default Page;
