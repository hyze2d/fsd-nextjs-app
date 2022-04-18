import { useGate, useStore } from 'effector-react';
import { RouterGate } from '@shared/router';
import type { Scope } from 'effector';
import { Provider as EffectorProvider } from 'effector-react/scope';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { ThemeGate } from '@shared/theme';
import { $user } from '@entities/session';
import { dark, light } from '@shared/config/theme';
import { User } from '@shared/api/devbay';

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
  const { theme } = useStore($user) as User;

  useGate(ThemeGate, themes[theme]);

  return <>{children}</>;
};

const Provider: FC<ProviderProps> = ({ children, scope }) => {
  const router = useRouter();

  return (
    <EffectorProvider value={scope}>
      <ThemeProvider>
        <RouterGate router={router} />

        {children}
      </ThemeProvider>
    </EffectorProvider>
  );
};

export { Provider };
export type { ProviderProps };
