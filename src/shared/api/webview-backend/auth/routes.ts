import { api } from '../instance';

import type {
  LoginContract,
  LoginDto,
  RefreshContract,
  RefreshDto
} from './types';

const loginFx = api.createRoute<LoginDto, LoginContract>(data => ({
  url: '/auth/login',
  method: 'POST',
  data
}));

const refreshFx = api.createRoute<RefreshDto, RefreshContract>(data => ({
  url: '/auth/refresh',
  method: 'POST',
  data
}));

const logoutFx = api.createRoute({
  url: '/auth/logout'
});

export { loginFx, logoutFx, refreshFx };
