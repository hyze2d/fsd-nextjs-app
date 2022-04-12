import { hoc } from '@shared/lib/react/hoc';
import { Button } from '@shared/ui/button';
import { useAuthFormProps } from './auth-form.props';

const AuthForm = hoc(useAuthFormProps, ({ onSubmitClick }) => (
  <div>
    <Button onClick={onSubmitClick}>Authorize</Button>
  </div>
));

export { AuthForm };
