import { hoc } from '@lib/react';

import { Button } from '@ui/atoms/button';

import { useLogoutButton } from './logout-button.props';

const LogoutButton = hoc(useLogoutButton, ({ onLogoutClick }) => (
  <Button onClick={onLogoutClick}>Logout</Button>
));

export { LogoutButton };
