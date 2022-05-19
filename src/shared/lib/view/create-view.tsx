import type { Event, Store } from 'effector';
import { combine } from 'effector';
import { is } from 'effector';
import { useEvent, useStore } from 'effector-react';
import type { FC } from 'react';
import { useEffect } from 'react';

type PropsMapper<P, T = any> = (props: P) => T;

type Listener = Event<void> | (() => void);

type VoidFn = () => void;

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

class ViewBuilder<P, MP = {}> {
  private displayName: string | null = null;

  private defaultProps: Partial<P> | null = null;

  private readonly maps: any[] = [];

  private readonly mappers: PropsMapper<P>[] = [];

  private readonly listeners: {
    mount: Listener[];
    unmount: Listener[];
  } = {
    mount: [],
    unmount: []
  };

  private getMappedProps() {
    const props = this.maps.reduce(
      (result, item) => ({
        ...result,
        ...item
      }),
      {}
    );

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

    const $state = combine(stores);

    return {
      rest,
      $state,
      events
    };
  }

  private getLifeCycle() {
    const hasLifeCycle =
      this.listeners.mount.length > 0 || this.listeners.mount.length > 0;

    const listeners = {
      mount: {
        fns: [] as VoidFn[],
        events: [] as Event<void>[]
      },

      unmount: {
        fns: [] as VoidFn[],
        events: [] as Event<void>[]
      }
    };

    const keys = ['mount', 'unmount'] as (keyof typeof listeners)[];

    keys.forEach(key => {
      this.listeners[key].forEach(listener => {
        listeners[key][is.event(listener) ? 'events' : 'fns'].push(
          listener as any
        );
      });
    });

    const useLifeCycle = () => {
      const onMount = useEvent(listeners.mount.events);
      const onUnmount = useEvent(listeners.unmount.events);

      useEffect(() => {
        ([...listeners.mount.fns, ...onMount] as VoidFn[]).forEach(item =>
          item()
        );

        return () => {
          ([...listeners.unmount.fns, ...onUnmount] as VoidFn[]).forEach(item =>
            item()
          );
        };
      }, []);
    };

    return {
      hasLifeCycle,
      useLifeCycle
    };
  }

  public useMap<T>(mapper: (props: P) => T) {
    this.mappers.push(mapper);

    return this as any as ViewBuilder<P, MP & T>;
  }

  public useProps<SP>(props: SP) {
    this.maps.push(props);

    return this as any as ViewBuilder<P, MP & SP>;
  }

  public useMount = (listener: Listener) => {
    this.listeners.mount.push(listener);

    return this;
  };

  public useUnmount = (listener: Listener) => {
    this.listeners.unmount.push(listener);

    return this;
  };

  public useDefaultProps = (props: Partial<P>) => {
    this.defaultProps = props;

    return this;
  };

  public useDisplayName = (name: string) => {
    this.displayName = name;

    return this;
  };

  public view(render: FC<P & MapStoresToValues<MP>>) {
    const { useLifeCycle, hasLifeCycle } = this.getLifeCycle();

    const { $state, events, rest } = this.getMappedProps();

    const View: FC<P> = (props: P) => {
      if (hasLifeCycle) {
        // eslint-disable-next-line
        useLifeCycle();
      }

      const mappedProps = this.mappers.reduce(
        (result, mapper) => ({
          result,
          ...mapper(props)
        }),
        {}
      );

      return render({
        ...props,
        ...mappedProps,
        ...rest,
        ...useStore($state),
        ...useEvent(events)
      } as P & MapStoresToValues<MP>);
    };

    if (this.displayName) {
      View.displayName = this.displayName;
    }

    if (this.defaultProps) {
      View.defaultProps = this.defaultProps;
    }

    return View;
  }
}

function createView<P>() {
  return new ViewBuilder<P>();
}

export { createView };
