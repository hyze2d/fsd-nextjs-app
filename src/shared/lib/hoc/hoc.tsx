import type { FC, MemoExoticComponent } from 'react';
import { memo } from 'react';

import type { PartialFields } from '@lib/utility-types';

const hoc = <
  SourceProps extends object,
  HookProps,
  DefaultProps extends Partial<SourceProps> = {}
>(
  hook: (props: SourceProps) => HookProps,
  Source: FC<HookProps & SourceProps>,
  defaultProps?: DefaultProps
) => {
  type Props = PartialFields<SourceProps, keyof DefaultProps>;
  type ComponentType = FC<Props>;

  type ResultType = ComponentType & {
    Original: typeof Source;
    hook: typeof hook;
    Memo: MemoExoticComponent<ComponentType>;
  };

  const Component = (props: SourceProps) => (
    <Source {...hook(props)} {...props} />
  );

  const Result = Component as ResultType;

  Component.defaultProps = defaultProps ?? {};

  Result.Original = Source;
  Result.hook = hook;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  Result.Memo = memo(Component);

  return Result;
};

export { hoc };
