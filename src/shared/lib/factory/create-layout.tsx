import loadNamespaces from 'next-translate/loadNamespaces';
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
  pathname?: string;
  children?: () => JSX.Element | JSX.Element[];
};

const createLayout = ({ getLayout, gssp, gip, gsp }: CreateLayoutOptions) => {
  const createGSSP = createGSSPFactory(gssp);
  const createGIP = createGIPFactory(gip);
  const createGSP = createGSPFactory(gsp);

  function createNextPage<T>(
    Component: ComponentType<T>,
    { gssp, gip, gsp, pathname, children }: CreateNextPageOptions
  ) {
    let getStaticProps;
    let getServerSideProps;

    const Page = (props: T) => (
      <>
        {children?.()}

        <Component {...props} />
      </>
    );

    Page.getLayout = getLayout;

    if (gip) {
      Page.getInitialProps = createGIP({
        pageEvent: gip,

        customize: pathname
          ? async ({ context }) => ({
              ...(await loadNamespaces({
                ...context,

                pathname
              }))
            })
          : undefined
      });
    }

    if (gssp) {
      getServerSideProps = createGSSP({
        pageEvent: gssp,

        customize: pathname
          ? async ({ context }) => ({
              props: await loadNamespaces({
                ...context,

                pathname
              })
            })
          : undefined
      });
    }

    if (gsp) {
      getStaticProps = createGSP({
        pageEvent: gsp,

        customize: pathname
          ? async ({ context }) => ({
              props: await loadNamespaces({
                ...context,

                pathname
              })
            })
          : undefined
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
