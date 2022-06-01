import type { Scope } from 'effector';

declare module 'next' {
  // eslint-disable-next-line
  interface NextPageContext {
    scope: Scope;
    loadResources: (namespaces: string[]) => Promise<void>;
  }
}
