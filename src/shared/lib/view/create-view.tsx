/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable react-hooks/rules-of-hooks */

import type { Event, Store } from 'effector';
import { combine, is } from 'effector';
import { useEvent, useStore } from 'effector-react';
import type { ComponentType, ReactElement } from 'react';
import { useEffect } from 'react';
import { memo } from 'react';

type RenderReturnType = ReactElement<any, any> | null;

type MapProps<P, T = any> = (props: P) => T;

type MapStoresToValues<
  T extends {
    [K in keyof T]: T[K] | Store<T[K]>;
  }
> = {
  [P in keyof T]: T[P] extends Store<any>
    ? ReturnType<T[P]['getState']>
    : T[P] extends Event<any>
    ? (payload: Parameters<T[P]>[0]) => void
    : T[P];
};

type View<P, MP> = ComponentType<Omit<P, keyof MP>> & {
  Original: (props: P & MP) => RenderReturnType;
};

type MappedStaticProps = {
  store: Store<Record<string, unknown>>;
  events: Record<string, Event<unknown>>;
  rest: Record<string, unknown>;
};

type PropsMap<P = any> = MapProps<P> | MappedStaticProps;

class ViewBuilder<P extends {}, MP = {}> {
  private static isMappedStaticProps(
    payload: PropsMap
  ): payload is MappedStaticProps {
    return typeof payload == 'object';
  }

  private static isMapProps(payload: PropsMap): payload is MapProps<any> {
    return typeof payload == 'function';
  }

  private static useLifeCycle(mounted: Event<void>, unmounted: Event<void>) {
    const [onMount, onUnmount] = useEvent([mounted, unmounted]);

    if (!mounted && !unmounted) return;

    useEffect(() => {
      onMount();

      return onUnmount;
    }, []);
  }

  private _displayName?: string;

  private _defaultProps?: Partial<P>;

  private _exit?: Event<void>;

  private _enter?: Event<void>;

  private _effect?: (props: P & MP) => void;

  private _memo?: boolean;

  private readonly _propMap: PropsMap[] = [];

  private splitPropsByType(props: Record<string, unknown>): MappedStaticProps {
    const events: Record<string, Event<unknown>> = {};
    const stores: Record<string, Store<unknown>> = {};
    const rest: Record<string, unknown> = {};

    for (const [key, value] of Object.entries(props)) {
      if (is.store(value)) {
        stores[key] = value;

        continue;
      }

      if (is.event(value)) {
        events[key] = value;

        continue;
      }

      rest[key] = value;
    }

    return {
      rest,
      events,
      store: combine(stores)
    };
  }

  public exit(_unmounted: Event<void>) {
    this._exit = _unmounted;

    return this;
  }

  public enter(_mounted: Event<void>) {
    this._enter = _mounted;

    return this;
  }

  public displayName(_displayName: string) {
    this._displayName = _displayName;

    return this;
  }

  public defaultProps(_defaultProps: Partial<P>) {
    this._defaultProps = _defaultProps;

    return this;
  }

  public effect(effect: (props: P & MP) => void) {
    this._effect = effect;

    return this;
  }

  public memo() {
    this._memo = true;

    return this;
  }

  public props<
    T extends Record<string, any>,
    R = ViewBuilder<P, MP & MapStoresToValues<T>>
  >(payload: T): R {
    this._propMap.push(this.splitPropsByType(payload));

    return this as unknown as R;
  }

  public map<T, R = ViewBuilder<P, MP & T>>(payload: MapProps<P & MP, T>): R {
    this._propMap.push(payload);

    return this as unknown as R;
  }

  public view(
    render: (props: P & MP) => RenderReturnType
  ): ComponentType<Omit<P, keyof MP>> & { Original: typeof render } {
    const { _propMap, _memo, _exit, _enter } = this;

    const View: View<P, MP> = props => {
      const _props = _propMap.reduce<Omit<P, keyof MP> & MP>((result, item) => {
        if (ViewBuilder.isMappedStaticProps(item)) {
          return {
            ...result,
            ...useStore(item.store),
            ...useEvent(item.events),
            ...item.rest
          };
        }

        if (ViewBuilder.isMapProps(item)) {
          return {
            ...result,
            ...(item(result) as Partial<Omit<P, keyof MP> & MP>)
          };
        }

        return result;
      }, props as Omit<P, keyof MP> & MP); // eslint-disable-line @typescript-eslint/prefer-reduce-type-parameter

      ViewBuilder.useLifeCycle(_enter as Event<void>, _exit as Event<void>);

      if (this._effect) {
        this._effect(_props as P & MP);
      }

      return render(_props as P & MP);
    };

    if (this._defaultProps) {
      View.defaultProps = this._defaultProps;
    }

    if (this._displayName) {
      View.displayName = this._displayName;
    }

    const Output = (_memo ? memo(View) : View) as typeof View;

    View.Original = Output.Original = render;

    return Output;
  }
}

function createView<P>() {
  return new ViewBuilder<P>();
}

export { createView };
