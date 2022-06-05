import { App } from '@app/index';
import type { AppProps } from 'next/app';
import { withScope } from '@shared/lib/next-scope';
import '@styles/global.scss';

export default withScope(App as (props: AppProps) => JSX.Element);
