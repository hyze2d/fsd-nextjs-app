import dynamic from 'next/dynamic';
import type { ComponentClass, FC, FunctionComponent } from 'react';

function loadDynamic<P>(
  loader: () => Promise<
    FC<P> | ComponentClass<never> | FunctionComponent<never>
  >
) {
  // @ts-expect-error next types fix when
  return dynamic<P>(async () => loader()) as FC<P>;
}

export { loadDynamic };
