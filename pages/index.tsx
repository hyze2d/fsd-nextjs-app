import { baseLayout } from '@app/layouts/base';
import { $$homePage, Home } from '@pages/home';

const { Page, getServerSideProps } = baseLayout.createNextPage(Home, {
  gssp: $$homePage.enter
});

export default Page;
export { getServerSideProps };
