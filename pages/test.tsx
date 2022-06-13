import { MainPage } from '@layouts/main-page';
import { createPage } from '@app';

const { Page } = createPage({
  component: () => <div>TEST</div>,

  layout: MainPage
});

export default Page;
