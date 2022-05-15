import type { ForwardedRef, MutableRefObject } from 'react';

const isForwardedRef = function <T>(
  ref?: ForwardedRef<T>
): ref is MutableRefObject<T> {
  return !!ref && typeof ref !== 'function';
};

export { isForwardedRef };
