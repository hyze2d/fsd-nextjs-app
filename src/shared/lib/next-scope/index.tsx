import type { Scope } from 'effector';
import { serialize } from 'effector';
import { fork } from 'effector';

import { Provider } from 'effector-react/scope';
import { useMemo } from 'react';
import type { AppProps } from 'next/app';

let _scope: Scope;

function withScope(App: (props: AppProps) => JSX.Element) {
  return ({ pageProps: { __scope__, ...pageProps }, ...rest }: AppProps) => {
    const scope = useMemo(() => {
      const result = fork({
        values: {
          ...(_scope && serialize(_scope)),

          ...((__scope__ as {}) ?? {})
        }
      });

      if (typeof window != 'undefined') {
        _scope = result;
      }

      return result;
    }, [__scope__]);

    return (
      <Provider value={scope}>
        <App
          {...{
            ...rest,
            pageProps: pageProps as unknown
          }}
        />
      </Provider>
    );
  };
}

export { withScope };
