import type { Store } from 'effector';
import { is } from 'effector';
import { useStore } from 'effector-react';
import type { NextSeoProps } from 'next-seo';
import { NextSeo } from 'next-seo';
import type { FC, ReactNode } from 'react';

type WithChildren<P> = {
  children: ReactNode | Element;
} & P;

function getHoc<P>(Seo: FC<P>) {
  return ({ children, ...props }: WithChildren<P>) => (
    <>
      {/* @ts-expect-error problems with react types */}

      <Seo {...(props as P)} />

      {children}
    </>
  );
}

type MapConfig<V, P> = (source: V, props: P) => NextSeoProps;

function seo<V, P>(
  $source: Store<V>,
  map: MapConfig<V, P>
): FC<WithChildren<P>>;
function seo<P>(map: (props: P) => NextSeoProps): FC<WithChildren<P>>;
function seo(props: Store<NextSeoProps> | NextSeoProps): FC;
function seo(...args: any[]) {
  switch (true) {
    case args?.length == 2:
      return getHoc(props => (
        <NextSeo
          {...(args[1] as MapConfig<unknown, unknown>)(
            useStore(args[0] as Store<unknown>),
            props
          )}
        />
      ));

    case is.store(args[0]):
      return getHoc(() => (
        <NextSeo {...useStore(args[0] as Store<NextSeoProps>)} />
      ));

    case typeof args[0] == 'function':
      return getHoc(props => (
        <NextSeo {...(args[0] as (props: unknown) => NextSeoProps)(props)} />
      ));

    case typeof args[0] == 'object':
      return getHoc(() => <NextSeo {...args[0]} />) as FC;

    default:
      throw new Error(
        'You should provide one of the possible variations of parameters'
      );
  }
}

export { seo };
