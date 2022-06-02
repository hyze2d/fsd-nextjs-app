import type { Scope } from 'effector';
import { serialize } from 'effector';
import { fork } from 'effector';
import { Provider } from 'effector-react/scope';
import type { ComponentType } from 'react';
import { useMemo } from 'react';
import { environment } from '@shared/config/environment';

let _scope: Scope;

type PropsWithScope<P> = P & {
  pageProps: {
    __pageScopeState__: Record<string, any>;
  };
};

function withScope<P>(Source: ComponentType<P>) {
  return ({
    pageProps: { __pageScopeState__, ...pageProps },
    ...props
  }: PropsWithScope<P>) => {
    const scope = useMemo(
      () =>
        fork({
          values: {
            ...(_scope && serialize(_scope)),

            ...(__pageScopeState__ ?? {})
          }
        }),
      []
    );

    if (environment.isClient) {
      _scope = scope;
    }

    return (
      <Provider value={scope}>
        {/* @ts-expect-error JSX typings error */}

        <Source {...{ ...props, pageProps }} />
      </Provider>
    );
  };
}

export { withScope };
