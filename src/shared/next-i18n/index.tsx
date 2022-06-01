import { readFile } from 'fs/promises';
import path from 'path';
import axios from 'axios';
import type { i18n } from 'i18next';
import i18next from 'i18next';
import type { NextApiHandler } from 'next';
import { set } from 'object-path';
import type { ComponentType, FC, PropsWithChildren } from 'react';
import { useMemo } from 'react';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import type { AppContext } from 'next/app';
import { environment } from '@shared/config/environment';

const API_ROUTE_PATH = '/api/translations';
const LOCALES_PATH = 'src/shared/locales';
const DEFAULT_LNG = 'en';

let _i18next_: i18n;
let _loadedPaths: string[] = [];

type TranslationsDefaultState = {
  lng: string;
  loadedPaths: string[];
  resources: Record<string, any>;
};

type Props = {
  translations: TranslationsDefaultState;
};

const Translated: FC<PropsWithChildren<Props>> = ({
  children,
  translations: { resources, loadedPaths, lng }
}) => {
  const i18n = useMemo(() => {
    const instance = i18next.use(initReactI18next).createInstance({
      lng: lng ?? DEFAULT_LNG,
      defaultNS: 'translations',
      resources
    });

    if (environment.isClient) {
      _i18next_ = instance;

      _loadedPaths.push(...loadedPaths);
    }

    instance.init();

    return instance;
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

const readResources = async (paths: string[], lng: string) => {
  const pathsMap = paths.map(name => [
    name,
    path.resolve(process.cwd(), LOCALES_PATH, lng, `${name}.json`)
  ]);

  const result: [string, Record<string, any>][] = [];

  for await (const [name, filePath] of pathsMap) {
    result.push([
      name,
      JSON.parse((await readFile(filePath)).toString()) as Record<string, any>
    ]);
  }

  return result;
};

const pullResources = async (
  paths: string[],
  lng: string,
  resources: Record<string, any> = {},
  loadedPaths: string[] = []
) => {
  for (const [name, value] of await readResources(paths, lng)) {
    set(resources, `${lng}.translations.${name}`, value);
  }

  loadedPaths.push(...paths);

  return resources;
};

const fetchResources = async (paths: string[], lng: string) => {
  const _paths = paths.filter(item => !_loadedPaths.includes(item));

  if (!_paths.length) return;

  const response = await axios.post(API_ROUTE_PATH, {
    namespaces: _paths,
    lng
  });

  _loadedPaths.push(..._paths);

  _i18next_.addResourceBundle(
    lng,
    'translations',
    response.data as Record<string, any>
  );
};

const getTranslations: NextApiHandler = async (req, res) => {
  const { lng, namespaces } = req.body as {
    lng: string;
    namespaces: string[];
  };

  const resources: Record<string, any> = {};

  for (const [name, value] of await readResources(namespaces, lng)) {
    set(resources, name, value);
  }

  res.status(200).send(resources);
};

const loadResources =
  (
    lng: string,
    resources: Record<string, any> = {},
    loadedPaths: string[] = []
  ) =>
  async (paths: string[]) => {
    await (environment.isClient
      ? fetchResources(paths, lng)
      : pullResources(paths, lng, resources, loadedPaths));
  };

const getInitialPropsWithTranslations = function (
  source: (context: AppContext) => Promise<Record<string, any>>
) {
  return (async (context: AppContext) => {
    let resources: Record<string, any> = {};
    let loadedPaths: string[] = [];
    let lng = (context.router.locale as string) || 'en';

    context.ctx.loadResources = loadResources(lng, resources, loadedPaths);

    const translations = {
      lng,
      resources,
      loadedPaths
    };

    return {
      ...(await source(context)),

      translations
    };
  }) as (
    context: AppContext
  ) => Promise<Record<string, any>> | Record<string, any>;
};

function withTranslations<P extends {}>(Source: ComponentType<P>) {
  return (({ translations, ...props }: Record<string, any>) => (
    <Translated translations={translations as TranslationsDefaultState}>
      {/* @ts-expect-error temporary, JSX typings problems */}
      <Source {...props} />
    </Translated>
  )) as any as ComponentType<P> & {
    getInitialProps: <R>(context: AppContext) => Promise<R> | R;
  };
}

export type { TranslationsDefaultState };
export {
  Translated,
  loadResources,
  getTranslations,
  withTranslations,
  getInitialPropsWithTranslations
};
