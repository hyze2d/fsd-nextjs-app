import { useGate } from 'effector-react';
import type { PropsWithChildren } from 'react';
import { ThemeGate } from './model';
import type { ThemeOptions } from './types';

const Theme = ({
  theme,
  children
}: PropsWithChildren<{ theme: ThemeOptions }>) => {
  useGate(ThemeGate, theme);

  return <>{children}</>;
};

export { Theme };
