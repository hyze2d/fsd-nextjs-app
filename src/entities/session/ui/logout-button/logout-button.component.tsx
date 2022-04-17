import { hoc } from '@lib/react';
import { Button } from '@ui/button';

import { useLogoutButton } from './logout-button.props';

const LogoutButton = hoc(useLogoutButton, ({ logoutClicked }) => (
  <Button onClick={logoutClicked}>Logout</Button>
));

export { LogoutButton };
