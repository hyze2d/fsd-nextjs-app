import type { ReactNode } from 'react';
import type { LocaleStructure } from './locale-structure';
import type { Path } from '.';

declare module 'react-i18next' {
  // eslint-disable-next-line
  export interface TFunction  {
    (path: Path<LocaleStructure>, options: Record<string, any>): ReactNode;
  }
}
