import type {
  ForwardedRef,
  ForwardRefExoticComponent,
  ForwardRefRenderFunction,
  MemoExoticComponent,
  PropsWithoutRef,
  RefAttributes
} from 'react';

import { forwardRef, memo } from 'react';

import type { PartialFields } from '@lib/utility-types';

/**
 * Decorator for React components to split logic & view and make testing easier
 */
const hoc = <
  SourceProps extends object,
  HookProps,
  RefType extends HTMLElement,
  DefaultProps extends Partial<SourceProps> = {}
>(
  hook: (props: SourceProps, ref: ForwardedRef<RefType>) => HookProps,
  Source: ForwardRefRenderFunction<
    RefType,
    Omit<HookProps, keyof SourceProps> & SourceProps
  >,
  defaultProps?: DefaultProps
) => {
  type ComponentType = ForwardRefExoticComponent<
    PartialFields<PropsWithoutRef<SourceProps>, keyof DefaultProps> &
      RefAttributes<RefType>
  >;

  type ResultType = ComponentType & {
    Original: typeof Source;
    hook: typeof hook;
    Memo: MemoExoticComponent<ComponentType>;
  };

  const SourceWithRef = forwardRef(Source);

  const Component = forwardRef<RefType, SourceProps>((sourceProps, ref) => {
    const hookProps = hook(sourceProps, ref);

    const props = {
      ...hookProps,
      ...sourceProps
    } as unknown as PropsWithoutRef<
      Omit<HookProps, keyof SourceProps> & SourceProps
    >;

    return <SourceWithRef ref={ref} {...props} />;
  });

  const Result = Component as ResultType;

  Result.defaultProps = defaultProps as Partial<
    Omit<PropsWithoutRef<SourceProps>, keyof DefaultProps>
  >;

  Result.Original = Source;
  Result.hook = hook;
  Result.Memo = memo(Result);

  return Result;
};

export { hoc };
