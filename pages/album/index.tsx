import { baseLayout } from '@app/layouts/base';
import { $$albumsPage, Albums } from '@pages/albums';

const { Page, getServerSideProps } = baseLayout.createNextPage(Albums, {
  gssp: $$albumsPage.enter
});

export default Page;
export { getServerSideProps };
