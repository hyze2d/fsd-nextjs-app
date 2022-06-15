import type { Event } from 'effector';
import type { PageContext } from 'nextjs-effector';
import { MainPage } from '@layouts/main-page';
import { createNextPage } from '@app';
import { $$albumsPage, Albums } from '@pages/albums';

const { Page } = createNextPage({
  component: () => <Albums />,

  layout: MainPage,

  gip: $$albumsPage.enter as Event<PageContext>
});

export default Page;
