import { useEvent } from 'effector-react/scope';

import { logoutClicked } from '../../model';

const onLogoutClick = logoutClicked.prepend(() => {});

const useLogoutButton = () => ({ onLogoutClick: useEvent(onLogoutClick) });

export { useLogoutButton };
