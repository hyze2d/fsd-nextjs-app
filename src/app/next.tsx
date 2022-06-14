import type { Effect, Event, Scope } from 'effector';
import {
  createStore,
  fork,
  allSettled,
  createEvent,
  serialize
} from 'effector';
import { Provider } from 'effector-react/scope';
import type { NextPageContext } from 'next';
import type { ComponentType, PropsWithChildren, ReactNode } from 'react';
import { useMemo } from 'react';
import { $$boot } from '@processes/boot';
import { environment } from '@shared/config';

type Starter<V> = Event<V> | Effect<V, any>;

type Options<P> = {
  component: ComponentType<P>;

  layout?: ComponentType<any> & { started?: Starter<NextPageContext> };

  gssp?: Starter<any>;

  gip?: Starter<NextPageContext>;

  gsp?: Starter<any>;

  namespaces?: string[];
};

const BaseLayout = ({ children }: PropsWithChildren<{}>) => <>{children}</>;

const before = {
  gssp: createEvent(),

  gip: $$boot.started,

  gsp: createEvent()
};

const gipExecuted = createEvent();

const $gipExecuted = createStore(false).on(gipExecuted, () => true);

let _scope_: Scope;
let _currentLayout: any;

function createPage<P>({ component: Component, layout, gip }: Options<P>) {
  const Layout = layout ?? BaseLayout;

  const Page = (props: P) => <Component {...props} />;

  Page.getLayout = (page: ReactNode) => <Layout>{page}</Layout>;

  if (gip) {
    Page.getInitialProps = async (ctx: NextPageContext) => {
      const scope = environment.isClient
        ? _scope_
        : fork({
            values: environment.isClient && _scope_ ? serialize(_scope_) : {}
          });

      if (!scope.getState($gipExecuted)) {
        await allSettled(before.gip, { scope, params: ctx });

        await allSettled(gipExecuted, { scope });
      }

      // @ts-expect-error temporary
      if (_currentLayout != Layout && Layout.started) {
        // @ts-expect-error temporary
        await allSettled(Layout.started, { scope, params: ctx });
      }

      if (environment.isClient) {
        _currentLayout = Layout;
      }

      await allSettled(gip, { scope, params: ctx });

      console.log(serialize(scope));

      return {
        _values_: serialize(scope)
      };
    };
  }

  const getServerSideProps = () => {};

  const getStaticProps = () => {};

  return {
    Page,
    getStaticProps,
    getServerSideProps
  };
}

function withScope<P extends { pageProps: any }>(Component: ComponentType<P>) {
  return ({ pageProps: { _values_, ...pageProps }, ...props }: P) => {
    const scope = useMemo(() => {
      const result = fork({
        values: {
          ...(_scope_ && serialize(_scope_)),

          ...(_values_ || {})
        }
      });

      if (environment.isClient) {
        _scope_ = result;
      }

      return result;
    }, [_values_]);

    return (
      <Provider value={scope}>
        <Component
          {...({
            ...props,
            pageProps
          } as P)}
        />
      </Provider>
    );
  };
}

export { createPage, withScope };
