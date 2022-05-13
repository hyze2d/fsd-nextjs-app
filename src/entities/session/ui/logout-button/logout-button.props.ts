import { useEvent } from 'effector-react/scope';

import { logoutClicked } from '../../model';

const onLogoutClick = logoutClicked.prepend(() => {});

const useLogoutButton = () => {
  const logoutClicked = useEvent(onLogoutClick);

  return { logoutClicked };
};

export { useLogoutButton };
