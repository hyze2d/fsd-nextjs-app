import type { FC } from 'react';
import type { Scope } from 'effector';
import { Provider as EffectorProvider } from 'effector-react/scope';
// import { useGate } from 'effector-react';
import { RouterGate } from '@shared/router';
import { useRouter } from 'next/router';

type ProviderProps = {
  /**
   * Effector ssr scope
   */
  scope: Scope;
};

const Provider: FC<ProviderProps> = ({ children, scope }) => {
  const router = useRouter();

  return (
    <EffectorProvider value={scope}>
      <RouterGate router={router} />

      {children}
    </EffectorProvider>
  );
};

export { Provider };

export type { ProviderProps };
