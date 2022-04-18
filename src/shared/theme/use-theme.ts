import { useStore } from 'effector-react';
import { $theme } from './model';

const useTheme = () => useStore($theme);

export { useTheme };
