import '@styles/global.scss';
import { Provider } from 'effector-react/scope';
import { withEffector } from 'nextjs-effector';
import { App } from '@app';
import type { AppProps } from 'next/app';

export default withEffector(App as (props: AppProps) => JSX.Element, {
  Provider
});
