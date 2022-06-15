import type { Event } from 'effector';
import type { NextPageContext } from 'next';
import type { PageContext, StaticPageContext } from 'nextjs-effector';
import {
  createGIPFactory,
  createGSPFactory,
  createGSSPFactory
} from 'nextjs-effector';
import type { ComponentType, PropsWithChildren } from 'react';
import { $$boot } from '@processes/boot';

type CreatePageOptions = {
  component: ComponentType;
  layout?: ComponentType<PropsWithChildren<{}>>;
  gssp?: Event<PageContext>;
  gip?: Event<PageContext>;
  gsp?: Event<StaticPageContext>;
};

const createGSSP = createGSSPFactory({
  sharedEvents: [$$boot.started as Event<PageContext>]
});

const createGIP = createGIPFactory({
  sharedEvents: [$$boot.started as Event<PageContext>],

  runSharedOnce: true
});

const createGSP = createGSPFactory({
  sharedEvents: [$$boot.started]
});

const createNextPage = ({
  component: Component,
  layout: Layout,
  gssp,
  gsp,
  gip
}: CreatePageOptions) => {
  let Page: {
    (props: {}): JSX.Element;

    getLayout?: (content: JSX.Element) => JSX.Element;

    getInitialProps?: (context: NextPageContext) => any;
  } = (props: {}) => <Component {...props} />;

  let getServerSideProps;
  let getStaticProps;

  if (Layout) {
    Page.getLayout = (content: JSX.Element) => <Layout>{content}</Layout>;
  }

  switch (true) {
    case !!gssp:
      getServerSideProps = createGSSP({ pageEvent: gssp });

      break;

    case !!gsp:
      getStaticProps = createGSP({ pageEvent: gsp });

      break;
    case !!gip:
      Page.getInitialProps = createGIP({ pageEvent: gip });

      break;
  }

  return {
    Page,
    getStaticProps,
    getServerSideProps
  };
};

export { createNextPage };
