import { $$boot } from '@processes/boot';
import { $$mainPage, MainPage } from '@widgets/main-page';
import { createLayout } from '@shared/lib/factory';

const baseLayout = createLayout({
  getLayout: page => <MainPage>{page}</MainPage>,

  gssp: {
    sharedEvents: [$$boot.started, $$mainPage.enter]
  },

  gip: {
    sharedEvents: [$$boot.started, $$mainPage.enter]
  },

  gsp: {
    sharedEvents: [$$boot.started, $$mainPage.enter]
  }
});

export { baseLayout };
