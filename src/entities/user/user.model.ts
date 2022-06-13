import { createEffect, createStore } from 'effector';
import type { User } from './lib';

const getUserFx = createEffect<void, User>();

const $user = createStore<User | null>(null);

$user.on(getUserFx.doneData, (_, user) => user);

getUserFx.use(() => ({
  id: 1,
  firstName: 'John',
  lastName: 'Psina'
}));

export { $user, getUserFx };
