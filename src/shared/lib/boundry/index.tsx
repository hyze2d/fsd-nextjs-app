import type { ComponentType, PropsWithChildren } from 'react';
import React from 'react';

type ErrorPayload = {
  error?: unknown;
  info?: unknown;
  meta?: unknown;
};

class ErrorBoundary extends React.Component<
  PropsWithChildren<{
    fallback: ComponentType<ErrorPayload>;

    meta?: Record<string, any>;

    onError?: (payload: ErrorPayload) => void;
  }>
> {
  public static getDerivedStateFromError = (error: unknown) => ({
    hasError: true,
    error,
    info: null
  });

  public state = {
    info: null as unknown,
    error: null as unknown,
    hasError: false
  };

  public componentDidCatch(error: unknown, info: unknown) {
    const { onError, meta } = this.props;

    this.setState(() => ({
      meta,
      info,
      hasError: true
    }));

    onError?.({ error, meta, info });
  }

  public render() {
    const { children, fallback: Fallback, meta } = this.props;
    const { hasError, info, error } = this.state;

    if (hasError) {
      return <Fallback meta={meta} info={info} error={error} />;
    }

    return <>{children}</>;
  }
}

export type { ErrorPayload };
export { ErrorBoundary };
