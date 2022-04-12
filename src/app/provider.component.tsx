import type { FC } from 'react';
import type { Scope } from 'effector';
import { Provider as EffectorProvider } from 'effector-react/scope';

type ProviderProps = {
  /**
   * Effector ssr scope
   */
  scope: Scope;
};

const Provider: FC<ProviderProps> = ({ children, scope }) => (
  <EffectorProvider value={scope}>{children}</EffectorProvider>
);

export { Provider };
export type { ProviderProps };
