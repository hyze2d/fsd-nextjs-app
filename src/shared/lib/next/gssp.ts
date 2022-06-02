import type { ParsedUrlQuery } from 'querystring';
import type { Effect, Event, Scope, Unit } from 'effector';
import { allSettled } from 'effector';
import { serialize } from 'effector';
import { fork } from 'effector';
import type { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const gssp =
  <Q extends ParsedUrlQuery, P extends ParsedUrlQuery = any>(
    get: (
      context: GetServerSidePropsContext<Q, P>,
      payload: {
        run: <T extends Effect<any, any> | Event<any>>(
          unit: T,
          params: Parameters<T>[0]
        ) => T extends Effect<any, any> ? ReturnType<T['doneData']> : unknown;

        scope: Scope;
      }
    ) => Promise<GetServerSidePropsResult<any>> | GetServerSidePropsResult<any>,
    namespaces: string[] = []
  ) =>
  async (context: GetServerSidePropsContext<Q, P>) => {
    const translations =
      namespaces?.length > 0
        ? await serverSideTranslations(context.locale as string, namespaces)
        : {};

    const scope = fork();

    const run = async (unit: Unit<any>, params: unknown) =>
      allSettled(unit, { scope, params });

    const result: Record<string, any> = await get(context, {
      // eslint-disable-next-line
      run: run as any,
      scope
    });

    return {
      ...result,
      props: {
        ...((result.props as {}) || {}),

        ...translations,

        __pageScopeState__: serialize(scope)
      }
    };
  };

const createGSSP = <Q extends ParsedUrlQuery, P extends ParsedUrlQuery = any>(
  event:
    | Effect<GetServerSidePropsContext<Q, P>, any>
    | Event<GetServerSidePropsContext<Q, P>>,
  namespaces: string[] = []
) =>
  gssp(async (context, { scope }) => {
    await allSettled(event, {
      scope,
      params: context
    });

    return {
      props: {}
    };
  }, namespaces);

export { gssp, createGSSP };
