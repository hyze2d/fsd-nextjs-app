import type { PageEvent, StaticPageEvent } from 'nextjs-effector';
import {
  createGIPFactory,
  createGSPFactory,
  createGSSPFactory
} from 'nextjs-effector';
import type { ComponentType, ReactNode } from 'react';

type CreateLayoutOptions = {
  getLayout: (page: ReactNode) => JSX.Element;
  gip: Parameters<typeof createGIPFactory>[0];
  gsp: Parameters<typeof createGSPFactory>[0];
  gssp: Parameters<typeof createGSSPFactory>[0];
};

type CreateNextPageOptions = {
  gssp?: PageEvent;
  gip?: PageEvent;
  gsp?: StaticPageEvent;
};

const createLayout = ({ getLayout, gssp, gip, gsp }: CreateLayoutOptions) => {
  const createGSSP = createGSSPFactory(gssp);
  const createGIP = createGIPFactory(gip);
  const createGSP = createGSPFactory(gsp);

  function createNextPage<T>(
    Component: ComponentType<T>,
    { gssp, gip, gsp }: CreateNextPageOptions
  ) {
    let getStaticProps;
    let getServerSideProps;

    const Page = (props: T) => <Component {...props} />;

    Page.getLayout = getLayout;

    if (gip) {
      Page.getInitialProps = createGIP({
        pageEvent: gip
      });
    }

    if (gssp) {
      getServerSideProps = createGSSP({
        pageEvent: gssp
      });
    }

    if (gsp) {
      getStaticProps = createGSP({
        pageEvent: gsp
      });
    }

    return {
      Page,
      getStaticProps,
      getServerSideProps
    };
  }

  return {
    getLayout,
    createNextPage
  };
};

export { createLayout };
