import { useEvent, useStore } from 'effector-react/scope';

import type { ChangeEvent, FormEvent } from 'react';

import {
  $email,
  $password,
  emailChanged,
  formSubmitted,
  passwordChanged
} from '../../model';

const onSubmit = formSubmitted.prepend((e: FormEvent<HTMLFormElement>) =>
  e.preventDefault()
);

const onEmailChange = emailChanged.prepend(
  (e: ChangeEvent<HTMLInputElement>) => e.target.value
);

const onPasswordChange = passwordChanged.prepend(
  (e: ChangeEvent<HTMLInputElement>) => e.target.value
);

const useLoginForm = () => {
  const onSubmitEvent = useEvent(onSubmit);
  const onEmailChangeEvent = useEvent(onEmailChange);
  const onPasswordChangeEvent = useEvent(onPasswordChange);

  const email = useStore($email);
  const password = useStore($password);

  return {
    email,
    password,

    onSubmit: onSubmitEvent,
    onEmailChange: onEmailChangeEvent,
    onPasswordChange: onPasswordChangeEvent
  };
};

export { useLoginForm };
