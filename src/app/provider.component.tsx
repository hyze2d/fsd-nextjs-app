import { FC } from 'react';
import { Scope } from 'effector';
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

export type { ProviderProps };
export { Provider };
