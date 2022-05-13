import React from 'react';

import { hoc } from '@lib/react';

import { Button } from '@ui/atoms/button';

import { useLoginForm } from './login-form.props';

const AuthByEmailForm = hoc(
  useLoginForm,
  ({ email, password, onEmailChange, onPasswordChange, onSubmit }) => (
    <form onSubmit={onSubmit}>
      <input
        value={email}
        onChange={onEmailChange}
        type='email'
        placeholder='Email'
      />

      <input
        value={password}
        onChange={onPasswordChange}
        type='password'
        placeholder='Password'
      />

      <Button type='submit'>Submit</Button>
    </form>
  )
);

export { AuthByEmailForm };
