import { hoc } from '@lib/react';
import { Button } from '@shared/ui/atoms/button';

import { useAuthFormProps } from './auth-form.props';

//FIXME: Move to @features/auth
const AuthForm = hoc(useAuthFormProps, ({ onSubmitClick }) => (
  <div>
    <Button onClick={onSubmitClick}>Authorize</Button>
  </div>
));

export { AuthForm };
