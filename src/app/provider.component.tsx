import { useGate } from 'effector-react';
import { RouterGate } from '@shared/router';
import type { Scope } from 'effector';
import { Provider as EffectorProvider } from 'effector-react/scope';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { ThemeGate } from '@shared/theme';
import { dark, light } from '@shared/config/theme';
import { MediaListener } from '@shared/lib/media';

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
  useGate(ThemeGate, themes.dark);

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
