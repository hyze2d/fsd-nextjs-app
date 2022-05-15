import type { Scope } from 'effector';

import { useGate, useStore } from 'effector-react';

import { Provider as EffectorProvider } from 'effector-react/scope';

import { useRouter } from 'next/router';

import type { FC } from 'react';

import { $user } from '@entities/session';

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

const ThemeProvider: FC = ({ children }) => {
  const user = useStore($user);

  useGate(ThemeGate, themes[user?.theme ?? 'light']);

  return <>{children}</>;
};

const Provider: FC<ProviderProps> = ({ children, scope }) => {
  const router = useRouter();

  return (
    <EffectorProvider value={scope}>
      <ThemeProvider>
        <RouterGate router={router} />

        <MediaListener />

        {children}
      </ThemeProvider>
    </EffectorProvider>
  );
};

export { Provider };
export type { ProviderProps };
