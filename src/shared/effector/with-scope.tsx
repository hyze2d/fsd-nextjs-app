import type { Scope } from 'effector';
import { serialize } from 'effector';
import { fork } from 'effector';
import { Provider } from 'effector-react/scope';
import type { ComponentType } from 'react';
import { useMemo } from 'react';
import type { AppContext } from 'next/app';
import { environment } from '@shared/config/environment';

let _clientScope: Scope;

function withScope<P>(Source: ComponentType<P>) {
  return (({ _scope_, ...props }: P & { _scope_: object }) => {
    const scope = useMemo(() => {
      let scope = fork({
        values: {
          ...(_clientScope ? serialize(_clientScope) : {}),

          ..._scope_
        }
      });

      if (environment.isClient) {
        _clientScope = scope;
      }

      return scope;
    }, []);

    return (
      <Provider value={scope}>
        {/* @ts-expect-error jsx types */}

        <Source {...props} />
      </Provider>
    );
  }) as any as ComponentType<P> & {
    getInitialProps: <R>(context: AppContext) => Promise<R> | R;
  };
}

function getInitialPropsWithScope(
  source: (
    context: AppContext
  ) => Promise<Record<string, any>> | Record<string, any>
) {
  return (async (context: AppContext) => {
    context.ctx.scope = environment.isClient ? _clientScope : fork();

    return source(context);
  }) as (
    context: AppContext
  ) => Promise<Record<string, any>> | Record<string, any>;
}

const getServerSidePropsWithScope = () => {};

export { getInitialPropsWithScope, getServerSidePropsWithScope, withScope };
