import type { DefaultSeoProps } from 'next-seo';
import { DefaultSeo } from 'next-seo';
import { $$boot } from '@processes/boot';
import { $$mainPage, MainPage } from '@widgets/main-page';
import { createLayout } from '@shared/lib/factory';
import { createView } from '@shared/lib/view';

// TODO: fix createView types later
const Seo = createView()
  .props({
    title: 'Swamp & co.'
  } as DefaultSeoProps)

  // TODO: fix createView(Component)
  .view(props => <DefaultSeo {...props} />);

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
