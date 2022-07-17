import { DefaultSeo } from 'next-seo';
import { $$boot } from '@processes/boot';
import { $$mainPage, MainPage } from '@widgets/main-page';
import { createLayout } from '@shared/lib/factory';
import { connect } from '@shared/lib/view';

const Seo = connect(DefaultSeo)
  .static({
    title: 'Swamp & co.'
  })
  .view();

const baseLayout = createLayout({
  getLayout: page => (
    <MainPage>
      <Seo />

      {page}
    </MainPage>
  ),

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
