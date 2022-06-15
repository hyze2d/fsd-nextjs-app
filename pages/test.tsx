import { MainPage } from '@layouts/main-page';
import { createNextPage } from '@app';

const { Page } = createNextPage({
  component: () => <div>TEST</div>,

  layout: MainPage
});

export default Page;
