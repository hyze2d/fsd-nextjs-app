import type { ComponentType, FC } from 'react';

/**
 * Decorator for React components to split logic & view and make testing easier
 */
const hoc = function <SP, HP extends object = {}>(
  hook: (props: SP) => HP | null | undefined,
  Source: ComponentType<HP & SP>
) {
  type ResultComponentType = FC<Partial<HP> & SP> & {
    Original: ComponentType<HP & SP>;
    hook: typeof hook;
  };

  const Result: ResultComponentType = props => (
    <Source {...(hook(props) ?? {})} {...props} />
  );

  Result.Original = Source;
  Result.hook = hook;

  return Result;
};

export { hoc };
