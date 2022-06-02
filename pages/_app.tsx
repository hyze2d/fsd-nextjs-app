import { appWithTranslation } from 'next-i18next';
import { withScope } from '@shared/lib/next';
import '../src/app/app.scss';
import { App } from '../src/app/index';

export default appWithTranslation(withScope(App));
