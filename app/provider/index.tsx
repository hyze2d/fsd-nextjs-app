import type { Scope } from 'effector';

import { useGate } from 'effector-react';

import { Provider as EffectorProvider } from 'effector-react/scope';

import { useRouter } from 'next/router';

import type { FC, PropsWithChildren } from 'react';

import { dark, light } from '@shared/config/theme';

import { MediaListener } from '@shared/lib/media';

import { RouterGate } from '@shared/router';

import { ThemeGate } from '@shared/theme';

type ProviderProps = {
  /**
   * Effector ssr scope
   */
  scope: Scope;
};

const themes = {
  dark,
  light
};

const ThemeProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  useGate(ThemeGate, themes.light);

  return <>{children}</>;
};

const RouterProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const router = useRouter();

  useGate(RouterGate, { router });

  return <>{children}</>;
};

const Provider: FC<ProviderProps> = ({ children, scope }) => (
  <EffectorProvider value={scope}>
    <ThemeProvider>
      <RouterProvider>
        <MediaListener />

        {children}
      </RouterProvider>
    </ThemeProvider>
  </EffectorProvider>
);

export { Provider };
export type { ProviderProps };
