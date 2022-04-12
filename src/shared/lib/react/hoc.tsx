import * as React from 'react';
import { ComponentType } from 'react';

/**
 * Decorator for React components to split logic & view and make testing easier
 */
const hoc = function <SP, HP>(
  hook: (props: SP) => HP,
  Source: ComponentType<HP & SP>
) {
  const Result: any = (props: SP) => (
    <Source {...(hook(props) || ({} as any))} {...props} />
  );

  Result.Original = Source;

  Result.hook = hook;

  return Result as any as ComponentType<Partial<HP> & SP> & {
    Original: ComponentType<HP & SP>;
    hook: typeof hook;
  };
};

export { hoc };
