declare module 'react' {
  import type { PropsWithChildren } from 'react';
  type FC<P = {}> = FunctionComponent<P>;

  type FunctionComponent<P> = {
    (props: PropsWithChildren<P>, context?: any): React.ReactElement | null;
  };
}
