// eslint-disable react-hooks/rules-of-hooks
// eslint-disable @typescript-eslint/no-explicit-any

import type { Effect, Event, Store } from 'effector';
import { is } from 'effector';
import { combine } from 'effector';
import { useEvent } from 'effector-react';
import type { MemoExoticComponent } from 'react';
import { memo, useEffect } from 'react';

type MapStoresToValues<
  T extends {
    [K in keyof T]: T[K] | Store<T[K]>;
  }
> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [P in keyof T]: T[P] extends Store<any>
    ? ReturnType<T[P]['getState']>
    : T[P] extends Event<unknown>
    ? (payload: Parameters<T[P]>[0]) => void
    : T[P];
};

type BuilderResult<P, MP, K extends string> = Omit<ViewBuilder<P, MP, K>, K>;

type View<P, MP> = ((props: Omit<P, keyof MP>) => JSX.Element) & {
  defaultProps?: Partial<P>;

  displayName?: string;

  memo: MemoExoticComponent<(props: Omit<P, keyof MP> & MP) => JSX.Element>;
};

type ViewBuilder<P, MP, K extends string> = {
  displayName: (displayName: string) => BuilderResult<P, MP, K | 'displayName'>;

  defaultProps: (
    defaultProps: Partial<P>
  ) => BuilderResult<P, MP, K | 'defaultProps'>;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: <T extends Record<string, any>>(
    props: T
  ) => BuilderResult<P, MP & MapStoresToValues<T>, K | 'props'>;

  map: <T extends Record<string, unknown>>(
    map: (props: P & MP) => T
  ) => BuilderResult<P, MP & T, K | 'map'>;

  enter: (
    event: Event<void> | Event<void>
  ) => BuilderResult<P, MP, K | 'enter'>;

  exit: (event: Event<void> | Event<void>) => BuilderResult<P, MP, K | 'exit'>;

  effect: (
    effect: (props: P & MP) => void
  ) => BuilderResult<P, MP, K | 'effect'>;

  view: (render: (props: Omit<P, keyof MP> & MP) => JSX.Element) => View<P, MP>;
};

type Config<P, MP> = {
  displayName?: string;
  defaultProps?: Partial<P>;
  props?: Record<string, unknown>;
  enter?: Event<void>;
  exit?: Event<void>;
  effect?: (props: P & MP) => void;
  map?: (props: P & MP) => Record<string, unknown>;
};

function splitPropsByType(props: Record<string, unknown> = {}) {
  const events: Record<string, Effect<unknown, unknown> | Event<unknown>> = {};
  const stores: Record<string, Store<unknown>> = {};
  const rest: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(props)) {
    if (is.store(value)) {
      stores[key] = value;

      continue;
    }

    if (is.event(value) || is.effect(value)) {
      events[key] = value;

      continue;
    }

    rest[key] = value;
  }

  return {
    rest,
    events,
    stores,
    hasEvents: Object.keys(events).length > 0,
    hasStores: Object.keys(stores).length > 0
  };
}

function createView<P, MP = {}>() {
  const config: Config<P, MP> = {};

  const builder: ViewBuilder<P, MP, ''> = {
    displayName(displayName: string) {
      config.displayName = displayName;

      return this;
    },

    defaultProps(defaultProps) {
      config.defaultProps = defaultProps;

      return this;
    },

    props(props) {
      config.props = props;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return this as any;
    },

    map(map) {
      config.map = map;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return this as any;
    },

    enter(enter) {
      config.enter = enter;

      return this;
    },

    exit(exit) {
      config.exit = exit;

      return this;
    },

    effect(effect) {
      config.effect = effect;

      return this;
    },

    view(render: (props: P & MP) => JSX.Element) {
      const { hasEvents, hasStores, stores, events, rest } = splitPropsByType(
        config.props
      );

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let $store: Store<any>;

      if (hasStores) {
        $store = combine(stores);
      }

      const View: View<P, MP> = props => {
        let _props = {
          ...props,
          ...rest,
          //   eslint-disable-next-line react-hooks/rules-of-hooks
          ...(hasEvents && useEvent(events)),
          ...(hasStores && $store)
        } as P & MP;

        if (config.map) {
          _props = {
            ...props,
            ...config.map(_props)
          } as P & MP;
        }

        config.effect?.(_props);

        if (config?.enter || config?.exit) {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          useEffect(() => {
            config.enter?.();

            return config.exit;
          });
        }

        return render(_props);
      };

      if (config.displayName) {
        View.displayName = config.displayName;
      }

      if (config.defaultProps) {
        View.defaultProps = config.defaultProps;
      }

      View.memo = memo(View as (props: Omit<P, keyof MP> & MP) => JSX.Element);

      return View;
    }
  };

  return builder;
}

export { createView };
