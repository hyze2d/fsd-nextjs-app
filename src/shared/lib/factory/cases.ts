import type { Store } from 'effector';
import { combine } from 'effector';
import { useStore } from 'effector-react';
import type { ComponentType } from 'react';
import React from 'react';

type Condition<T> = {
  when: Store<boolean>;

  then: ComponentType<T>;
};

const cases = <P>(
  conditions: Condition<P>[],

  { fallback }: { fallback?: ComponentType }
) => {
  const stores: {
    [x: number]: Store<boolean>;
  } = {};

  conditions.forEach((item, index) => {
    stores[index] = item.when;
  });

  const $state = combine(stores);

  return (props: P) => {
    const state = useStore($state) as {
      [x: number]: Store<boolean>;
    };

    const match = conditions.find((_, index) => state[index])?.then;

    if (match) {
      return React.createElement(match, props);
    }

    if (fallback) {
      return React.createElement(fallback, props);
    }

    return null;
  };
};

export { cases };
