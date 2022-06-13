import { App, withScope } from '@app';
import type { AppProps } from 'next/app';
import '@styles/global.scss';

export default withScope(App as (props: AppProps) => JSX.Element);
